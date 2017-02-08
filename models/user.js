'use strict';
var bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
          notEmpty: true,
          len: [1,255]
        }
      },
      password_digest: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true
        }
      },
      password:{
        type: DataTypes.VIRTUAL,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      password_confirmation: {
        type:DataTypes.VIRTUAL
      }
    },
    {
      freezeTableName: true,
      tableName: 'users',
      indexes: [{
        unique: true, fields:['email']
      }],
      instanceMethods: {
        authenticate: function(value) {
          if(bcrypt.compareSync(value, this.password_digest)) {
            return this;
          } else {
            return false;
          }
        }
      }
    });

  var hasSecurePassword = function(user, options, callback) {
    if (user.password != user.password_confirmation) {
      throw new Error("Password confirmation doesn't match Password");
    }
    bcrypt.hash(user.get('password'), 10, function(err, hash) {
      if (err) return callback(err);
      user.set('password_digest', hash);
      return callback(null, options);
    });
  };

  User.beforeCreate(function(user, options, callback) {
    user.email = user.email.toLowerCase();
    if (user.password) {
      hasSecurePassword(user, options, callback);
    } else {
      return callback(null, options);
    }
  });

  User.beforeUpdate(function(user, options, callback) {
    user.email = user.email.toLowerCase();
    if (user.password) {
      hasSecurePassword(user, options, callback);
    } else {
      return callback(null, options);
    }
  });

  return User;
};
