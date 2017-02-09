module.exports = function(app) {
  var logger = require('morgan');
  var bodyParser = require('body-parser');
  var cookieParser = require('cookie-parser');

  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());

  // based on this Q&A: http://bit.ly/2kXgNGj
  if(process.env["DEBUG_FD"]) {
    delete process.env["DEBUG_FD"];
  }
};
