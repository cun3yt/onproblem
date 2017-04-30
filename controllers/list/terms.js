module.exports = function(controllerRouteURI, app) {
    var subRouter = require('express').Router();

    subRouter.get('/', function(req, res) {
        res.render('static/terms.ejs');

    });

    app.use(controllerRouteURI, subRouter);
};
