'use strict';

const globalHooks = require('../../../hooks')
const auth = require('feathers-authentication').hooks
const transformHook = require('feathers-transform-hook')
const marked = require('../../../utils/marked')
const slug = require('slug')

exports.before = {
  all: [],
  find: [],
  get: [],
  create: [
   transformHook({
      slug: d => slug(d.title.s),
      contentHtml: d => marked(d.content.s)
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
