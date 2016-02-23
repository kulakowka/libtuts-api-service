'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('platform service', () => {
  it('registered the platforms service', () => {
    assert.ok(app.service('platforms'));
  });
});
