'use strict';

const globalHooks = require('../../../hooks');
const auth = require('feathers-authentication').hooks;
const hooks = require('feathers-hooks');

exports.before = {
  all: [],
  find: [],
  get: [],
  create: [
    globalHooks.lowerCase('email', 'username'),  // TODO: как только этот хук добавят в бандлед feathers-hooks, надо будет заменить на hooks.lowerCase
    auth.hashPassword()
  ],
  update: [
    hooks.disable('external')
  ],
  patch: [
    hooks.disable('external')
  ],
  remove: [
    hooks.disable('external')
  ]
};

exports.after = {
  all: [
    hooks.remove('password')
  ],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
