'use strict'
const web = require('./web')
const project = require('./project')
const comment = require('./comment')
const language = require('./language')
const platform = require('./platform')
const tutorial = require('./tutorial')
const authentication = require('./authentication')
const user = require('./user')
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
  app.configure(web)
}
