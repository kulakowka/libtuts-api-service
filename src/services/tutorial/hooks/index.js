'use strict';

const globalHooks = require('../../../hooks');
const auth = require('feathers-authentication').hooks;

// const validate = require('./validate')
// const transform = require('./transform')

exports.before = {
  all: [],
  find: [],
  get: [],
  create: [
    // transform,
    // validate
  ],
  update: [],
  patch: [],
  remove: []
};

exports.after = {
  all: [],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
