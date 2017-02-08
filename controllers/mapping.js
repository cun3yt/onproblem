var path = require('path');
var dir_path = path.join(__dirname, 'list/');

var debug = require('debug')('onproblem:server');
debug(path.join(dir_path, 'something'));

module.exports = function(app, passport, debug) {
  require(path.join(dir_path, 'index'))('/', app);
  require(path.join(dir_path, 'signup'))('/signup', app, passport, debug);
  require(path.join(dir_path, 'users'))('/users', app);
  require(path.join(dir_path, 'login'))('/login', app, passport);
};
