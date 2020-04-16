var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var multer = require('multer');
var upload = multer();

var policyRouter = require('./controller/heimdallMockController');
const webservicesMockController = require('./controller/webservicesMockController');

var app = express();

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(upload.array());
app.use(express.static('public'));

app.use(cookieParser());

app.use('/healthcheck', require('express-healthcheck')());
app.use('/heroku', require('./controller/herokuController'));

// app.use(bodyParser.json());
app.use('/api/v1', policyRouter);
app.use('/webservices', webservicesMockController);

app.use(function (err, req, res, next) {
    if (err.name === 'JsonSchemaValidation') {
        console.log(err.message);
        res.status(400);

        const responseData = {
            receivedBody: req.body,
            validations: err.validations
        };

        res.json(responseData);
    } else {
        // pass error to next error middleware handler
        next(err);
    }
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error', {title: 'Error'});
});

module.exports = app;
