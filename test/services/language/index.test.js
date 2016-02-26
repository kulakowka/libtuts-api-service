/* global describe, it */

'use strict'

const assert = require('assert')
const app = require('../../../src/app')

describe('language service', () => {
  it('registered the languages service', () => {
    assert.ok(app.service('languages'))
  })
})
