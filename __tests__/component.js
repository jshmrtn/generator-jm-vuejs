'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-jm-vuejs:component', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/component'))
      .withPrompts({someAnswer: true});
  });
});
