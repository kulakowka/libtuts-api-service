'use strict';

const globalHooks = require('../../../hooks')
const auth = require('feathers-authentication').hooks
const transformHook = require('feathers-transform-hook')
const marked = require('../../../utils/marked')

exports.before = {
  all: [],
  find: [],
  get: [],
  create: [
   transformHook({
      slug: d => d.title.slugify(),
      contentHtml: d => marked(d.content)
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
