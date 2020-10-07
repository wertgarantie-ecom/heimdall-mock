const shopConfigurations = require('./clientProductConfigurations/shopConfigurations');
const xmlParser = require('xml-parser');

const express = require('express');
const router = express.Router();


function sendNotOkResponse(body, res, message) {
    return res.status(200).send({
        "STATUS": "NOT OK: " + message,
        "BODY": JSON.stringify(body)
    });
}

router.post('/login.pl', function (req, res) {
    if (!(req.body.USER && req.body.PASSWORD && req.body.COMPANY && req.body.API)) {
        return sendNotOkResponse(req.body, res, "unvollständiger request body");
    }
    const client = shopConfigurations[req.body.USER];
    if (!client) {
        return res.status(200).send({
            "STATUS": "NOT OK: Login failed",
            "MESSAGE": "Kein bekannter shop im Mock. Fehlt vielleicht eine Konfiguration?"
        });
    }
    return res.status(200).send({
        "STATUS": "OK: Login",
        "SESSION": client.session,
        "STATUSCODE": "0"
    });
});

router.post('/callservice.pl', function (req, res) {
    let clientData = shopConfigurations[req.body.SESSION];
    if (!clientData) {
        return sendNotOkResponse(req.body, res, "ungültige session" + req.body.SESSION);
    }
    switch (req.body.FUNCTION) {
        case "GET_AGENT_DATA":
            return agentData(req, res, clientData);
        case "GET_PRODUCT_DATA":
            return productData(req, res, clientData);
        case "GET_NEW_CONTRACTNUMBER":
            return send(clientData.newContractNumber(), res);
        case "SET_XML_INTERFACE":
            return send(clientData.insuranceProposalResponse, res);
        default:
            return sendNotOkResponse(req.body, res, "keine FUNCTION gefunden zu " + req.body.FUNCTION);
    }
});

function send(content, res) {
    res.header('Access-Control-Allow-Origin', '*');
    return res.status(200).send(content);
}

function agentData(req, res, clientData) {
    const agentData = clientData.agentData;
    if (!agentData) {
        return sendNotOkResponse(req.body, res, "Keine Versicherungsprodukte zu diesem Client gefunden. Client-Konfiguration überprüfen");
    }
    return res.status(200).send(agentData);
}

function makeParsedXMLHandy(root) {
    root.children.forEach(child => {
        if (child.children && child.children.length > 0) {
            root[child.name] = [];
            child.children.forEach(grandChild => {
                root[child.name].push(makeParsedXMLHandy(grandChild));
            });
        } else {
            root[child.name] = child.content
        }
        delete root.attributes;
        delete root.name;
        delete root.children;
        delete root.content;
    });
    return root;
}

function getRelevantInsurancePremiumData(data) {
    const objectPriceFormatted = data.DEVICES[0].OBJECT_PRICE.replace(",", ".");
    return {
        paymentInterval: parseInt(data.PAYMENT_INTERVAL),
        objectCode: data.DEVICES[0].OBJECT_CODE,
        objectPrice: parseFloat(objectPriceFormatted),
        productType: data.PRODUCTTYPE,
        risks: data.DEVICES[0].RISKS.map(risk => risk.RISIKOTYP)
    }
}

function assembleInsurancePremiumResponse(req) {
    const xmlData = req.body.DATA;
    const parsedXML = xmlParser(xmlData);
    const data = makeParsedXMLHandy(parsedXML.root);
    const relevantData = getRelevantInsurancePremiumData(data);
    const premiumsPerRisk = shopConfigurations[req.body.SESSION].premiumsPerYear[relevantData.objectCode].getInsurancePremiumsPerRisk(relevantData.objectPrice);
    if (!premiumsPerRisk) {
        return shopConfigurations.createDefaultErrorResponse;
    }
    let sum = 0;
    relevantData.risks.forEach(risk => {
        sum += premiumsPerRisk[risk][relevantData.productType] / 12 * relevantData.paymentInterval;
    });
    return shopConfigurations.createPremiumResponse(sum);

}

function assembleLegalDocumentResponse(legalDocuments, req) {
    const documentType = req.body.DOCUMENT_TYPE;
    if (documentType && documentType !== "EINZELN") {
        const doc = legalDocuments.RESULT.DOCUMENT.filter(document => document.DOCUMENT_TYPE === documentType);
        legalDocuments.RESULT.DOCUMENT = doc[0];
    }
    return legalDocuments;
}

function productData(req, res, clientData) {
    switch (req.body.SHAPING) {
        case "ADVERTISING_TEXT": {
            return send(clientData.advertisingText, res);
        }
        case "COMPARISON_DOCUMENTS": {
            return send(clientData.comparisonDocuments, res);
        }
        case "LEGAL_DOCUMENTS": {
            return send(assembleLegalDocumentResponse(clientData.legalDocuments(), req), res);
        }
        case "INSURANCE_PREMIUM": {
            return send(assembleInsurancePremiumResponse(req), res);
        }
        default:
            return sendNotOkResponse(req.body, res, "SHAPING konnte nicht zugeordnet werden.");
    }
}

module.exports = router;
