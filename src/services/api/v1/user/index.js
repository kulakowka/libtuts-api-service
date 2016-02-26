'use strict'

const service = require('feathers-sequelize')
const user = require('./user-model')
const hooks = require('./hooks')

module.exports = function () {
  const app = this

  const options = {
    Model: user(app.get('sequelize')),
    id: 'username',
    paginate: {
      default: 5,
      max: 25
    }
  }

  // Initialize our service with any options it requires
  app.use('/api/v1/users', service(options))

  // Get our initialize service to that we can bind hooks
  const userService = app.service('/api/v1/users')

  // Set up our before hooks
  userService.before(hooks.before)

  // Set up our after hooks
  userService.after(hooks.after)

  // Clear db and populate
  options.Model.sync({
    force: true
  }).then(() => {
    // Create a dummy Users
    userService.create({
      email: 'kulakowka@gmail.com',
      username: 'kulakowka',
      password: 'ak87c210xx'
    }).then(function (user) {
      console.log('Created user', user.toJSON())
    })
  })
}