const documentContents = require('./documentContents');

module.exports["test-phone-user"] = {
    session: "DG215870496878Q27G5SN7HX9FB7V49AF65Z27U7RN93M7U59FZ686PZ7NQ6Y19UJ5X67"
};
module.exports["DG215870496878Q27G5SN7HX9FB7V49AF65Z27U7RN93M7U59FZ686PZ7NQ6Y19UJ5X67"] = {
    agentData: {
        "RESULT": {
            "PRODUCT_LIST": {
                "PRODUCT": [
                    {
                        "RISKS": {},
                        "APPLICATION_CODE": "WG DE GSBK 0219",
                        "SIGNATURES": "0",
                        "PURCHASE_PRICE_LIMITATIONS": {
                            "MAX_PRICE": [
                                {
                                    "OBJECT_DESCRIPTION": "Notebook",
                                    "AMOUNT": "5000",
                                    "OBJECT_CODE": "30"
                                },
                                {
                                    "OBJECT_DESCRIPTION": "PC System",
                                    "AMOUNT": "5000",
                                    "OBJECT_CODE": "31"
                                }
                            ]
                        },
                        "PRODUCT_TYPE": "GERAETESCHUTZ_KOMFORT_3_2015",
                        "PRODUCT_NAME": "Geräteschutz KOMFORT 3",
                        "COLLECTIONTYPES": {
                            "Einzug": "true",
                            "VMRAbrechnung": "true"
                        },
                        "TERM": "Einmalprämie",
                        "MAX_DEVICES_EACH_CONTRACT": "1",
                        "PAYMENTINTERVALS": {
                            "INTERVAL": {
                                "VALUE": "0",
                                "DESCRIPTION": "Einmalprämie"
                            }
                        },
                        "SIGANATURES": "0"
                    },
                    {
                        "RISKS": {
                            "RISK": {
                                "RISK_NAME": "Diebstahlschutz",
                                "RISK_TYPE": "DIEBSTAHLSCHUTZ"
                            }
                        },
                        "APPLICATION_CODE": "GU WG DE KS 0419",
                        "SIGNATURES": "1",
                        "PURCHASE_PRICE_LIMITATIONS": {
                            "MAX_PRICE": [
                                {
                                    "OBJECT_DESCRIPTION": "Mobilfunk",
                                    "AMOUNT": "1800",
                                    "OBJECT_CODE": "73"
                                },
                                {
                                    "OBJECT_DESCRIPTION": "Smartphone",
                                    "AMOUNT": "1800",
                                    "OBJECT_CODE": "9025"
                                },
                                {
                                    "AMOUNT": "10000",
                                    "OBJECT_CODE": {}
                                }
                            ]
                        },
                        "PRODUCT_TYPE": "KOMPLETTSCHUTZ_2019",
                        "PRODUCT_NAME": "Komplettschutz 2019",
                        "COLLECTIONTYPES": {
                            "Einzug": "true",
                            "Selbstzahler": "true"
                        },
                        "TERM": "langfristig",
                        "MAX_DEVICES_EACH_CONTRACT": "3",
                        "PAYMENTINTERVALS": {
                            "INTERVAL": [
                                {
                                    "VALUE": "1",
                                    "DESCRIPTION": "monatlich"
                                },
                                {
                                    "VALUE": "3",
                                    "DESCRIPTION": "vierteljährlich"
                                },
                                {
                                    "VALUE": "6",
                                    "DESCRIPTION": "halbjährlich"
                                },
                                {
                                    "VALUE": "12",
                                    "DESCRIPTION": "jährlich"
                                }
                            ]
                        },
                        "SIGANATURES": "1"
                    }
                ]
            }
        },
        "LANGUAGE": "DE",
        "MAXAMOUNT": "2",
        "AMOUNT": "30",
        "STATUS": "OK",
        "REQUEST_ID": "98838980",
        "ORDERBY": "PRODUCT_NAME",
        "SORT": "ASC",
        "STATUSCODE": "0",
        "PAGE": "1"
    },
    advertisingText: {
        "RESULT": {
            "ADVERTISING_TEXTS": {
                "ADVERTTISING_TEXT": [
                    {
                        "TEXT": "tolles Produkt",
                        "NAME": "Werbetext1"
                    },
                    {
                        "TEXT": "Diebstahloption vorhanden",
                        "NAME": "Werbetext2"
                    },
                    {
                        "TEXT": "Vorauszahlung für 3 oder 5 Jahre möglich",
                        "NAME": "Werbetext4"
                    },
                    {
                        "TEXT": "Geht über die gesetzliche Garantie hinaus",
                        "NAME": "Werbetext3"
                    }
                ]
            }
        },
        "LANGUAGE": "DE",
        "MAXAMOUNT": "4",
        "AMOUNT": {},
        "STATUS": "OK",
        "REQUEST_ID": "98840984",
        "ORDERBY": {},
        "SORT": {},
        "STATUSCODE": "0",
        "PAGE": {}
    },
    comparisonDocuments: {
        "RESULT": {
            "DOCUMENTS": {
                "DOCUMENT": {
                    "FILENAME": "Leistungsvergleich KS19.pdf",
                    "CONTENT": documentContents.comparisonDocHandy
                }
            }
        },
        "LANGUAGE": "DE",
        "MAXAMOUNT": "1",
        "AMOUNT": {},
        "STATUS": "OK",
        "REQUEST_ID": "98868606",
        "ORDERBY": {},
        "SORT": {},
        "STATUSCODE": "0",
        "PAGE": {}
    },
    legalDocuments: {
        "RESULT": {
            "DOCUMENT": [
                {
                    "FILENAME": "GU WG DE KS 0419_RECHTSDOKUMENTE.PDF",
                    "CONTENT": documentContents.legalDocHandy
                }
            ],
        },
        "LANGUAGE": "DE",
        "MAXAMOUNT": "5",
        "AMOUNT": {},
        "STATUS": "OK",
        "REQUEST_ID": "98868588",
        "ORDERBY": {},
        "SORT": {},
        "STATUSCODE": "0",
        "PAGE": {}
    },
    insurancePremiums: {
        "RESULT": {
            "PREMIUM_SINGLE_PAYMENT": "0",
            "FEHLERMELDUNG": {},
            "PREMIUM_RECURRING": "83,4"
        },
        "LANGUAGE": "DE",
        "MAXAMOUNT": "0",
        "AMOUNT": "30",
        "STATUS": "OK",
        "REQUEST_ID": "98841369",
        "ORDERBY": {},
        "SORT": {},
        "STATUSCODE": "0",
        "PAGE": "1"
    }
};