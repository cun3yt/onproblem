'use strict';

module.exports = function(sequelize, DataTypes) {
  var Problem = sequelize.define("Problem", {
    slug: {
      type: DataTypes.STRING,
      field: 'slug'
    },
    title: {
      type: DataTypes.STRING,
      field: 'title'
    },
    description: {
      type: DataTypes.STRING,
      field: 'description'
    }
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'problems',
    classMethods: {
      associate: function(models) {
        Problem.hasMany(models.FirstLevelComment,
          { as: {
              singular: 'comment',
              plural: 'comments'
            }
          }
        );
      }
    },
    instanceMethods: {
      create_link: function() {
        var path = require('path');
        return path.join('/problem', this.slug);
      }
    }
  });

  return Problem;
};
