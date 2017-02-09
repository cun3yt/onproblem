module.exports = function(app) {
  var engine = require('nunjucks'),
    flash = require('connect-flash'),
    path = require('path');

  engine.configure(path.join(__dirname, '..', 'views'), {
    autoescape: true,
    express: app
  });

  app.set('view engine', 'html');
  app.use(flash());
};
