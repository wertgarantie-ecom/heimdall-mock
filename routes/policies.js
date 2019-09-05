var express = require('express');
var router = express.Router();
/*
https://api.wertgarantie.com/api/v1/product-offers?device_class=04854bfa-1a02-4b44-b981-46f7ead8bb7e&device_purchase_price=800&device_purchase_date=2018-09-01
*/
router.get('/api/v1/product-offers', function (req, res, next) {
    if(!(req.query.device_class && req.query.device_purchase_price && req.query.device_purchase_date)) {
        throw new Error("Insufficient query parameters");
    }

    if (!req.accepts("json")) {
        console.log(req.header("Accept"));
        throw new Error("Invalid accept header");
    }

    res.send({
        "payload": [
            {
                "id": 1,
                "name": "Komplettschutz",
                "payment": "Monat",
                "url":
                    "https://www.wertgarantie.com/Home/Landingpage/komplettschutz.aspx",
                "utm_campaign": "offer-ks",
                "services": [
                    "Schutz vor Reparaturkosten"
                ],
                "advantages": [
                    "Reparaturkostenübernahme bei Sturzschäden, Akkudefekten, Wasserschäden, u.v.m.",
                    "Auch für Gebrauchtgeräte",
                    "Schnelle, unkomplizierte Schadensabwicklung",
                    "Kostenbeteiligung bei Neukauf"
                ],
                "price": "5,00",
                "price_type": "ab",
                "price_currency": "€",
                "price_formatted": "ab 5,00 €",
                "price_tax": "0,80",
                "documents": [
                    {
                        "document_title": "gu_wg_de_ks_0918_rechtsdokumente.pdf",
                        "document_file": "gu_wg_de_ks_0918_rechtsdokumente.pdf",
                        "document_link": "https://api.wertgarantie.com/download/84fa9900-f476-4917- a79c-5fa1cb26ea53"
                    }]
            },
            {
                "id": 2,
                "name": "Komplettschutz - Premium",
                "payment": "Monat",
                "url": "https://www.wertgarantie.com/Home/Landingpage/komplettschutz.aspx",
                "utm_campaign": "offer-ks-premium",
                "services": [
                    "+ Diebstahlschutz",
                    "+ ohne Selbstbeteiligung"
                ],
                "advantages": [
                    "Reparaturkostenübernahme bei Fall- & Sturzschäden, Akkudefekten, Wasser - schäden, u.v.m.", "Diebstahlschutz inklusive",
                    "Keine Selbstbeteiligung",
                    "Kostenbeteiligung bei Neukauf"
                ],
                "price": "6,95",
                "price_type": "ab",
                "price_currency": "€",
                "price_formatted": "ab 6,95 €",
                "price_tax": "1,11",
                "documents": []
            }
        ]
    });
});

module.exports = router;
