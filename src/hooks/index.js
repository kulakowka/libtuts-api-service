'use strict'

exports.lowerCaseId = function () {
  return function (hook) {
    hook.id = hook.id.toLowerCase()
  }
}
