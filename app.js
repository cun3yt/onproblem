var express = require('express');
var app = express();

// View Engine Setup
require('./config/view')(app);

// Application Globals, e.g. meta properties
require('./config/globals')(app);

// Parser & Logger Setup
require('./config/request-parser')(app);

// Static Settings
require('./config/static-mapping')(app);

// Session & Authentication Setup
var authenticator = require('./config/authentication')(app);

// Routes Configuration
require('./controllers/mapping')(app, authenticator);

// Error Middleware(s)
require('./config/error-middleware')(app);

module.exports = app;
