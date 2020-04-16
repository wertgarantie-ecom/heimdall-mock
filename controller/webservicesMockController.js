const express = require('express');
const router = express.Router();

router.post('/login.pl', function (req, res) {
    res.status(200).send({
        "STATUS": "OK: Login",
        "SESSION": "DG215870496878Q27G5SN7HX9FB7V49AF65Z27U7RN93M7U59FZ686PZ7NQ6Y19UJ5X67",
        "STATUSCODE": "0"
    });
});

router.post('/callservice.pl', function (req, res) {
    res.send("to be implemented...");
});


module.exports = router;
