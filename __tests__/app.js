'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-jm-vuejs:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        appName: 'generator-jm-vuejs-app',
        appDescription: 'generator-jm-vuejs-app test description',
        nodeVersion: 7,
        bundlerType: 'webpack',
        ciType: 'circle',
        serviceworker: true,
        browserconfig: true,
        manifest: true,
        vuejsComponents: [
          'routing',
          'stateManagement',
          'translations',
          'httpClient',
          'graphqlClient',
          'dependencyInjection',
        ]
      });
  });
});
