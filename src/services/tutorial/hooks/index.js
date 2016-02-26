'use strict';

const globalHooks = require('../../../hooks');
const auth = require('feathers-authentication').hooks;
const transformHook = require('feathers-transform-hook')

exports.before = {
  all: [],
  find: [],
  get: [],
  create: [
   transformHook({
      slug: (data, S) => S(v.title).slugify()
    })
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
