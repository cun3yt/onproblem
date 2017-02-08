module.exports = function(app) {
  app.locals.appGlobals = {
    name: 'On Problem'
  };

  app.locals.meta = {
    keywords: "global problems, crisis, social impact, clean water, energy, " +
              "climate, environment, discussion, solution",
    description: "Discussions and actions on world's biggest problems, " +
                  "e.g. energy crisis, clean water and climate change"
  };
};
