'use strict';

const {lowerCaseId, lowerCase} = require('../../../hooks');
const {hashPassword} = require('feathers-authentication').hooks;
const {disable, remove} = require('feathers-hooks');

exports.before = {
  all: [
  ],
  find: [],
  get: [
    lowerCaseId()
  ],
  create: [
    lowerCase('email', 'username'),  // TODO: как только этот хук добавят в бандлед feathers-hooks, надо будет заменить на hooks.lowerCase
    hashPassword()
  ],
  update: [
    disable('external')
  ],
  patch: [
    disable('external')
  ],
  remove: [
    disable('external')
  ]
};

exports.after = {
  all: [
    remove('password')
  ],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
