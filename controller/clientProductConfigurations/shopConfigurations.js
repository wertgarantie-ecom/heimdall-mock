const GDPR = require('./documentContents/phone/GDPR').GDPRContent;
const GTCI = require('./documentContents/phone/GTCI').GTCIContent;
const IPID = require('./documentContents/phone/IPID').IPIDContent;
const POLICY = require('./documentContents/phone/POLICY').POLICYContent;
const COMPARISON = require('./documentContents/phone/COMPARISON').COMPARISONContent;
const ROW = require('./documentContents/phone/ROW').ROWContent;
const VWT = require('./documentContents/phone/VWT').VWTContent;

let contractNumber = 10000;

function getPhoneInsurancePremiums(objectPrice) {
    if (objectPrice > 0 && objectPrice <= 300) {
        return {
            "KOMPLETTSCHUTZ": {
                "KOMPLETTSCHUTZ_2019": 60
            },
            "DIEBSTAHLSCHUTZ": {
                "KOMPLETTSCHUTZ_2019": 23.4
            }
        }
    } else if (objectPrice > 300 && objectPrice <= 800) {
        return {
            "KOMPLETTSCHUTZ": {
                "KOMPLETTSCHUTZ_2019": 96
            },
            "DIEBSTAHLSCHUTZ": {
                "KOMPLETTSCHUTZ_2019": 35.4
            }
        }
    } else if (objectPrice > 300 && objectPrice <= 1800) {
        return {
            "KOMPLETTSCHUTZ": {
                "KOMPLETTSCHUTZ_2019": 132
            },
            "DIEBSTAHLSCHUTZ": {
                "KOMPLETTSCHUTZ_2019": 35.4
            }
        }
    } else {
        return undefined;
    }
}

function getBikeInsurancePremiums(objectPrice) {
    if (objectPrice > 0 && objectPrice <= 500) {
        return {
            "KOMPLETTSCHUTZ_RAD": {
                "KOMPLETTSCHUTZ_RAD_M_2018": 108,
                "KOMPLETTSCHUTZ_RAD_J_2018": 89
            },
        }
    } else if (objectPrice > 500 && objectPrice <= 750) {
        return {
            "KOMPLETTSCHUTZ_RAD": {
                "KOMPLETTSCHUTZ_RAD_M_2018": 144,
                "KOMPLETTSCHUTZ_RAD_J_2018": 109
            },
        }
    } else if (objectPrice > 750 && objectPrice <= 1000) {
        return {
            "KOMPLETTSCHUTZ_RAD": {
                "KOMPLETTSCHUTZ_RAD_M_2018": 180,
                "KOMPLETTSCHUTZ_RAD_J_2018": 139
            },
        }
    } else if (objectPrice > 1000 && objectPrice <= 1500) {
        return {
            "KOMPLETTSCHUTZ_RAD": {
                "KOMPLETTSCHUTZ_RAD_M_2018": 240,
                "KOMPLETTSCHUTZ_RAD_J_2018": 189
            },
        }
    } else if (objectPrice > 1500 && objectPrice <= 2000) {
        return {
            "KOMPLETTSCHUTZ_RAD": {
                "KOMPLETTSCHUTZ_RAD_M_2018": 336,
                "KOMPLETTSCHUTZ_RAD_J_2018": 269
            },
        }
    } else if (objectPrice > 2000 && objectPrice <= 4000) {
        return {
            "KOMPLETTSCHUTZ_RAD": {
                "KOMPLETTSCHUTZ_RAD_M_2018": 420,
                "KOMPLETTSCHUTZ_RAD_J_2018": 339
            },
        }
    } else {
        return undefined;
    }
}

function getElectricBikeInsurancePremiums(objectPrice) {
    if (objectPrice > 0 && objectPrice <= 1500) {
        return {
            "KOMPLETTSCHUTZ_EBIKE": {
                "KOMPLETTSCHUTZ_EBIKE_M_2018": 144,
                "KOMPLETTSCHUTZ_EBIKE_J_2018": 72
            },
        }
    } else if (objectPrice > 1500 && objectPrice <= 3000) {
        return {
            "KOMPLETTSCHUTZ_EBIKE": {
                "KOMPLETTSCHUTZ_EBIKE_M_2018": 180,
                "KOMPLETTSCHUTZ_EBIKE_J_2018": 90
            },
        }
    } else if (objectPrice > 3000 && objectPrice <= 4000) {
        return {
            "KOMPLETTSCHUTZ_EBIKE": {
                "KOMPLETTSCHUTZ_EBIKE_M_2018": 240,
                "KOMPLETTSCHUTZ_EBIKE_J_2018": 120
            },
        }
    } else if (objectPrice > 4000 && objectPrice <= 6000) {
        return {
            "KOMPLETTSCHUTZ_EBIKE": {
                "KOMPLETTSCHUTZ_EBIKE_M_2018": 360,
                "KOMPLETTSCHUTZ_EBIKE_J_2018": 180
            }
        }
    } else {
        return undefined;
    }
}

module.exports["test-phone-user"] = {
    session: "DG215870496878Q27G5SN7HX9FB7V49AF65Z27U7RN93M7U59FZ686PZ7NQ6Y19UJ5X67"
};
module.exports["test-handyflash-user"] = {
    session: "DG215870496878Q27G5SN7HX9FB7V49AF65Z27U7RN93M7U59FZ686PZ7NQ6Y19UJ5X67"
};
module.exports["test-bike-user"] = {
    session: "DG215906653016T8DE6KR6M88M47Y71847OQ7BN5G246F3PL337224GD2KR5ZO3A32",
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
                    "CONTENT": COMPARISON
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
    legalDocuments: () => {
        return {
            "RESULT": {
                "DOCUMENT": [
                    {
                        "DOCUMENT_TYPE": "GDPR",
                        "FILENAME": "GDPR.pdf",
                        "CONTENT": GDPR
                    },
                    {
                        "DOCUMENT_TYPE": "GTCI",
                        "FILENAME": "GTCI.pdf",
                        "CONTENT": GTCI
                    },
                    {
                        "DOCUMENT_TYPE": "IPID",
                        "FILENAME": "IPID.pdf",
                        "CONTENT": IPID
                    },
                    {
                        "DOCUMENT_TYPE": "POLICY",
                        "FILENAME": "POLICY.pdf",
                        "CONTENT": POLICY
                    },
                    {
                        "DOCUMENT_TYPE": "ROW",
                        "FILENAME": "Widerrufsbelehrung für Komplettschutz.pdf",
                        "CONTENT": ROW
                    },
                    {
                        "DOCUMENT_TYPE": "VWT",
                        "FILENAME": "Versicherungswerttabelle.pdf",
                        "CONTENT": VWT
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
        }
    },
    insurancePremium: {
        "RESULT": {
            "PREMIUM_SINGLE_PAYMENT": "0",
            "FEHLERMELDUNG": {},
            "PREMIUM_RECURRING_INTERVAL": "83,4",
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
    },
    premiumsPerYear: {
        "9025": {
            getInsurancePremiumsPerRisk: getPhoneInsurancePremiums
        },
        "Smartphone": {
            getInsurancePremiumsPerRisk: getPhoneInsurancePremiums
        },
        "73": {
            getInsurancePremiumsPerRisk: getPhoneInsurancePremiums
        },
        "Mobilfunk": {
            getInsurancePremiumsPerRisk: getPhoneInsurancePremiums
        }
    },
    newContractNumber: function () {
        return {
            "RESULT": {
                "NEWCONTRACTNUMBER": contractNumber++ + ""
            },
            "LANGUAGE": "DE",
            "MAXAMOUNT": "1",
            "AMOUNT": "30",
            "STATUS": "OK",
            "REQUEST_ID": "98916696",
            "ORDERBY": {},
            "SORT": {},
            "STATUSCODE": "0",
            "PAGE": "1"
        };
    },
    insuranceProposalResponse: {
        "RESULT": {
            "STATUS_TEXT": "Verarbeitet",
            "STATUS_CODE": "3"
        },
        "LANGUAGE": "DE",
        "MAXAMOUNT": "1",
        "AMOUNT": "30",
        "STATUS": "OK",
        "REQUEST_ID": "98916702",
        "ORDERBY": {},
        "SORT": {},
        "STATUSCODE": "0",
        "PAGE": "1"
    }
};

module.exports["DG215906653016T8DE6KR6M88M47Y71847OQ7BN5G246F3PL337224GD2KR5ZO3A32"] = {
    agentData: {
        "RESULT": {
            "PRODUCT_LIST": {
                "PRODUCT": [
                    {
                        "BASIC_RISK": "AKKUSCHUTZ_EBIKE",
                        "RISKS": {
                            "RISK": {
                                "RISK_NAME": "Sofortschutz",
                                "RISK_TYPE": "SOFORTSCHUTZ"
                            }
                        },
                        "APPLICATION_CODE": "GU WG DE RAD EBS 0818",
                        "SIGNATURES": "0",
                        "PURCHASE_PRICE_LIMITATIONS": {
                            "MAX_PRICE": {
                                "AMOUNT": "10000",
                                "OBJECT_CODE": {}
                            }
                        },
                        "PRODUCT_TYPE": "AKKUSCHUTZ_EBIKE_2018",
                        "TERM": "langfristig",
                        "PRODUCT_NAME": "Akkuschutz E-Bike 2018",
                        "COLLECTIONTYPES": {
                            "Einzug": "true",
                            "Selbstzahler": "true"
                        },
                        "MAX_DEVICES_EACH_CONTRACT": "1",
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
                        "SIGANATURES": "0"
                    },
                    {
                        "BASIC_RISK": "KOMPLETTSCHUTZ_EBIKE",
                        "RISKS": {
                            "RISK": {
                                "RISK_NAME": "Sofortschutz",
                                "RISK_TYPE": "SOFORTSCHUTZ"
                            }
                        },
                        "APPLICATION_CODE": "GU WG DE RAD EBS 0818",
                        "SIGNATURES": "0",
                        "PURCHASE_PRICE_LIMITATIONS": {
                            "MAX_PRICE": {
                                "AMOUNT": "10000",
                                "OBJECT_CODE": {}
                            }
                        },
                        "PRODUCT_TYPE": "KOMPLETTSCHUTZ_EBIKE_J_2018",
                        "TERM": "langfristig",
                        "PRODUCT_NAME": "Komplettschutz EBike 2018 VarB",
                        "COLLECTIONTYPES": {
                            "Einzug": "true",
                            "Selbstzahler": "true"
                        },
                        "MAX_DEVICES_EACH_CONTRACT": "1",
                        "PAYMENTINTERVALS": {
                            "INTERVAL": {
                                "VALUE": "12",
                                "DESCRIPTION": "jährlich"
                            }
                        },
                        "SIGANATURES": "0"
                    },
                    {
                        "BASIC_RISK": "KOMPLETTSCHUTZ_EBIKE",
                        "RISKS": {
                            "RISK": {
                                "RISK_NAME": "Sofortschutz",
                                "RISK_TYPE": "SOFORTSCHUTZ"
                            }
                        },
                        "APPLICATION_CODE": "GU WG DE RAD EBS 0818",
                        "SIGNATURES": "0",
                        "PURCHASE_PRICE_LIMITATIONS": {
                            "MAX_PRICE": {
                                "AMOUNT": "10000",
                                "OBJECT_CODE": {}
                            }
                        },
                        "PRODUCT_TYPE": "KOMPLETTSCHUTZ_EBIKE_M_2018",
                        "TERM": "langfristig",
                        "PRODUCT_NAME": "Komplettschutz EBike 2018 VarA",
                        "COLLECTIONTYPES": {
                            "Einzug": "true",
                            "Selbstzahler": "true"
                        },
                        "MAX_DEVICES_EACH_CONTRACT": "1",
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
                        "SIGANATURES": "0"
                    },
                    {
                        "BASIC_RISK": "KOMPLETTSCHUTZ_RAD",
                        "RISKS": {
                            "RISK": {
                                "RISK_NAME": "Sofortschutz",
                                "RISK_TYPE": "SOFORTSCHUTZ"
                            }
                        },
                        "APPLICATION_CODE": "GU WG DE RAD KS 0818",
                        "SIGNATURES": "0",
                        "PURCHASE_PRICE_LIMITATIONS": {
                            "MAX_PRICE": {
                                "AMOUNT": "4000",
                                "OBJECT_CODE": {}
                            }
                        },
                        "PRODUCT_TYPE": "KOMPLETTSCHUTZ_RAD_J_2018",
                        "TERM": "langfristig",
                        "PRODUCT_NAME": "Komplettschutz Rad 2018 VarB",
                        "COLLECTIONTYPES": {
                            "Einzug": "true",
                            "Selbstzahler": "true"
                        },
                        "MAX_DEVICES_EACH_CONTRACT": "1",
                        "PAYMENTINTERVALS": {
                            "INTERVAL": {
                                "VALUE": "12",
                                "DESCRIPTION": "jährlich"
                            }
                        },
                        "SIGANATURES": "0"
                    },
                    {
                        "BASIC_RISK": "KOMPLETTSCHUTZ_RAD",
                        "RISKS": {
                            "RISK": {
                                "RISK_NAME": "Sofortschutz",
                                "RISK_TYPE": "SOFORTSCHUTZ"
                            }
                        },
                        "APPLICATION_CODE": "GU WG DE RAD KS 0818",
                        "SIGNATURES": "0",
                        "PURCHASE_PRICE_LIMITATIONS": {
                            "MAX_PRICE": {
                                "AMOUNT": "4000",
                                "OBJECT_CODE": {}
                            }
                        },
                        "PRODUCT_TYPE": "KOMPLETTSCHUTZ_RAD_M_2018",
                        "TERM": "langfristig",
                        "PRODUCT_NAME": "Komplettschutz Rad 2018 VarA",
                        "COLLECTIONTYPES": {
                            "Einzug": "true",
                            "Selbstzahler": "true"
                        },
                        "MAX_DEVICES_EACH_CONTRACT": "1",
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
                        "SIGANATURES": "0"
                    }
                ]
            }
        },
        "LANGUAGE": "DE",
        "MAXAMOUNT": "5",
        "AMOUNT": "30",
        "STATUS": "OK",
        "REQUEST_ID": "99020995",
        "ORDERBY": "PRODUCT_NAME",
        "SORT": "ASC",
        "STATUSCODE": "0",
        "PAGE": "1"
    },
    comparisonDocuments: {
        "RESULT": {
            "DOCUMENTS": {
                "DOCUMENT": {
                    "FILENAME": "Leistungsvergleich KS19.pdf",
                    "CONTENT": COMPARISON
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
    legalDocuments: () => {
        return {
            "RESULT": {
                "DOCUMENT": [
                    {
                        "DOCUMENT_TYPE": "GDPR",
                        "FILENAME": "GDPR.pdf",
                        "CONTENT": GDPR
                    },
                    {
                        "DOCUMENT_TYPE": "GTCI",
                        "FILENAME": "GTCI.pdf",
                        "CONTENT": GTCI
                    },
                    {
                        "DOCUMENT_TYPE": "IPID",
                        "FILENAME": "IPID.pdf",
                        "CONTENT": IPID
                    },
                    {
                        "DOCUMENT_TYPE": "POLICY",
                        "FILENAME": "POLICY.pdf",
                        "CONTENT": POLICY
                    },
                    {
                        "DOCUMENT_TYPE": "ROW",
                        "FILENAME": "Widerrufsbelehrung für Komplettschutz.pdf",
                        "CONTENT": ROW
                    },
                    {
                        "DOCUMENT_TYPE": "VWT",
                        "FILENAME": "Versicherungwerttabelle.pdf",
                        "CONTENT": VWT
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
        }
    },
    premiumsPerYear: {
        "27": {
            getInsurancePremiumsPerRisk: getBikeInsurancePremiums
        },
        "Bike": {
            getInsurancePremiumsPerRisk: getBikeInsurancePremiums
        },
        "270009": {
            getInsurancePremiumsPerRisk: getElectricBikeInsurancePremiums
        },
        "E-Bike": {
            getInsurancePremiumsPerRisk: getElectricBikeInsurancePremiums
        }
    },
    newContractNumber: function () {
        return {
            "RESULT": {
                "NEWCONTRACTNUMBER": contractNumber++ + ""
            },
            "LANGUAGE": "DE",
            "MAXAMOUNT": "1",
            "AMOUNT": "30",
            "STATUS": "OK",
            "REQUEST_ID": "98916696",
            "ORDERBY": {},
            "SORT": {},
            "STATUSCODE": "0",
            "PAGE": "1"
        };
    },
    insuranceProposalResponse: {
        "RESULT": {
            "STATUS_TEXT": "Verarbeitet",
            "STATUS_CODE": "3"
        },
        "LANGUAGE": "DE",
        "MAXAMOUNT": "1",
        "AMOUNT": "30",
        "STATUS": "OK",
        "REQUEST_ID": "98916702",
        "ORDERBY": {},
        "SORT": {},
        "STATUSCODE": "0",
        "PAGE": "1"
    }
};

module.exports.createDefaultErrorResponse = {
    "RESULT": {},
    "LANGUAGE": "DE",
    "MAXAMOUNT": "0",
    "AMOUNT": "30",
    "STATUS": "Fehler: Es ist ein technischer Fehler aufgetreten. Bitte kontaktieren Sie unseren technischen Support.",
    "REQUEST_ID": "98913587",
    "ORDERBY": {},
    "SORT": "ASC",
    "STATUSCODE": "65",
    "PAGE": "1"
};

module.exports.createPremiumResponse = function createPremiumResponse(sum) {
    const yearly = (sum * 12) + "";
    const perSelectedInterval = sum + "";
    return {
        "RESULT": {
            "PREMIUM_SINGLE_PAYMENT": "0",
            "FEHLERMELDUNG": {},
            "PREMIUM_RECURRING_INTERVAL": perSelectedInterval.replace(".", ","),
            "PREMIUM_RECURRING": yearly.replace(".", ",")
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