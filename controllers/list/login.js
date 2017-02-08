var user_middleware = require('../../helpers/user_middleware')();

module.exports = function(controllerRouteURI, app, passport) {

  var subRouter = require('express').Router();

  subRouter.get('/', user_middleware.isLoggedOut, function (req, res) {
    res.render('join/login.ejs');
  });

  subRouter.post('/', user_middleware.isLoggedOut, passport.authenticate('local-login', {
      successRedirect: '/',
      failureRedirect: '/login',
      failureFlash: true
    }));

  subRouter.get('/logout', user_middleware.isLoggedIn, function (req, res) {
    if (!req.user) {
      res.send('you were not logged in');
      return;
    }

    req.logout();
    res.send('logged out successfully');
  });

  app.use(controllerRouteURI, subRouter);
};
