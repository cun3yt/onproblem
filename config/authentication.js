module.exports = function(app) {

  // Session Setup
  var session = require('express-session');

  app.use(session({
    secret: 'something unImporTan! bUt 1t can be, though?!',
    resave: true, saveUninitialized: true
  }));

  // Authentication Setup
  var passport = require('passport');

  require('./passport')(passport);
  app.use(passport.initialize());
  app.use(passport.session());

  // User Middleware
  app.use(function(req, res, next){
    res.locals.user = req.user;
    next();
  });

  return passport;
};
