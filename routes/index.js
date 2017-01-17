var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  models.Problem.findAll().then(function(problems){
    res.render('index', {
      title: 'OnProblem',
      problems: problems
    });
  });
});

module.exports = router;
