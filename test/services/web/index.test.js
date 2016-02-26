/* global describe, it */

'use strict'

const assert = require('assert')
const app = require('../../../src/app')

describe('web service', () => {
  it('registered the webs service', () => {
    assert.ok(app.service('webs'))
  })
})
