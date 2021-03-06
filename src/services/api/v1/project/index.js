'use strict'

const service = require('feathers-sequelize')
const project = require('./project-model')
const hooks = require('./hooks')

module.exports = function () {
  const app = this

  const options = {
    Model: project(app.get('sequelize')),
    id: 'slug',
    paginate: {
      default: 5,
      max: 25
    }
  }

  // Initialize our service with any options it requires
  app.use('/api/v1/projects', service(options))

  // Get our initialize service to that we can bind hooks
  const projectService = app.service('/api/v1/projects')

  // Set up our before hooks
  projectService.before(hooks.before)

  // Set up our after hooks
  projectService.after(hooks.after)

  // custom routes
  app.use('/api/v1/projects/:platform/:name', {
    find (params) {
      let slug = params.platform + '/' + params.name
      return projectService.get(slug)
    }
  })


}
