'use strict'

const viewHelpers = require('../../middleware/viewHelpers')
const User = require('../api/v1/user/user-model')
const Sequelize = require('sequelize')

module.exports = function () {
  const app = this

  app.set('view engine', 'jade')
  app.configure(viewHelpers)

  // Initialize our service with any options it requires
  app.get('/', function (req, res) {
    app.service('api/v1/tutorials').find().then((tutorials) => {
      console.log(tutorials)
      res.render('mainpage/index', {tutorials})
    })
  })

  app.get('/:platform/:name', function (req, res) {
    let slug = req.params.platform + '/' + req.params.name
    app.service('api/v1/projects').get(slug).then((project) => res.render('projects/show', {project}))
  })
}
