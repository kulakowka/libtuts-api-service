'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('project service', () => {
  it('registered the projects service', () => {
    assert.ok(app.service('projects'));
  });
});
