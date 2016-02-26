'use strict';

// user-model.js - A sequelize model
//
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function(sequelize) {
  const user = sequelize.define('user', {
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      primaryKey: true,
      set: function(val) {
        this.setDataValue('username', val.toLowerCase().trim());
      }
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      set: function(val) {
        this.setDataValue('email', val.toLowerCase().trim());
      }
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    timestamps: true,
    freezeTableName: true
  });

  // user.sync({
  //   force: true
  // })

  return user;
};
