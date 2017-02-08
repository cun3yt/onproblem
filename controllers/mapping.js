var path = require('path');
var dir_path = path.join(__dirname, 'list/');

module.exports = function(app, passport) {
  require(path.join(dir_path, 'index'))('/', app);
  require(path.join(dir_path, 'signup'))('/signup', app, passport);
  require(path.join(dir_path, 'users'))('/users', app);
  require(path.join(dir_path, 'login'))('/login', app, passport);
};
