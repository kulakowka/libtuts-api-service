'use strict'

// const globalHooks = require('../../../hooks')
const sanitize = require('./sanitize')
// const auth = require('feathers-authentication').hooks

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
  all: [],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
}
