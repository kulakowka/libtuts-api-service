'use strict'

const core = require('../../../../../hooks')
const auth = require('feathers-authentication').hooks
const hooks = require('feathers-hooks')
const addVirtual = require('feathers-virtual-attribute-hook')

// Hook for add virtual attributes to service response
const serializer = addVirtual({
  webUrl: (user) => `/user/${user.username}`
})

exports.before = {
  all: [],
  find: [],
  get: [core.lowerCaseId()],
  create: [hooks.lowerCase('email', 'username'), auth.hashPassword()],
  update: [hooks.disable('external')],
  patch: [hooks.disable('external')],
  remove: [hooks.disable('external')]
}

exports.after = {
  all: [serializer],
  find: [
    hooks.remove('password')
  ],
  get: [
    hooks.remove('password')
  ],
  create: [],
  update: [],
  patch: [],
  remove: []
}
