'use strict'

// Add any common hooks you want to share across services in here.
//
// Below is an example of how a hook is written and exported. Please
// see http://docs.feathersjs.com/hooks/readme.html for more details
// on hooks.

exports.myHook = function (options) {
  return function (hook) {
    console.log('My custom global hook ran. Feathers is awesome!')
  }
}

exports.lowerCase = function (...fields) {
  const lowerCaseFields = (data) => {
    for (let field of fields) {
      data[field] = data[field].toLowerCase()
    }
  }

  return function (hook) {
    let result = hook.type === 'before' ? hook.data : hook.result

    if (result) {
      if (hook.method === 'find' || Array.isArray(result)) {
        // data.data if the find method is paginated
        (result.data || result).forEach(lowerCaseFields)
      } else {
        lowerCaseFields(result)
      }
    }
  }
}

exports.lowerCaseId = function () {
  return function (hook) {
    hook.id = hook.id.toLowerCase()
  }
}
