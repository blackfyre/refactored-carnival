let createError = require('http-errors');
let express = require('express');
let path = require('path');
let server = express();
let cookieParser = require('cookie-parser');
let logger = require('morgan');

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'jade');
server.use(logger('dev'));
server.use(express.json());
server.use(express.urlencoded({
    extended: false
}));
server.use(cookieParser());
server.use('/assets', express.static(path.join(__dirname, '/../build')));

/*
 * For production, there should be an authorization middleware to prevent the misuse of the API
 * This should also include CSRF protection as well
 */

server.use('/', require('./routes/index'));
server.use('/api/publishings', require('./routes/publishings'));
server.use('/api/reach', require('./routes/reach'));

// catch 404 and forward to error handler
server.use(function (req, res, next) {
    next(createError(404));
});

server.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = server;
