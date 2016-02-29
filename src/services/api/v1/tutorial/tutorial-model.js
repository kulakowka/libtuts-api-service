'use strict'

/*
title
slug
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

const Sequelize = require('sequelize')

module.exports = function (sequelize) {
  const tutorial = sequelize.define('tutorial', {
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    sourceUrl: {
      type: Sequelize.STRING(2000),
      validate: {
        isUrl: true
      }
    },
    sourceDomain: {
      type: Sequelize.STRING
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
    creator: {
      type: Sequelize.STRING,
      allowNull: false
    },
    commentsCount: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    }
  }, {
    timestamps: true,
    paranoid: true,
    freezeTableName: true
  })

  // tutorial.sync({
  //   force: true
  // })

  return tutorial
}
