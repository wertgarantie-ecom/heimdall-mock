const GDPR = require('./documentContents/phone/GDPR').GDPRContent;
const GTCI = require('./documentContents/phone/GTCI').GTCIContent;
const IPID = require('./documentContents/phone/IPID').IPIDContent;
const POLICY = require('./documentContents/phone/POLICY').POLICYContent;
const COMPARISON = require('./documentContents/phone/COMPARISON').COMPARISONContent;
const ROW = require('./documentContents/phone/ROW').ROWContent;
const VWT = require('./documentContents/phone/VWT').VWTContent;
const GUFHP = require('./documentContents/phone/GUFHP').GUFHPContent;
const GUFHP_IBAN = require('./documentContents/phone/GUFHP_IBAN').GUFHP_IBANContent;

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

function getCeInsurancePremiums(objectPrice) {
    if (objectPrice > 0 && objectPrice <= 1000) {
        return {
            "KOMPLETTSCHUTZ": {
                "KOMPLETTSCHUTZ_2019": 60
            },
            "DIEBSTAHLSCHUTZ": {
                "KOMPLETTSCHUTZ_2019": 23.4
            }
        }
    } else if (objectPrice > 1000 && objectPrice <= 10000) {
        return {
            "KOMPLETTSCHUTZ": {
                "KOMPLETTSCHUTZ_2019": 96
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

module.exports["test-ce-user"] = {
    session: "DG215870496878Q27G5SN7HX9FB7V49AF65Z27U7RN93M7U59FZ686PZ7NQ6Y19UJ5X67"
};
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
        "25": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "26": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "29": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "30": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "31": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "32": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "35": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "37": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "38": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "39": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "40": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "41": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "42": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "44": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "45": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "47": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "50": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "51": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "52": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "53": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "54": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "55": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "56": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "57": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "58": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "59": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "60": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "61": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "62": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "63": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "64": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "65": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "66": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "67": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "68": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "69": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "70": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "71": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "72": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "73": {
            getInsurancePremiumsPerRisk: getPhoneInsurancePremiums
        },
        "74": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "75": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "76": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "77": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "78": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "79": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "80": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "81": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "87": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "88": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "89": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "90": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "91": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "92": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "93": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "94": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "95": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "97": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "98": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "112": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "113": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "114": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "115": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "9025": {
            getInsurancePremiumsPerRisk: getPhoneInsurancePremiums
        },
        "9026": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "9031": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "9032": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "9033": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
        },
        "59005": {
            getInsurancePremiumsPerRisk: getCeInsurancePremiums
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
    manufacturerList: {
        "RESULT": {
            "MANUFACTURER_LIST": {
                "MANUFACTURER": [
                    "Abici",
                    "A-Bike",
                    "ABUS",
                    "Accell",
                    "Active",
                    "AIST",
                    "ALAN",
                    "Alex",
                    "American Eagle",
                    "Ansgari",
                    "Antilope",
                    "Aprilia",
                    "Arcadia",
                    "Arcona",
                    "Argon 18",
                    "Arrow",
                    "AT Zweirad",
                    "Atala",
                    "Atlanta",
                    "Audi",
                    "Author",
                    "Avanti",
                    "AXA",
                    "Axess",
                    "Axiom",
                    "Babboe",
                    "Bagier",
                    "Bakfiets",
                    "Baltik vairas",
                    "Basislager",
                    "Basso",
                    "Batavus",
                    "Battaglin",
                    "Bauer",
                    "BBF",
                    "Bellini",
                    "Benotto",
                    "Bergamont",
                    "Bergwerk",
                    "BH",
                    "Bianchi",
                    "Bickerton",
                    "BICO",
                    "Bicycles",
                    "Bike Friday",
                    "Bike West",
                    "Bikemarket",
                    "Bilenky",
                    "Biomega",
                    "Birdy",
                    "Bisan",
                    "Black Legion",
                    "Blaupunkt",
                    "Blauwerk",
                    "BMC",
                    "BMX",
                    "Boardman Bikes",
                    "Bobby",
                    "BOCA",
                    "Bocas",
                    "Bohemian Bicycles",
                    "Bontrager",
                    "Bootie",
                    "Böttcher",
                    "Bottecchia",
                    "Brandes",
                    "Brasil & Movimento",
                    "BRAXXO",
                    "Brennabor",
                    "Bridgestone",
                    "British Eagle",
                    "Brodie Bicycles",
                    "Brompton",
                    "Brunswick",
                    "BSA",
                    "Bulls",
                    "Bulltec",
                    "Burgwächter",
                    "Burley Design",
                    "B1",
                    "Calfee Design",
                    "Caloi",
                    "Calvin",
                    "Campion Cycle Company",
                    "Camporello",
                    "Campus",
                    "Cannondale",
                    "Canyon",
                    "Carpenter",
                    "Carrera",
                    "Carver",
                    "Catrike",
                    "CBM",
                    "CCM",
                    "Centano",
                    "Center Bike",
                    "Centurion",
                    "Cervelo",
                    "Chakra",
                    "Chariot",
                    "Chaser",
                    "Chater-Lea",
                    "Checker Pig",
                    "Christoph Nies",
                    "CHUMBA",
                    "Cicli B",
                    "Cilo Custom",
                    "Cinelli",
                    "City-Star",
                    "Classic",
                    "Claud Butler",
                    "Coboc",
                    "Cobra",
                    "Coker",
                    "Colnago",
                    "Columbia",
                    "Columbus",
                    "Co-Motion",
                    "Compel",
                    "Comtec",
                    "Cone",
                    "Continental",
                    "Conway",
                    "Corima",
                    "Corratec",
                    "Cortina",
                    "Cresta",
                    "Cross",
                    "CTTWOU",
                    "Cube",
                    "Custom made",
                    "Cycle Concept",
                    "Cycle Force Group",
                    "Cycle King",
                    "Cycleuropa Group",
                    "Cyclewolf",
                    "Cyco",
                    "Cyfac",
                    "Cyrus",
                    "Dahon",
                    "Dawes",
                    "De Rosa",
                    "Defiance Cycle Company",
                    "Demorest",
                    "Den Beste Sykkel as DBS",
                    "Derby Cycle",
                    "Devinci",
                    "Di Blasi Industriale",
                    "Diamant",
                    "Diamondback",
                    "DNA",
                    "Dolan",
                    "Dorel Industries",
                    "Dura Ace",
                    "Durango",
                    "Duratec",
                    "Dürkopp",
                    "Dynacraft",
                    "Dynamics",
                    "Eddy Mercks Cycles",
                    "Edelbike",
                    "Electra Bicycle Company",
                    "Ellis Briggs",
                    "Ellsworth",
                    "Emilio Bozzi",
                    "Enigma Titanium",
                    "Enik",
                    "Epple",
                    "Etrrow",
                    "Excelsior",
                    "Fact",
                    "Faggin",
                    "Fahrradmanufaktur",
                    "Falcon",
                    "Falk",
                    "Falter",
                    "Felt",
                    "Fischer",
                    "Fishbone",
                    "Fisher",
                    "Flux",
                    "Flyer",
                    "Flying Pigeon",
                    "Flying Scot",
                    "Flyke",
                    "Focus",
                    "Fondriest",
                    "Forelle",
                    "Framework",
                    "Freddie Grubb",
                    "Fuji",
                    "Fujitsu",
                    "Fun Bikes",
                    "Fun Works Slalom",
                    "Gambler",
                    "Gary Fisher",
                    "Gazelle",
                    "Gendron",
                    "Genesis",
                    "Gepida",
                    "German Cycles",
                    "Ghost",
                    "Giant",
                    "Gitane",
                    "Gocycle",
                    "Godewind",
                    "Görike",
                    "Gräber Räder",
                    "Gran Ville",
                    "Greif",
                    "GT",
                    "Gudereit",
                    "Guerciotti",
                    "Gunnar",
                    "Hai Bike",
                    "Haier",
                    "Hardo Wagner",
                    "Harley-Davidson",
                    "Haro",
                    "Hartje",
                    "Hase",
                    "Hawk",
                    "Head",
                    "Heavy Tools",
                    "Helkama",
                    "Hercules",
                    "Herkelmann",
                    "Hero",
                    "Hetchins",
                    "Hoffman",
                    "Holdsworth",
                    "Hot-Chili",
                    "Huffy",
                    "Husqvarna",
                    "Ibis",
                    "Ideal",
                    "Independent Fabrication",
                    "Indian",
                    "Interbike",
                    "Iride",
                    "Iron Horse",
                    "Islabikes",
                    "I:SY",
                    "Jamaha",
                    "Jamis",
                    "Jamis",
                    "Jan Janssen",
                    "Jan Ullrich",
                    "JBS-München",
                    "Jumpertreck",
                    "Kalkhoff",
                    "Kangaroo",
                    "Karbon Kinetics Limited",
                    "Katarga",
                    "Kellys",
                    "Kenhill",
                    "Kennbro",
                    "Kent",
                    "Kestrel USA",
                    "Kettler",
                    "Keutex",
                    "KHS",
                    "Kia",
                    "Kieler Fahrradmanufaktur",
                    "Kildemoos",
                    "Kinesis",
                    "Klein",
                    "Koga",
                    "Kogamiyata",
                    "Kogswell",
                    "Kona",
                    "Kramer",
                    "Krave",
                    "Kreidler",
                    "Kronan",
                    "Kross",
                    "Kryptonite",
                    "KTM",
                    "Künsting",
                    "Kuota",
                    "Kuwahara",
                    "Kynast",
                    "K2",
                    "Lakes",
                    "Landers",
                    "Lapierre",
                    "Laurent & Klement",
                    "LeMond",
                    "Lindlau",
                    "Litespeed",
                    "Longus",
                    "Look",
                    "Luma",
                    "Magna",
                    "Malvern Star",
                    "Manufaktur",
                    "Marin",
                    "Masi",
                    "Matra",
                    "Maxcycles",
                    "Melon",
                    "Mercedes",
                    "Mercian",
                    "Mercury",
                    "Merida",
                    "Merlin",
                    "MGI",
                    "Miele",
                    "Mifa",
                    "Mila",
                    "Miller",
                    "Milwaukee",
                    "Mind Movie",
                    "Mirage",
                    "Miyata",
                    "Moewe",
                    "Monark",
                    "Mondia",
                    "Mongoose",
                    "Montague",
                    "Monz Anhänger",
                    "Moots",
                    "Morrisson",
                    "Moser",
                    "Motobecane",
                    "Moulton",
                    "Mountain Equipment",
                    "Muddy Fox",
                    "Muesing",
                    "Murray",
                    "Müsing",
                    "Mustang",
                    "Nagasawa",
                    "National",
                    "Neil Pryde",
                    "Neobike",
                    "NEXT",
                    "Nicolai",
                    "Nishiki",
                    "Nöll",
                    "Norco",
                    "Nordrad",
                    "Norwied",
                    "Novara",
                    "NSU",
                    "Nymanbolagen",
                    "Olmo",
                    "Orange",
                    "Orbea",
                    "Orbita",
                    "Orient",
                    "Outburst",
                    "Pacific",
                    "Panasonic",
                    "Panther",
                    "Pashley",
                    "Passat",
                    "Patria",
                    "Pedersen",
                    "Pegasus",
                    "Peugeot",
                    "Phil Rogers",
                    "Philko",
                    "Phillips Cycles",
                    "Phoenix",
                    "Piaggio",
                    "Pinarello",
                    "Planet X",
                    "Pocket",
                    "Pogliaghi",
                    "Prince",
                    "Pro Connect",
                    "Pro Max",
                    "Procycle Group",
                    "Prophete",
                    "Puch",
                    "Puky",
                    "Quality",
                    "Quintana Roo",
                    "Rabasa",
                    "Rabeneick",
                    "Radhaus",
                    "Radio Flyer",
                    "Radon",
                    "Raleigh",
                    "Rans Designs",
                    "Raymon",
                    "Razor",
                    "R+E",
                    "Recker",
                    "Red Bull",
                    "Redline",
                    "Reflex",
                    "Reiker",
                    "Rene Herse",
                    "Renegade",
                    "Rhoades",
                    "Ridgeback",
                    "Ridley",
                    "Riese und Müller",
                    "RIH",
                    "Rival",
                    "Rivendell Bicycle Works",
                    "Rixe",
                    "Roadmaster",
                    "Roberts",
                    "Robin Hood",
                    "Rocky Mountain",
                    "Roland",
                    "Romet",
                    "Rose",
                    "Ross",
                    "Rotwild",
                    "Rover Company",
                    "Rowbike",
                    "Rückenwind",
                    "Ruddy Dax",
                    "Rudge-Whitworth",
                    "Runde Racing",
                    "Sabotage",
                    "Sachs",
                    "Samchuly",
                    "Santa Cruz",
                    "Santana",
                    "Saracen",
                    "Schauff",
                    "Schindelhauer",
                    "Schwinn",
                    "S'Cool",
                    "Scott",
                    "Serotta",
                    "Seven",
                    "Shimano",
                    "Siga",
                    "Siga-Eagle",
                    "Simplex",
                    "Simplon",
                    "Simson",
                    "Sinclair Research",
                    "Sintesi",
                    "Sohrab",
                    "Sole",
                    "Solifer",
                    "SOMA Fabrications",
                    "Somec",
                    "Sonstige",
                    "Sparta",
                    "Specialized",
                    "Staiger",
                    "Star",
                    "Stelber",
                    "Stella",
                    "Steppenwolf",
                    "Sterling",
                    "Sterntor",
                    "Stevens",
                    "Storck",
                    "Stratos",
                    "Strida",
                    "Stromer",
                    "Subrosa",
                    "Sundance",
                    "Sunn",
                    "Surley",
                    "Suzuki",
                    "Swift Folder",
                    "Switchback",
                    "Tallard",
                    "Tecca Fox",
                    "Tecnobike",
                    "Terafox",
                    "Tern",
                    "Theo Intra",
                    "Thorn",
                    "Tigra",
                    "Time",
                    "Tomac",
                    "Torker",
                    "Tornado",
                    "Transition",
                    "Trek",
                    "Trelock",
                    "TRENGA",
                    "Triumph",
                    "Tube Investments",
                    "Tunturi",
                    "Turner Suspension",
                    "Turnir",
                    "UMF",
                    "Union",
                    "Univega",
                    "UTOPIA",
                    "Valdora",
                    "Van Dessel Sports",
                    "Velo de Ville",
                    "Velo Vie",
                    "Veloboe",
                    "Velomotors",
                    "Velosolex",
                    "Verschiedene",
                    "Veto",
                    "Via Carisma",
                    "Victoria",
                    "Viking",
                    "Villiger",
                    "Villy Customs",
                    "Vindec",
                    "Vitus",
                    "Volagi",
                    "Vortrieb",
                    "Voss Edition",
                    "Votec",
                    "Votone",
                    "VSF",
                    "Wanderer",
                    "Waterford",
                    "Weileder",
                    "Werner Otto",
                    "Wethepeople",
                    "Wheeler",
                    "Wheller",
                    "Whippet",
                    "Wilderness",
                    "Wilier",
                    "Winora",
                    "Witcomb",
                    "Worksman",
                    "Xootr",
                    "Yamaguchi",
                    "Yamaha",
                    "Yazoo",
                    "Yeti",
                    "Zigo",
                    "Zilles Greens",
                    "ZT Bikes",
                    "Zwei plus Zwei",
                    "2-Danger",
                    "2R Manufaktur"
                ]

            },
            "LANGUAGE": "DE",
            "MAXAMOUNT": "538",
            "AMOUNT": {},
            "STATUS": "OK",
            "REQUEST_ID": "129030407",
            "ORDERBY": {},
            "SORT": {},
            "STATUSCODE": "0",
            "PAGE": {}
        }
    },
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
                    },
                    {
                        "BASIC_RISK": "LEIHRADSCHUTZ",
                        "RISKS": {
                            "RISK": {
                                "RISK_NAME": "",
                                "RISK_TYPE": ""
                            }
                        },
                        "APPLICATION_CODE": "GU WG DE RAD KS LEIH 0819",
                        "SIGNATURES": "1",
                        "PURCHASE_PRICE_LIMITATIONS": {
                            "MAX_PRICE": {
                                "AMOUNT": "6000",
                                "OBJECT_CODE": {}
                            }
                        },
                        "PRODUCT_TYPE": "LEIHRADSCHUTZ_2019",
                        "TERM": "langfristig",
                        "PRODUCT_NAME": "Leihradschutz",
                        "COLLECTIONTYPES": {
                            "Einzug": "true",
                            "Selbstzahler": "true"
                        },
                        "MAX_DEVICES_EACH_CONTRACT": "1",
                        "PAYMENTINTERVALS": {
                            "INTERVAL": {
                                "VALUE": "1",
                                "DESCRIPTION": "monatlich"
                            }
                        },
                        "SIGANATURES": "1"
                    }
                ]
            }
        },
        "LANGUAGE": "DE",
        "MAXAMOUNT": "7",
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
                    },
                    {
                        "DOCUMENT_TYPE": "GUFHP",
                        "FILENAME": "Garantieurkunde.pdf",
                        "CONTENT": GUFHP
                    },
                    {
                        "DOCUMENT_TYPE": "GUFHP_IBAN",
                        "FILENAME": "Garantieurkunde_IBAN.pdf",
                        "CONTENT": GUFHP_IBAN
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

// {
//     "BASIC_RISK": "LEIHRADSCHUTZ_AT",
//     "RISKS": {
//         "RISK": {
//             "RISK_NAME": "",
//             "RISK_TYPE": ""
//         }
//     },
//     "APPLICATION_CODE": "GU WG AT RAD KS LEIH 0519",
//     "SIGNATURES": "1",
//     "PURCHASE_PRICE_LIMITATIONS": {
//         "MAX_PRICE": {
//             "AMOUNT": "6000",
//             "OBJECT_CODE": {}
//         }
//     },
//     "PRODUCT_TYPE": "LEIHRADSCHUTZ_2019_AT",
//     "TERM": "langfristig",
//     "PRODUCT_NAME": "Leihradschutz",
//     "COLLECTIONTYPES": {
//         "Einzug": "true",
//         "Selbstzahler": "true"
//     },
//     "MAX_DEVICES_EACH_CONTRACT": "1",
//     "PAYMENTINTERVALS": {
//         "INTERVAL": {
//             "VALUE": "1",
//             "DESCRIPTION": "monatlich"
//         }
//     },
//     "SIGANATURES": "1"
// }
