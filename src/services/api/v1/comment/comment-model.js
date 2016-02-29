'use strict'

const Sequelize = require('sequelize')

module.exports = function (sequelize) {
  const comment = sequelize.define('comment', {
    content: {
      required: true,
      type: Sequelize.TEXT,
      allowNull: false
    },
    contentHtml: {
      required: true,
      type: Sequelize.TEXT,
      allowNull: false
    },
    creator: {
      required: true,
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    timestamps: true,
    paranoid: true,
    freezeTableName: true
  })

  // comment.sync({
  //   force: true
  // })

  comment.belongsTo(sequelize.models.tutorial)

  return comment
}
