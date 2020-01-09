const uuid = require('uuid');
const axios = require('axios');

const publicClientId = "b7c15227-1595-43cd-a53c-d9fb98ec3b3a";
const COMPONENT_SELECTION_POP_UP = process.env.COMPONENT_SELECTION_POP_UP;
const COMPONENT_CONFIRMATION = process.env.COMPONENT_CONFIRMATION;
const COMPONENT_RATING = process.env.COMPONENT_RATING;
const BIFROST_URI = process.env.BIFROST_URI;

const customerData = {
    company: 'INNOQ',
    salutation: 'Herr',
    firstname: 'Max',
    lastname: 'Mustermann',
    street: 'Unter den Linden',
    zip: '52345',
    city: 'Köln',
    country: 'Deutschland',
    email: 'max.mustermann1234@test.com'
};

exports.showShopIndex = function showShopIndex(req, res) {
    res.render("dummyProduct");
};

exports.showShoppingCart = function showShoppingCart(req, res) {
    const shoppingCartData = req.cookies.dummyshop;
    console.log(shoppingCartData);
    res.render("shoppingCart", {
        cart: shoppingCartData,
        publicClientId: publicClientId,
        bifrostUri: BIFROST_URI,
        confirmationComponentUri: COMPONENT_CONFIRMATION
    });
};

exports.showShoppingCartCookie = function showShoppingCartCookie(req, res) {
    res.send(req.cookies['dummyshop']);
};

exports.addProductToShoppingCart = function addProductToShoppingCart(req, res) {
    var dummyshopCookie = req.cookies['dummyshop'] ? req.cookies['dummyshop'] : {products: []};
    dummyshopCookie.products.push(
        {
            productName: req.body.productName,
            productPrice: req.body.productPrice,
            productId: req.body.productId
        });
    res.cookie('dummyshop', dummyshopCookie);
    res.redirect('/demoShop/newShoppingCartItem/' + req.body.productId);
};

exports.checkout = function checkout(req, res) {
    const wertgarantieCookieData = req.body['wertgarantie-cookie-data'];
    var dummyshopCookie = req.cookies.dummyshop;
    const purchasedShopProducts = [];
    dummyshopCookie.products.forEach(product => {
        purchasedShopProducts.push({
            price: product.productPrice * 100,
            manufacturer: "XXXBike Inc.",
            deviceClass: "6bdd2d93-45d0-49e1-8a0c-98eb80342222",
            model: product.productName,
            productId: product.productId
        });
    });

    const wertgarantieCheckoutData = {
        purchasedProducts: purchasedShopProducts,
        customer: customerData,
        secretClientId: "shopSecretClientId",
        wertgarantieShoppingCart: wertgarantieCookieData
    };

    // 1: checkout in shop
    const newOrderId = uuid();
    res.clearCookie('dummyshop');

    // 2: call bifrost for wertgarantie checkout
    axios({
        method: 'post',
        url: BIFROST_URI + '/shoppingCarts/current/checkout',
        data: wertgarantieCheckoutData
    })
        .then(response => console.log("Bifrost response:" + JSON.stringify(response.data)))
        .catch(error => {
            console.error(JSON.stringify(error.response.data));
        });

    res.render('purchaseComplete', {
        orderedProducts: dummyshopCookie.products,
        orderId: newOrderId
    })
};

exports.newShoppingCartItem = function newShoppingCartItem(req, res) {
    const productId = req.params.productId;
    res.cookie('insurable', true);
    res.render('newShoppingCartItem', {
        deviceClass: "6bdd2d93-45d0-49e1-8a0c-98eb80342222",
        devicePrice: 1399.99,
        productName: "E-Mtb-3000",
        productId: productId,
        publicClientId: publicClientId,
        bifrostUri: BIFROST_URI,
        popupComponentUri: COMPONENT_SELECTION_POP_UP,
        ratingComponentUri: COMPONENT_RATING
    })
};