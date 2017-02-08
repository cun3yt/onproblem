module.exports = function(controllerRouteURI, app) {
  var subRouter = require('express').Router();
  var Problem = require('../../models').Problem;


  subRouter.get(/^\/(\w[\w-]+\w)?$/, function(req, res){
    var querySlug = req.params[0];

    Problem.findOne({
      where: {slug: querySlug}
    }).then(function(problem){

      if(!problem) {
        res.redirect('/');
      }

      res.render('problem', {
        problem: problem
        // discussion: discussion
      });

    });
  });

  app.use(controllerRouteURI, subRouter);
};
