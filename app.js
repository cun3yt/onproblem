var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var flash = require('connect-flash');

var app = express();

// view engine setup
var engine = require('ejs-mate');
app.engine('ejs', engine);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(flash());

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));

// Static Settings
require('./config/static-mapping')(app);

app.use(session({
  secret: 'something unImporTan! bUt 1t can be, though?!',
  resave: true, saveUninitialized: true
}));

// Authentication Setup
var passport = require('passport');
require('./config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());

// Routes Configuration
require('./controllers/mapping')(app, passport);

// Error Middleware(s)
require('./config/error-middleware')(app);

module.exports = app;
