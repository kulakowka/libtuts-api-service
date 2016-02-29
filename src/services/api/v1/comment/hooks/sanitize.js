'use strict'

const marked = require('../../../../../utils/marked')

exports.transform = (hook) => {
  let data = hook.data
  data.contentHtml = marked(data.content)
}
