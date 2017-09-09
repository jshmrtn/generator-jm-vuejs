/* eslint-env node, jest */
'use strict';

const
  path = require('path'),
  assert = require('yeoman-assert'),
  helpers = require('yeoman-test'),
  dependenciesHelpers = require('./helpers/dependencies-helpers');

// TODO: Check Package.json validity
// TODO: Eslint on target files

describe('generator-jm-vuejs:app | Basic Usage', () => {

  beforeEach(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({ skipInstall: true })
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

  it('creates all "serviceworkerFiles" files', () => {
    assert.file([
      'src/sw.js',
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

describe('generator-jm-vuejs:app | Bundler', () => {

  describe('Webpack', () => {

    beforeEach(() => {
      return helpers.run(path.join(__dirname, '../generators/app'))
        .withOptions({ skipInstall: true })
        .withPrompts({
          bundlerType: 'webpack',
        });
    });

    it('creates all bundlerFiles.webpack files', () => {
      assert.file([
        'webpack/base.js',
        'webpack/dev.js',
        'webpack/prod.js',
        'webpack/server.conf.js',
        'webpack/server.js',
      ]);
    });

  });

  describe('None', () => {

    beforeEach(() => {
      return helpers.run(path.join(__dirname, '../generators/app'))
        .withOptions({ skipInstall: true })
        .withPrompts({
          bundlerType: 'none',
        });
    });

    it('creates no bundlerFiles.* files', () => {
      assert.noFile([
        'webpack/base.js',
        'webpack/dev.js',
        'webpack/prod.js',
        'webpack/server.conf.js',
        'webpack/server.js',
      ]);
    });

  });

});

describe('generator-jm-vuejs:app | CI', () => {

  describe('Travis CI', () => {

    beforeEach(() => {
      return helpers.run(path.join(__dirname, '../generators/app'))
        .withOptions({ skipInstall: true })
        .withPrompts({
          ciType: 'travis',
        });
    });

    it('creates all ciFiles.travis files', () => {
      assert.file([
        '.travis.yml',
      ]);
    });

  });

  describe('Circle CI', () => {

    beforeEach(() => {
      return helpers.run(path.join(__dirname, '../generators/app'))
        .withOptions({ skipInstall: true })
        .withPrompts({
          ciType: 'circle',
        });
    });

    it('creates all ciFiles.circle files', () => {
      assert.file([
        'circle.yml',
      ]);
    });

  });

  describe('Gitlab CI', () => {

    beforeEach(() => {
      return helpers.run(path.join(__dirname, '../generators/app'))
        .withOptions({ skipInstall: true })
        .withPrompts({
          ciType: 'gitlab',
        });
    });

    it('creates all ciFiles.circle files', () => {
      assert.file([
        '.gitlab-ci.yml',
      ]);
    });

  });

  describe('None', () => {

    beforeEach(() => {
      return helpers.run(path.join(__dirname, '../generators/app'))
        .withOptions({ skipInstall: true })
        .withPrompts({
          ciType: 'none',
        });
    });

    it('creates no ciFiles.* files', () => {
      assert.noFile([
        '.travis.yml',
        'circle.yml',
        '.gitlab-ci.yml',
      ]);
    });

  });


});

describe('generator-jm-vuejs:app | Routing', () => {

  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app')).withPrompts({
      vuejsComponents: [
        'routing'
      ]
    });
  });

  it('creates all "routingFiles" files', () => {
    assert.file([
      'src/core/routing/index.js',
      'src/core/routing/routes.js',
      'src/components/index',
      'src/components/not-found',
    ]);
  });

  it('adds vue-router to dependencies', () => {

    dependenciesHelpers.assertDependency('vue-router');

  });

});

describe('generator-jm-vuejs:app | State Management ', () => {

  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app')).withPrompts({
      vuejsComponents: [
        'stateManagement'
      ]
    });
  });

  it('creates all "stateManagementFiles" files', () => {
    assert.file([
      'src/core/state/actions.js',
      'src/core/state/getters.js',
      'src/core/state/index.js',
      'src/core/state/mutations.js',
      'src/core/state/plugins.js',
      'src/core/state/state.js',
    ]);
  });

  it('adds vuex to dependencies', () => {

    dependenciesHelpers.assertDependency('vuex');

  });

  it('adds vuex-persistedstate to dependencies', () => {

    dependenciesHelpers.assertDependency('vuex-persistedstate');

  });

});

describe('generator-jm-vuejs:app | Translations ', () => {

  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app')).withPrompts({
      vuejsComponents: [
        'translations'
      ]
    });
  });

  it('creates all "translationsFiles" files', () => {
    assert.file([
      'src/core/translations/en_US.json',
      'src/core/translations/index.js',
    ]);
  });

  it('adds vue-i18n to dependencies', () => {

    dependenciesHelpers.assertDependency('vue-i18n');

  });

});

describe('generator-jm-vuejs:app | HTTP Client ', () => {

  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app')).withPrompts({
      vuejsComponents: [
        'httpClient'
      ]
    });
  });

  it('creates all "httpClientFiles" files', () => {
    assert.file([
      'src/core/http/index.js',
    ]);
  });

  it('adds vue-resource to dependencies', () => {

    dependenciesHelpers.assertDependency('vue-resource');

  });

});

describe('generator-jm-vuejs:app | GraphQL Client ', () => {

  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app')).withPrompts({
      vuejsComponents: [
        'graphqlClient'
      ]
    });
  });

  it('creates all "graphqlClientFiles" files', () => {
    assert.file([
      'src/core/graphql/index.js',
    ]);
  });

  it('adds vue-apollo to dependencies', () => {

    dependenciesHelpers.assertDependency('vue-apollo');

  });

  it('adds apollo-client to dependencies', () => {

    dependenciesHelpers.assertDependency('apollo-client');

  });

});

describe('generator-jm-vuejs:app | Dependency Injection ', () => {

  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app')).withPrompts({
      vuejsComponents: [
        'dependencyInjection'
      ]
    });
  });

  it('creates all "dependencyInjectionFiles" files', () => {
    assert.file([
      'src/core/dependency-injection/index.js',
    ]);
  });

  it('adds vue-inject to dependencies', () => {

    dependenciesHelpers.assertDependency('vue-inject');

  });

});
