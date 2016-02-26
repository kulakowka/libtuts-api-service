'use strict'

// comment-model.js - A sequelize model
//
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize')

module.exports = function (sequelize) {
  const comment = sequelize.define('comment', {
    text: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    timestamps: true,
    freezeTableName: true
  })

  return comment
}
