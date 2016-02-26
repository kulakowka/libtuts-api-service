'use strict'

const service = require('feathers-sequelize')
const tutorial = require('./tutorial-model')
const hooks = require('./hooks')

module.exports = function () {
  const app = this

  const options = {
    Model: tutorial(app.get('sequelize')),
    paginate: {
      default: 5,
      max: 25
    }
  }

  // Initialize our service with any options it requires
  app.use('/api/v1/tutorials', service(options))

  // Get our initialize service to that we can bind hooks
  const tutorialService = app.service('/api/v1/tutorials')

  // Set up our before hooks
  tutorialService.before(hooks.before)

  // Set up our after hooks
  tutorialService.after(hooks.after)

  // Clear db and populate
  options.Model.sync({
    force: true
  }).then(() => {
    // Create a dummy Users
    tutorialService.create({
      title: 'First test tutorial',
      sourceUrl: 'https://blog.feathersjs.com/using-feathersjs-as-an-open-source-alternative-to-firebase-b5d93c200cee#.hwh78seor',
      content: '# header \ntext text',
      keywords: ['nodejs', 'javascript'],
      languages: ['javascript', 'ruby', 'php'],
      platforms: ['npm', 'go', 'rubygems'],
      projects: ['npm/mocha', 'npm/react'],
      creator: 'kulakowka'
    }).then(function (doc) {
      console.log('Created tutorial', doc.toJSON())
    })
  })
}
