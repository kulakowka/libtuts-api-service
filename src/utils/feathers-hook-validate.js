'use strict'

const errors = require('feathers-errors')
const revalidator = require('revalidator')

module.exports = function validateHook (schema) {
  return function (hook) {

    let result = revalidator.validate(hook.data, schema)

    console.log(result)

    if (result.valid) return Promise.resolve(hook)

    let error = new Error('Validation failed')

    error.errors = result.errors.map(error => {
      return {
        path: error.property,
        value: hook.data[error.property],
        message: `${error.property} ${error.message}`
      }
    })

    throw new errors.BadRequest(error, hook.data)
  }
}
