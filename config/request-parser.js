module.exports = function(app) {
  var logger = require('morgan');
  var bodyParser = require('body-parser');
  var cookieParser = require('cookie-parser');
  var timeout = require('connect-timeout');

  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(timeout('3s', {}));
  app.use(haltOnTimeout);

  function haltOnTimeout(req, res, next) {
    if(!req.timedout) { next(); }
  }

  // based on this Q&A: http://bit.ly/2kXgNGj
  if(process.env["DEBUG_FD"]) {
    delete process.env["DEBUG_FD"];
  }
};
