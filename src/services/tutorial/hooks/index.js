'use strict';

const globalHooks = require('../../../hooks')
const auth = require('feathers-authentication').hooks
const transformHook = require('feathers-transform-hook')
const marked = require('../../../utils/marked')
const getDomain = require('../../../utils/getDomain')
const slug = require('slug')

exports.before = {
  all: [],
  find: [],
  get: [],
  create: [
    hook => {
      hook.data.slug = slug(hook.data.title.toLowerCase())
      hook.data.contentHtml = marked(hook.data.content)
      hook.data.sourceDomain = getDomain(hook.data.sourceUrl)
    }
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
