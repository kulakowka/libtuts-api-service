'use strict'

const service = require('feathers-sequelize')
const platform = require('./platform-model')
const hooks = require('./hooks')

module.exports = function () {
  const app = this

  const options = {
    Model: platform(app.get('sequelize')),
    id: 'name',
    paginate: {
      default: 5,
      max: 25
    }
  }

  // Initialize our service with any options it requires
  app.use('/api/v1/platforms', service(options))

  // Get our initialize service to that we can bind hooks
  const platformService = app.service('/api/v1/platforms')

  // Set up our before hooks
  platformService.before(hooks.before)

  // Set up our after hooks
  platformService.after(hooks.after)

}
