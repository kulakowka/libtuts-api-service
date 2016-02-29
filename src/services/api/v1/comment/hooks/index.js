'use strict'

// const globalHooks = require('../../../hooks')
const sanitize = require('./sanitize')
const auth = require('feathers-authentication').hooks
const addVirtual = require('feathers-virtual-attribute-hook')

// Hook for add virtual attributes to service response
const serializer = addVirtual({
  webUrl: (comment) => `/tutorial/${comment.id}#comment_${comment.id}`
})

exports.before = {
  all: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.requireAuth()
  ],
  find: [],
  get: [],
  create: [sanitize.transform],
  update: [sanitize.transform],
  patch: [sanitize.transform],
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
