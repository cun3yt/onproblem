var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

  var debug = require('debug')('onproblem:server');
  debug(models);

  models.Problem.findAll().then(function(problems){

    debug('hello');
    debug(models);
    debug(problems);

    res.render('index', {
      title: 'OnProblem',
      problems: problems
    });
  });
});

module.exports = router;
