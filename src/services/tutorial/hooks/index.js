'use strict';

const globalHooks = require('../../../hooks')
const auth = require('feathers-authentication').hooks
const marked = require('../../../utils/marked')
const getDomain = require('../../../utils/getDomain')
const slug = require('slug')

exports.before = {
  all: [],
  find: [],
  get: [],
  create: [
    hook => {
      let data = hook.data
      data.slug = slug(data.title.toLowerCase())
      data.contentHtml = marked(data.content)
      data.sourceDomain = getDomain(data.sourceUrl)
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
