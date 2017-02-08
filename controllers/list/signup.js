var user_middleware = require('../../helpers/user_middleware')();

module.exports = function(controllerRouteURI, app, passport, debug) {
  var subRouter = require('express').Router();

  subRouter.get('/', user_middleware.isLoggedOut, function(req, res) {
    var form = signup_form();

    var msg = req.flash('signupMessage');
    debug("===> ", msg);

    res.render('join/signup.ejs', {
      form: form,
      message: req.flash('signupMessage')
    });
  });

  subRouter.post('/', user_middleware.isLoggedOut, passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/signup',
    failureFlash: true
  }));

  app.use(controllerRouteURI, subRouter);

// subRouter.post('/', function(req, res, next) {
//   var user_creation_fn = function(email, passwd, passwd_conf, successFn) {
//     var User = require('../../models').User;
//     User.create({
//       'email': email,
//       'password': passwd,
//       'password_confirmation': passwd_conf
//     }).then(successFn);
//   };
//
//   var s_form = signup_form();
//   s_form.handle(req, {
//     success: function(form) {
//       user_creation_fn(req.body.email, req.body.password, req.body.confirm, function(){
//         res.redirect();
//       });
//     },
//     error: function(form) {
//       res.render('join/signup.ejs', {
//         form: form
//       });
//     },
//     empty: function(form) {
//       res.send('Empty: something went wrong!');
//     }
//   });
// });

};

var signup_form = function() {
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

    // ,
    // confirm: fields.password({
    //   label: "Password (Again)",
    //   required: validators.required('Needed'),
    //   validators: [validators.matchField('password')]
    // })
  });
};
