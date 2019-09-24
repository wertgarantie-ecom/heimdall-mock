var express = require('express');
var router = express.Router();
/*
https://api.wertgarantie.com/api/v1/product-offers?device_class=04854bfa-1a02-4b44-b981-46f7ead8bb7e&device_purchase_price=800&device_purchase_date=2018-09-01
*/
router.get('/api/v1/product-offers', function (req, res) {
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
                "id": 11,
                "premium": false,
                "name": "Schutzpaket Premium",
                "payment": "Monat",
                "url": null,
                "utm_campaign": null,
                "services": [],
                "advantages": [
                    "Fall und Sturzschäden",
                    "Feuchtigkeitsschäden",
                    "Verschleiß inkl. Akku Defekten"
                ],
                "price": "9,95",
                "price_type": "ab",
                "price_currency": "€",
                "price_formatted": "ab 9,95 €",
                "price_tax": "1,59",
                "documents": [
                    {
                        "document_title": "Informationsblatt für Versicherungsprodukte",
                        "document_file": "schutzpaket_md_premium_2017_|_ipid_premium",
                        "document_type": "IPID",
                        "document_link": "https://stage-api.wertgarantie.com/download/b5cf7159-264e-4f0a-a6df-485f62afb814"
                    },
                    {
                        "document_title": "Allgemeine Versicherungsbedingungen",
                        "document_file": "schutzpaket_md_premium_2017_|_avb_premium",
                        "document_type": "GTCI",
                        "document_link": "https://stage-api.wertgarantie.com/download/76c4e67c-89bf-4bd4-a1d2-b6470ed07629"
                    }
                ]
            },
            {
                "id": 14,
                "premium": true,
                "name": "Schutzpaket Premium inkl. Diebstahlschutz",
                "payment": "Monat",
                "url": null,
                "utm_campaign": null,
                "services": [
                    "einfacher Diebstahl"
                ],
                "advantages": [
                    "Fall und Sturzschäden",
                    "Feuchtigkeitsschäden",
                    "Verschleiß inkl. Akku Defekten"
                ],
                "price": "11,95",
                "price_type": "ab",
                "price_currency": "€",
                "price_formatted": "ab 11,95 €",
                "price_tax": "1,91",
                "documents": [
                    {
                        "document_title": "Informationsblatt für Versicherungsprodukte",
                        "document_file": "schutzpaket_md_premium_2017_|_ipid_premium",
                        "document_type": "IPID",
                        "document_link": "https://stage-api.wertgarantie.com/download/b17f85d5-58c1-416c-869f-85ff572afd9c"
                    },
                    {
                        "document_title": "Allgemeine Versicherungsbedingungen",
                        "document_file": "schutzpaket_md_premium_2017_|_avb_premium",
                        "document_type": "GTCI",
                        "document_link": "https://stage-api.wertgarantie.com/download/49b77b3d-a949-4fa9-8c51-34edadfa959d"
                    }
                ]
            }
        ]
    });
});

module.exports = router;
