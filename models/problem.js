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
    tableName: 'problems'
  });

  return Problem;
};
