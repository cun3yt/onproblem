module.exports = function(app) {
  var engine = require('ejs-mate'),
    flash = require('connect-flash'),
    path = require('path');

  app.engine('ejs', engine);
  app.set('views', path.join(__dirname, '..', 'views'));
  app.set('view engine', 'ejs');
  app.use(flash());
};