var path = require('path');
var dir_path = path.join(__dirname, 'list/');

module.exports = function(app, authenticator) {
  require(path.join(dir_path, 'index'))('/', app);
  require(path.join(dir_path, 'signup'))('/signup', app, authenticator);
  require(path.join(dir_path, 'problem'))('/problem', app);
  require(path.join(dir_path, 'login'))('/login', app, authenticator);
};
