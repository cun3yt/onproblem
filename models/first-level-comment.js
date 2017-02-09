'use strict';

module.exports = function(sequelize, DataTypes) {
  var FirstLevelComment = sequelize.define("FirstLevelComment", {
      comment: DataTypes.TEXT,
      uuid: DataTypes.UUID
    },
    {
      underscored: true,
      classMethods: {
        associate: function(models) {
          FirstLevelComment.belongsTo(models.Problem, { as: 'problem' });
        }
      },
      instanceMethods: {
        create_link: function() {
          var path = require('path');
          var commentUUID = this.uuid;

          return this.getProblem().then(function(problem){
            var problem_link = problem.create_link();
            return path.join(problem_link, '#comment-', commentUUID);
          });
        }
      },
      tableName: 'first_level_comments'
    });

  return FirstLevelComment;
};
