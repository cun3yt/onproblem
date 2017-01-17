var models = require('../models');
var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/', function(req, res, next) {
  models.Problem.findAll().then(function(problems){
    res.render('index', {
      title: 'OnProblem',
      problems: problems
    });
  });
});

router.post('/', function(req, res, next){
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  });
});

module.exports = router;
