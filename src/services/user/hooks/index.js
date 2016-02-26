'use strict';

const core = require('../../../hooks');
const auth = require('feathers-authentication').hooks;
const hooks = require('feathers-hooks');

exports.before = {
  all: [],
  find: [],
  get: [core.lowerCaseId()],
  create: [core.lowerCase('email', 'username'),auth.hashPassword()],
  update: [hooks.disable('external')],
  patch: [hooks.disable('external')],
  remove: [hooks.disable('external')]
};

exports.after = {
  all: [hooks.remove('password')],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
