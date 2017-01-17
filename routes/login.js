var models = require('../models');
var express = require('express');
var router = express.Router();
var passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy;

router.get('/', function(req, res, next) {
  res.render('join/login.ejs');
});

router.post('/', passport.authenticate('local',
  { successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true })
);

module.exports = router;
