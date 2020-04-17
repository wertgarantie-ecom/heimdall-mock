const clientProductConfigurations = require('./clientProductConfigurations/shopConfigurations');

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
    const client = clientProductConfigurations[req.body.USER];
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
    let clientData = clientProductConfigurations[req.body.SESSION];
    if (!clientData) {
        return sendNotOkResponse(req.body, res, "ungültige session" + req.body.SESSION);
    }
    switch (req.body.FUNCTION) {
        case "GET_AGENT_DATA": return agentData(req, res, clientData);
        case "GET_PRODUCT_DATA": return productData(req, res, clientData);
        default: return sendNotOkResponse(req.body, res, "keine FUNCTION gefunden zu " + req.body.FUNCTION);
    }
});

function send(content, res) {
    res.status(200).send(content);
}

function agentData(req, res, clientData) {
    const agentData = clientData.agentData;
    if (!agentData) {
        return sendNotOkResponse(req.body, res, "Keine Versicherungsprodukte zu diesem Client gefunden. Client-Konfiguration überprüfen");
    }
    return res.status(200).send(agentData);
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
            return send(clientData.legalDocuments, res);
        }
        case "INSURANCE_PREMIUM": {
            return send(clientData.insurancePremiums, res);
        }
        default: return sendNotOkResponse(req.body, res, "SHAPING konnte nicht zugeordnet werden.");
    }
}

module.exports = router;
