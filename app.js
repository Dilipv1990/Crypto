var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
// var logger = require('morgan');
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var session = require('express-session')
var stocksModel = require('./models/stocksModel')
var api = require('./routes/api')
var mongoose = require('mongoose')
var index = require('./routes/index')
var process = require('process')
var MongoStore = require('connect-mongo')(session)
var logger = require('./logger')



mongoose.connect('mongodb://database/cryptodb');

var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/auth', authenticate);
app.use('/api', api);
app.use('/', index);
// app.use('/reporting', reporting);
// app.use('/reports', reports);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
