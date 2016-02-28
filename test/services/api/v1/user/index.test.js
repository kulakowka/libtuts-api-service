/* global describe, it */

'use strict'

const assert = require('assert')
const app = require('../../../../../src/app')

describe('user service', () => {
  it('registered the users service', () => {
    assert.ok(app.service('api/v1/users'))
  })
})
