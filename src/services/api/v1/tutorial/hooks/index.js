'use strict'

// const globalHooks = require('../../../hooks')
const sanitize = require('./sanitize')
// const auth = require('feathers-authentication').hooks

exports.before = {
  all: [],
  find: [],
  get: [],
  create: [
    sanitize.remove,
    sanitize.transform
  ],
  update: [
    sanitize.remove,
    sanitize.transform
  ],
  patch: [
    sanitize.remove,
    sanitize.transform
  ],
  remove: []
}

exports.after = {
  all: [],
  find: [
    // (hook) => {
    //   let data = hook.result.data
    //   data.forEach((item) => {
    //     item.dataValues.webUrl = `/tutorial/${item.dataValues.id}/${item.dataValues.slug}`
    //   })
    // }
  ],
  get: [
    (hook) => {
      let tutorial = hook.result.dataValues
      tutorial.webUrl = `/tutorial/${tutorial.id}/${tutorial.slug}`
    }
  ],
  create: [],
  update: [],
  patch: [],
  remove: []
}
