var express = require('express');
var sass = require('node-sass');
var sassMiddleware = require('node-sass-middleware');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var expressSession = require('express-session');
var flash = require('connect-flash');
var connectMongo = require('connect-mongo');
var MongoStore = connectMongo(expressSession);

var config = require('./config');
var routes = require('./routes/index');
// var users = require('./routes/users');

var passportConfig = require('./auth/passport-config');
// var restrict = require('./auth/restrict');
passportConfig();

mongoose.connect(config.mongoUri);

var app = express();

app.use(sassMiddleware({
  src: __dirname + '/public/sass',
  dest: __dirname + '/public/stylesheets',
  debug: true,
  outputStyle: 'compressed',
  prefix:  '/stylesheets'  // Where prefix is at <link rel="stylesheets" href="prefix/style.css"/>
})),
  
app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(expressSession(
    {
        secret: 'whatever',
        saveUninitialized: false,
        resave: false,
        store: new MongoStore({
           mongooseConnection: mongoose.connection 
        })
    }
));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes);

// angular routing refreshing issue fix after removing # 
app.use(function(req, res) {
    res.sendfile(__dirname + '/views/layout.html');
});

// app.use('/users', users);
//app.use(restrict);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;