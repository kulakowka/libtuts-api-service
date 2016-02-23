'use strict';

// platform-model.js - A sequelize model
//
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function(sequelize) {
  const platform = sequelize.define('platform', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      primaryKey: true,
      set: function(val) {
        this.setDataValue('name', val.toLowerCase().trim());
      }
    },
    tutorialsCount: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    projectsCount: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    }
  }, {
    freezeTableName: true
  });

  platform.sync({
    // force: true
  });

  return platform;
};
