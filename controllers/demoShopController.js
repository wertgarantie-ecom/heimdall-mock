const uuid = require('uuid');

const publicClientId = "b7c15227-1595-43cd-a53c-d9fb98ec3b3a";

exports.showShopIndex = function showShopIndex(req, res) {
    res.render("dummyProduct");
};

exports.showShoppingCart = function showShoppingCart(req, res) {
    const shoppingCartData = req.cookies.dummyshop;
    console.log(shoppingCartData);
    res.render("shoppingCart", {
        cart: shoppingCartData,
        publicClientId: publicClientId
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
    var dummyshopCookie = req.cookies.dummyshop;
    console.log(dummyshopCookie);
    const newOrderId = uuid();
    res.clearCookie('dummyshop');
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
        publicClientId: publicClientId
    })
};