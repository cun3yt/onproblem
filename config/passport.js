// config/passport.js

var LocalStrategy = require('passport-local').Strategy;
var User = require('../models').User;

module.exports = function(passport) {

  // ==================================
  // Session (de)serializer ===========
  // ==================================
  passport.serializeUser(function(user, done){
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done){
    User.findById(id)
      .then(function(user){
        done(null, user);
      }).catch(function(error){
        done(error, null);
      });
  });

  // ==================================
  // Sign Up ==========================
  // ==================================

  passport.use('local-signup', new LocalStrategy({
      // by default, local strategy uses username and password, we will override with email
      usernameField : 'email',
      passwordField : 'password',
      passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) {
      process.nextTick(function() {

        User.findOne({where: {email: email}}).then(
          function(user){
            if(user) {
              return done(null, false, req.flash('signupMessage', 'The email address is already registered. '));
            } else {

              User.create({
                'email': email,
                'password': password,
                'password_confirmation': password
              }).then(function(newUser){
                done(null, newUser);
              });
            }
          })
      });
    }
  ));

  // ==================================
  // Login ============================
  // ==================================

  passport.use('local-login', new LocalStrategy({
      usernameField : 'email',
      passwordField : 'password',
      passReqToCallback : true
    },
    function(req, emailAddress, password, done) {
      process.nextTick(function() {
        User.findOne({email: emailAddress}).then(
          function (user) {
            if (!user || !user.authenticate(password)) {
              return done(null, false, req.flash('loginMessage', 'Incorrect username or password.'));
            }
            return done(null, user);
          }
        );
      });
    }
  ));
};
