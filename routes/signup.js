var models = require('../models');
var express = require('express');
var router = express.Router();
var passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy;

var signup_form = function() {
  var forms = require('forms');
  var fields = forms.fields,
    validators = forms.validators;

  var form = forms.create({
    email: fields.email({ required: true }),
    password: fields.password({ required: validators.required('Password is required')}),
    confirm: fields.password({
      required: validators.required('Needed'),
      validators: [validators.matchField('password')]
    })
  });

  return form;
};

router.get('/', function(req, res, next) {
  var form = signup_form();
  res.render('join/signup.ejs', {
    form: form
  });
});

router.post('/', function(req, res, next) {
  var user_creation_fn = function(email, passwd, passwd_conf, successFn) {
    models.User.create({
      'email': email,
      'password': passwd,
      'password_confirmation': passwd_conf
    }).then(successFn);
  };

  var s_form = signup_form();
  s_form.handle(req, {
    success: function(form) {
      user_creation_fn(req.body.email, req.body.password, req.body.confirm, function(){
        res.send('successful!');
      });
    },
    error: function(form) {
      res.send('Error: something went wrong!');
    },
    empty: function(form) {
      res.send('Empty: something went wrong!');
    }
  });
});

module.exports = router;
