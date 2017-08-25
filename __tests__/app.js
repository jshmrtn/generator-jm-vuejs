'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-jm-vuejs:app | Basic Usage', () => {

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
        vuejsComponents: []
      });
  });

  it('creates all "simpleFiles" files', () => {
    assert.file([
      '.csscomb.json',
      '.editorconfig',
      '.eslintignore',
      '.eslintrc.json',
      '.gitattributes',
      '.gitignore',
      '.htmlhintrc',
      '.modernizrrc.json',
      'jsconfig.json',
      'README.md',
      'bin/dev-server',
      'bin/setup-client-config',
      'src/assets/.gitkeep',
      'src/helpers/.gitkeep',
      'src/mixins/.gitkeep',
      'src/plugins/.gitkeep',
      'src/styles/fonts.scss',
      'src/styles/variables.scss',
      'src/global.scss',
    ]);
  });

  it('creates all "tplFiles" files', () => {
    assert.file([
      '.nvmrc',
      'src/client.config.dist.json',
      'src/main.js',
      'src/index.html',
      'src/components/app',
    ]);
  });

  it('creates all "tplFiles" files', () => {
    assert.file([
      '.nvmrc',
      'src/client.config.dist.json',
      'src/main.js',
      'src/index.html',
      'src/components/app',
    ]);
  });

  it('creates all "ciFiles" files', () => {
    assert.file([
      'circle.yml',
    ]);
  });

  it('creates all "serviceworkerFiles" files', () => {
    assert.file([
      'src/sw.js',
    ]);
  });

  it('creates all "bundlerFiles" files', () => {
    assert.file([
      'webpack/base.js',
      'webpack/dev.js',
      'webpack/prod.js',
      'webpack/server.conf.js',
      'webpack/server.js',
    ]);
  });

  it('creates all "browserconfigFiles" files', () => {
    assert.file([
      'src/browserconfig.xml',
    ]);
  });

  it('creates all "manifestFiles" files', () => {
    assert.file([
      'src/manifest.json',
    ]);
  });

});
