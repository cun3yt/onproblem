var models = require('../models');
var express = require('express');
var router = express.Router();
var passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy;

router.get('/', function(req, res, next) {
  res.render('join/signup.ejs');
});

router.post('/', function(req, res, next) {
  var debug = require('debug')('onproblem:server');
  debug(req.body.username, req.body.password);

  models.User.create({
    'email': req.body.username,
    'password': req.body.password,
    'password_confirmation': req.body.password_confirmation
  }).then(function() {
    res.send('successful!');
  });
});

module.exports = router;
