'use strict';

// language-model.js - A sequelize model
//
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function(sequelize) {
  const language = sequelize.define('language', {
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

  language.sync({
    // force: true
  });

  return language;
};
