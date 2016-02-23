'use strict';

// project-model.js - A sequelize model
//
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function(sequelize) {
  const project = sequelize.define('project', {
    slug: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      primaryKey: true,
      set: function(val) {
        this.setDataValue('slug', val.toLowerCase().trim());
      }
    },
    platform: {
      type: Sequelize.STRING,
      allowNull: false,
      set: function(val) {
        this.setDataValue('platform', val.toLowerCase().trim());
      }
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      set: function(val) {
        this.setDataValue('name', val.toLowerCase().trim());
      }
    },
    language: {
      type: Sequelize.STRING,
      allowNull: false,
      set: function(val) {
        this.setDataValue('language', val.toLowerCase().trim());
      }
    },
    homepageUrl: {
      type: Sequelize.STRING,
      validate: {
        isUrl: true
      }
    },
    repositoryUrl: {
      type: Sequelize.STRING,
      validate: {
        isUrl: true
      }
    },
    packageManagerUrl: {
      type: Sequelize.STRING,
      validate: {
        isUrl: true
      }
    },
    description: {
      type: Sequelize.TEXT
    },
    keywords: {
      type: Sequelize.ARRAY(Sequelize.TEXT)
    },
    stars: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    rank: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    isLoaded: {
      type: Sequelize.BOOLEAN,
      default: false
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

  project.sync({
    // force: true
  });

  return project;
};
