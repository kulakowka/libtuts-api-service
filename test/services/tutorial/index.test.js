'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('tutorial service', () => {
  it('registered the tutorials service', () => {
    assert.ok(app.service('tutorials'));
  });
});
