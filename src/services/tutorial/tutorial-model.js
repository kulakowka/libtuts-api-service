'use strict';

/*
title
slig
sourceUrl
sourceDomain
content
contentHtml
keywords
languages
platforms
projects
commentsCount
*/

const Sequelize = require('sequelize');

module.exports = function(sequelize) {
  const tutorial = sequelize.define('tutorial', {
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    slug: {
      type: Sequelize.STRING
    },
    sourceUrl: {
      type: Sequelize.STRING,
      validate: {
        isUrl: true
      }
    },
    sourceDomain: {
      type: Sequelize.STRING,
      validate: {
        is: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/
      }
    },
    content: {
      type: Sequelize.TEXT
    },
    contentHtml: {
      type: Sequelize.TEXT
    },
    keywords: {
      type: Sequelize.ARRAY(Sequelize.TEXT)
    },
    languages: {
      type: Sequelize.ARRAY(Sequelize.TEXT)
    },
    platforms: {
      type: Sequelize.ARRAY(Sequelize.TEXT)
    },
    projects: {
      type: Sequelize.ARRAY(Sequelize.TEXT)
    },
    commentsCount: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    }
  }, {
    timestamps: true,
    freezeTableName: true
  });

  // tutorial.sync({
  //   force: true
  // });

  return tutorial;
};
