const express = require('express');
const validate = require('express-jsonschema').validate;
const checkoutSchema = require('./checkoutSchema').checkoutSchema;
const bikeProducts = require('../testdata/bike').bikeProducts;
const smartphoneProducts = require('../testdata/smartphone').smartphoneProducts;
const router = express.Router();

const deviceClassToProduct = {
    "1dfd4549-9bdc-4285-9047-e5088272dade": smartphoneProducts,
    "2dc16d28-c7af-4e19-9494-1659e1c27201": smartphoneProducts,
    "41ade4ba-5f24-4321-b706-fa6d05d75a73": smartphoneProducts,
    "bb3a615d-e92f-4d24-a4cc-22f8a87fc544": smartphoneProducts,
    "ebfb2d44-4ff8-4579-9cc0-0a3ccb8d6f2d": smartphoneProducts,
    "6bdd2d93-45d0-49e1-8a0c-98eb80342222": bikeProducts
};

router.get('/product-offers', function (req, res) {
    if (!(req.query.device_class && req.query.device_purchase_price && req.query.device_purchase_date)) {
        throw new Error("Insufficient query parameters");
    }

    if (!req.accepts("json")) {
        console.log(req.header("Accept"));
        throw new Error("Invalid accept header");
    }
    const products = deviceClassToProduct[req.query.device_class] || {};
    res.send(products);
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
