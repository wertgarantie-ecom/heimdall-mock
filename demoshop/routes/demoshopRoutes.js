var express = require('express');
var router = express.Router();
var demoShopController = require('../controllers/demoShopController.js');


router.get("/", demoShopController.showShopIndex);
router.get("/shoppingCart", demoShopController.showShoppingCart);
router.get("/shoppingCartCookie", demoShopController.showShoppingCartCookie);
router.post("/addToShoppingCart", demoShopController.addProductToShoppingCart);
router.get("/newShoppingCartItem", demoShopController.newShoppingCartItem);
router.post("/checkout", demoShopController.checkout);
// router.get("/shoppingCart", shoppingCartController.showShoppingCart);
// router.get("/shoppingCart/:clientId", shoppingCartController.getShoppingCartForClientId);

module.exports = router;