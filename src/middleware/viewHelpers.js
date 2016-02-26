'use strict'

const moment = require('moment')
const numeral = require('numeral')
const jetpack = require('fs-jetpack')
const file = '../../public/rev-manifest.json'
const manifest = jetpack.read(file, 'json') || {}

module.exports = function viewHelpersMiddleware () {
  const app = this

  app.locals.env = app.get('env')
  app.locals.moment = moment
  app.locals.numeral = numeral

  app.locals.meta = getDefaultMeta()

  app.locals.assetPath = (path) => {
    if (app.get('env') !== 'production') return `/${path}`
    return `/${manifest[path] || path}`
  }
}

function getDefaultMeta () {
  return {
    title: 'LibTuts',
    description: 'Library Tutorials helps developers find tutorials about open source libraries and keep track of their updates.',
    siteName: 'LibTuts',
    type: 'website',
    images: ['http://libtuts.com/static/images/logo.png']
  }
}
