'use strict'

const authentication = require('./authentication')

const project = require('./api/v1/project')
const comment = require('./api/v1/comment')
const language = require('./api/v1/language')
const platform = require('./api/v1/platform')
const tutorial = require('./api/v1/tutorial')
const user = require('./api/v1/user')

const Sequelize = require('sequelize')
module.exports = function () {
  const app = this

  const sequelize = new Sequelize(app.get('postgres'), {
    dialect: 'postgres',
    logging: false
  })
  app.set('sequelize', sequelize)

  app.configure(authentication)
  app.configure(user)
  app.configure(tutorial)
  app.configure(platform)
  app.configure(language)
  app.configure(comment)
  app.configure(project)
}
