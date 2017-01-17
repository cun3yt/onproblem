var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

  var sess = req.session;
  if(sess.views === undefined) {
    sess.views = 1;
    res.send('welcome to the session demo. refresh now');
  } else {
    sess.views++;
    res.send('sess.view: ' + sess.views);
  }
});

module.exports = router;
