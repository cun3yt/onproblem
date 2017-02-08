function loginRequired(req, res, next) {
  if(!req.user) {
    return res.status(401).json({status: 'Please log in'});
    return next();
  }
}
