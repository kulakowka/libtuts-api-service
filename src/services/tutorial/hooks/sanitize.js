'use strict'

const hooks = require('feathers-hooks')
const marked = require('../../../utils/marked')
const getDomain = require('../../../utils/getDomain')
const slug = require('slug')

exports.remove = hooks.remove('commentsCount', 'contentHtml', 'sourceDomain', 'slug', 'id')

exports.transform = (hook) => {
  let data = hook.data
  data.slug = slug(data.title.toLowerCase())
  data.contentHtml = marked(data.content)
  data.sourceDomain = getDomain(data.sourceUrl)
  data.keywords.map((keyword) => keyword.trim())
  data.languages.map((language) => language.trim())
  data.platforms.map((platform) => platform.trim())
  data.projects.map((project) => project.trim())
}
