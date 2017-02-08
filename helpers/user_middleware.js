module.exports = function(visitorStateRedirectURL, userStateRedirectURL) {
  var visitorStateRedirectURL = visitorStateRedirectURL || "/";
  var userStateRedirectURL = userStateRedirectURL || "/users";

  // route middleware to make sure a user is logged in
  var isLoggedIn = function(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
      return next();

    // if they aren't redirect them to the home page
    res.redirect(visitorStateRedirectURL);
  };

  // route middleware to make sure the visitor is logged out
  var isLoggedOut = function(req, res, next) {
    if(!req.isAuthenticated()) {
      return next();
    }

    res.redirect(userStateRedirectURL);
  };

  return {
    isLoggedIn: isLoggedIn,
    isLoggedOut: isLoggedOut
  };
};
