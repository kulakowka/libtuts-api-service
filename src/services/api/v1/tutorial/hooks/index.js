'use strict'

// const globalHooks = require('../../../hooks')
// const auth = require('feathers-authentication').hooks
const sanitize = require('./sanitize')
const addVirtual = require('feathers-virtual-attribute-hook')

// Hook for add virtual attributes to service response
const serializer = addVirtual({
  webUrl: (tutorial) => `/tutorial/${tutorial.id}`
})

exports.before = {
  all: [],
  find: [],
  get: [],
  create: [
    sanitize.remove,
    sanitize.transform
  ],
  update: [
    sanitize.remove,
    sanitize.transform
  ],
  patch: [
    sanitize.remove,
    sanitize.transform
  ],
  remove: []
}

exports.after = {
  all: [serializer],
  find: [],
  get: [
    // function (hook) {
    //   // The user id
    //   const creator = hook.result.creator

    //   // if (hook.params.query.related) {
    //   return hook.app.service('api/v1/users').get(creator).then((user) => {
    //     let result = hook.result.toJSON()
    //     result.creator = user
    //     // Set the todos on the user property
    //     hook.result = result
    //     // Always return the hook object or `undefined`
    //     return hook
    //   })
    //   // }
    // }
  ],
  create: [],
  update: [],
  patch: [],
  remove: []
}

