var user_middleware = require('../../helpers/user_middleware')();
var requireLoggedOut = user_middleware.isLoggedOut;
var requireLogin = user_middleware.isLoggedIn;

module.exports = function(controllerRouteURI, app, passport) {
  var subRouter = require('express').Router();

  subRouter.get('/', user_middleware.isLoggedOut, function (req, res) {
    var form = login_form();

    res.render('join/login.ejs', {
      form: form,
      message: req.flash('loginMessage')
    });
  });

  subRouter.post('/', requireLoggedOut, passport.authenticate('local-login', {
      successRedirect: '/',
      failureRedirect: '/login',
      failureFlash: true
    }));

  subRouter.get('/logout', requireLogin, function (req, res) {
    if (!req.user) {
      res.send('you were not logged in');
      return;
    }

    req.logout();
    res.send('logged out successfully');
  });

  app.use(controllerRouteURI, subRouter);
};

var login_form = function() {
  var forms = require('forms');
  var fields = forms.fields,
    validators = forms.validators;

  return forms.create({
    email: fields.email({
      required: true,
      placeHolder: "E-mail address",
      cssClasses: {}
    }),
    password: fields.password({
      required: validators.required('Password is required')
    })
  });
};
