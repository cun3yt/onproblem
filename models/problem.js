var ORM = require('sequelize');
var Config = require('../config');

var sequelize = new ORM();

var Problem = sequelize.define('problem',
    {
        slug: {
            type: ORM.STRING,
            field: 'slug'
        },
        title: {
            type: ORM.STRING,
            field: 'title'
        }
    },
    Config.orm
);

module.exports = Problem;
