'use strict'

// const globalHooks = require('../../../hooks')
// const auth = require('feathers-authentication').hooks
const sanitize = require('./sanitize')
const addVirtual = require('feathers-virtual-attribute-hook')

// Hook for add virtual attributes to service response
const serializer = addVirtual({
  webUrl: (tutorial) => `/tutorial/${tutorial.id}/${tutorial.slug}`
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
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
}

