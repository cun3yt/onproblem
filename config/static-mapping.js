module.exports = function(app, debug) {
  var express = require('express');
  var path = require('path');

  var applicationRoot = path.join(__dirname, '..');

  app.use(express.static(
    path.join(applicationRoot, 'public')
  ));

  app.use('/semantic', express.static(
    path.join(applicationRoot, 'semantic/dist/')
  ));
};
