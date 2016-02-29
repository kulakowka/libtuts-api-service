'use strict'

// const globalHooks = require('../../../hooks')
const addVirtual = require('feathers-virtual-attribute-hook')

// Hook for add virtual attributes to service response
const serializer = addVirtual({
  webUrl: (platform) => `/${platform.name}`
})

exports.before = {
  all: [],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
}

exports.after = {
  all: [serializer],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
}
