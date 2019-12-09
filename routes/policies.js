const express = require('express');
const validate = require('express-jsonschema').validate;
const checkoutSchema = require('./checkoutSchema').checkoutSchema;
const router = express.Router();


const phone11 = {
    "id": 11,
    "premium": false,
    "name": "Schutzpaket Basis",
    "payment": "Monat",
    "url": null,
    "utm_campaign": null,
    "services": [],
    "top_3": [
        "Für private und berufliche Nutzung",
        "Unsachgemäße Handhabung",
        "Weltweiter Schutz"
    ],
    "advantages": [
        "Volle Kostenübernahme bei Reparaturen",
        "Bei Totalschaden zählt der Zeitwert",
        "Für private und berufliche Nutzung",
        "Weltweiter Schutz",
        "Geräte bis 12 Monate nach Kaufdatum gelten als Neugeräte",
        "Unsachgemäße Handhabung"
    ],
    "excluded_advantages": [
        "Cyberschutz bei Missbrauch von Online-Accounts und Zahlungsdaten",
        "Diebstahlschutz",
        "Keine Selbstbeteiligung im Schadensfall",
        "einfacher Diebstahl"
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
};

const phone14 = {
    "id": 14,
    "premium": true,
    "name": "Schutzpaket Premium inkl. Diebstahlschutz",
    "payment": "Monat",
    "url": null,
    "utm_campaign": null,
    "services": [
        "einfacher Diebstahl"
    ],
    "top_3": [
        "Schutz vor Diebstahl",
        "Schutz vor Displaybrüchen",
        "Schutz vor Wasserschäden"
    ],
    "advantages": [
        "Cyberschutz bei Missbrauch von Online-Accounts und Zahlungsdaten",
        "Diebstahlschutz",
        "Keine Selbstbeteiligung im Schadensfall",
        "Volle Kostenübernahme bei Reparaturen",
        "Bei Totalschaden zählt der Zeitwert",
        "Für private und berufliche Nutzung",
        "Weltweiter Schutz",
        "Geräte bis 12 Monate nach Kaufdatum gelten als Neugeräte",
        "Unsachgemäße Handhabung"
    ],
    "excluded_advantages": [],
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
};

const jsonPayloadPhones = [
    phone11,
    phone14
];

const bike21 = {
    "id": 21,
    "premium": false,
    "name": "E-Bike Komplettschutz mit monatlicher Zahlweise",
    "payment": "Monat",
    "url": null,
    "utm_campaign": null,
    "services": [],
    "top_3": [
        "Unterwegs was passiert? Wir holen Sie ab!",
        "Schaden an Fahrrad oder Motor? Wir kümmern uns um die Reparatur und Kosten!",
        "Diebstahl? Wir erstatten den Zeitwert!"
    ],
    "advantages": [
        "Pick-Up-Service",
        "Volle Kostenübernahme bei Reparaturen",
        "Unsachgemäße Handhabung",
        "Verschleißschutz",
        "Diebstahlschutz",
        "Teilediebstahlschutz"
    ],
    "excluded_advantages": [],
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
};

const bike24 = {
    "id": 24,
    "premium": true,
    "name": "E-Bike Komplettschutz mit jährlicher Zahlweise",
    "payment": "Jahr",
    "url": null,
    "utm_campaign": null,
    "services": [
        "einfacher Diebstahl"
    ],
    "top_3": [
        "Unterwegs was passiert? Wir holen Sie ab!",
        "Schaden an Fahrrad oder Motor? Wir kümmern uns um die Reparatur und Kosten!",
        "Diebstahl? Wir erstatten den Zeitwert!"
    ],
    "advantages": [
        "Pick-Up-Service",
        "Volle Kostenübernahme bei Reparaturen",
        "Unsachgemäße Handhabung",
        "Verschleißschutz",
        "Diebstahlschutz",
        "Teilediebstahlschutz"
    ],
    "excluded_advantages": [],
    "price": "109,95",
    "price_type": "ab",
    "price_currency": "€",
    "price_formatted": "ab 109,95 €",
    "price_tax": "17,56",
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
};

const jsonPayloadBikes = [
    bike21,
    bike24
];

const returnProductMap = {
    "1dfd4549-9bdc-4285-9047-e5088272dade": jsonPayloadPhones,
    "2dc16d28-c7af-4e19-9494-1659e1c27201": jsonPayloadPhones,
    "41ade4ba-5f24-4321-b706-fa6d05d75a73": jsonPayloadPhones,
    "bb3a615d-e92f-4d24-a4cc-22f8a87fc544": jsonPayloadPhones,
    "ebfb2d44-4ff8-4579-9cc0-0a3ccb8d6f2d": jsonPayloadPhones,
    "bike": jsonPayloadBikes
};

const allProductsByDeviceClass = {
    "1dfd4549-9bdc-4285-9047-e5088272dade": {
        "11": phone11,
        "14": phone14
    },
    "2dc16d28-c7af-4e19-9494-1659e1c27201": {
        "11": phone11,
        "14": phone14
    },
    "41ade4ba-5f24-4321-b706-fa6d05d75a73": {
        "11": phone11,
        "14": phone14
    },
    "bb3a615d-e92f-4d24-a4cc-22f8a87fc544": {
        "11": phone11,
        "14": phone14
    },
    "ebfb2d44-4ff8-4579-9cc0-0a3ccb8d6f2d": {
        "11": phone11,
        "14": phone14
    },
    "6bdd2d93-45d0-49e1-8a0c-98eb80342222": {
        "21": bike21,
        "24": bike24
    }
};

function getProductsByDeviceClass(deviceClass) {
    const products = returnProductMap[deviceClass];
    if (products) {
        return products;
    }
    return jsonPayloadBikes;
}

/*
https://api.wertgarantie.com/api/v1/product-offers?device_class=04854bfa-1a02-4b44-b981-46f7ead8bb7e&device_purchase_price=800&device_purchase_date=2018-09-01
*/
router.get('/dummy-product-offers', function (req, res) {
    if(!(req.query.device_class && req.query.device_purchase_price && req.query.device_purchase_date)) {
        throw new Error("Insufficient query parameters");
    }

    if (!req.accepts("json")) {
        console.log(req.header("Accept"));
        throw new Error("Invalid accept header");
    }

    const productPayload = getProductsByDeviceClass(req.query.device_class);
    res.send({
        payload: productPayload
    });
});

router.get('/dummy-product', function (req, res) {
    if (!(req.query.device_class && req.query.product_id)) {
        res.status(400).send({error: "insufficient query params: device_class and product_id must be provided"});
    }
    const productsForDeviceClass = allProductsByDeviceClass[req.query.device_class];
    if (!productsForDeviceClass) {
        res.status(400).send({error: "Device class '" + req.query.device_class + "' unknown."});
    }
    const product = productsForDeviceClass[req.query.product_id];
    if (!product) {
        res.status(400).send({error: "No product for device class '" + req.query.device_class + "' unknown."});
    }
    res.send(product);
});

router.get('/product-offers', function (req, res) {
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


router.post("/api/v1/products/:productId/checkout", validate({body: checkoutSchema}), function (req, res) {
    res.send({
        payload: {
            contract_number: "28850277",
            transaction_number: "28850277",
            activation_code: "4db56dacfbhce",
            message: "Der Versicherungsantrag wurde erfolgreich übermittelt."
        }
    });
});


module.exports = router;


/* Additional product alternative, if needed for test purposes

,
            {
                "id": 17,
                "premium": false,
                "name": "Schutzpaket Super duper Premium",
                "payment": "Jahr",
                "url": null,
                "utm_campaign": null,
                "services": [
                    "Missbrauch durch Hacking",
                    "einfacher Diebstahl",
                    "Baden gehen"
                ],
                "advantages": [
                    "Fall und Sturzschäden",
                    "Feuchtigkeitsschäden",
                    "Verschleiß inkl. Akku Defekten",
                    "Explosionsschutz"
                ],
                "price": "99.95",
                "price_type": "ab",
                "price_currency": "€",
                "price_formatted": "ab 99,95 €",
                "price_tax": "15,96",
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
            }

*/