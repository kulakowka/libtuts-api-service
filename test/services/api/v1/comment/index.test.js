/* global describe, it */

'use strict'

const assert = require('assert')
const app = require('../../../../../src/app')

describe('comment service', () => {
  it('registered the comments service', () => {
    assert.ok(app.service('api/v1/comments'))
  })
})
