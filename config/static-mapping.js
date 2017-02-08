module.exports = function(app) {
  var express = require('express');
  var path = require('path');

  var applicationRoot = path.join(__dirname, '..');

  app.use(require('less-middleware')(path.join(applicationRoot, 'public')));

  app.use(express.static(
    path.join(applicationRoot, 'public')
  ));

  app.use('/semantic', express.static(
    path.join(applicationRoot, 'semantic/dist/')
  ));

  // uncomment after placing your favicon in /public
  // var favicon = require('serve-favicon');
  // app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
};
