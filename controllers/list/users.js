module.exports = function(controllerRouteURI, app) {
  var subRouter = require('express').Router();

  subRouter.get('/', function (req, res) {

    var message = 'welcome to the session demo. refresh now';

    var sess = req.session;
    if (sess.views === undefined) {
      sess.views = 1;
    } else {
      sess.views++;
      message = 'sess.view: ' + sess.views;
    }

    message += ' ' + ((req.user !== undefined) ? req.user.email : " (no user) ");
    res.send(message);
  });

  app.use(controllerRouteURI, subRouter);
};
