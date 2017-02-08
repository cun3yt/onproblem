module.exports = function(controllerRouteURI, app) {
  var subRouter = require('express').Router();
  var Problem = require('../../models').Problem;

  subRouter.get('/', function(req, res) {
    Problem.findAll().then(function(problems){
      res.render('index', {
        title: 'OnProblem',
        problems: problems
      });
    });
  });

  app.use(controllerRouteURI, subRouter);
};
