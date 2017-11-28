/* eslint-env node, jest */
'use strict';

const
    fs = require('fs'),
    path = require('path'),
    assert = require('yeoman-assert'),
    helpers = require('yeoman-test'),
    dependenciesHelpers = require('./helpers/dependencies-helpers'),
    packageJsonValidator=require('package-json-validator').PJV;

function readFile(filename, json) {
    var file = fs.readFileSync(filename, 'utf8');
    return json ? JSON.parse(file) : file;
}

describe('generator-jm-vuejs:app | Basic Usage', () => {

    beforeEach(() => {
        return helpers.run(path.join(__dirname, '../generators/app'))
            .withOptions({ skipInstall: true })
            .withPrompts({
                appName: 'generator-jm-vuejs-app',
                appDescription: 'generator-jm-vuejs-app test description',
                nodeVersion: 8,
                ide: 'vscode',
                serviceworker: true,
                browserconfig: true,
                manifest: true,
                vuejsComponents: [],
            });
    });

    it('creates all "simpleFiles" files', () => {
        assert.file([
            '.babelrc',
            '.csscomb.json',
            '.editorconfig',
            '.eslintignore',
            '.eslintrc.json',
            '.gitattributes',
            '.gitignore',
            '.htmlhintrc',
            '.modernizrrc.json',
            'postcss.config.js',
            '.prettierrc',
            'jsconfig.json',
            'README.md',
            'src/assets/.gitkeep',
            'src/helpers/.gitkeep',
            'src/mixins/.gitkeep',
            'src/plugins/.gitkeep',
            'src/styles/fonts.scss',
            'src/styles/variables.scss',
            'src/styles/reset.scss',
        ]);
    });

    it('creates all "tplFiles" files', () => {
        assert.file([
            '.nvmrc',
            'bin/setup-client-config',
            'src/client.config.dist.json',
            'src/main.js',
            'src/index.html',
            'src/components/app',
        ]);
    });

});

describe('generator-jm-vuejs:app | Service Worker', () => {

    describe('enabled', () => {

        beforeAll(() => {
            return helpers.run(path.join(__dirname, '../generators/app'))
                .withOptions({ skipInstall: true })
                .withPrompts({
                    serviceworker: true,
                });
        });

        it('creates all "serviceworkerFiles" files', () => {
            assert.file([
                'src/sw.js',
            ]);
        });

    });

    describe('disabled', () => {

        beforeAll(() => {
            return helpers.run(path.join(__dirname, '../generators/app'))
                .withOptions({ skipInstall: true })
                .withPrompts({
                    serviceworker: false,
                });
        });

        it('creates no "serviceworkerFiles" files', () => {
            assert.noFile([
                'src/sw.js',
            ]);
        });

    });

});

describe('generator-jm-vuejs:app | Browserconfig', () => {

    describe('enabled', () => {

        beforeAll(() => {
            return helpers.run(path.join(__dirname, '../generators/app'))
                .withOptions({ skipInstall: true })
                .withPrompts({
                    browserconfig: true,
                });
        });

        it('creates all "browserconfigFiles" files', () => {
            assert.file([
                'src/browserconfig.xml',
            ]);
        });

    });

    describe('disabled', () => {

        beforeAll(() => {
            return helpers.run(path.join(__dirname, '../generators/app'))
                .withOptions({ skipInstall: true })
                .withPrompts({
                    browserconfig: false,
                });
        });

        it('creates no "browserconfigFiles" files', () => {
            assert.noFile([
                'src/browserconfig.xml',
            ]);
        });

    });

});

describe('generator-jm-vuejs:app | Manifest', () => {

    describe('enabled', () => {

        beforeAll(() => {
            return helpers.run(path.join(__dirname, '../generators/app'))
                .withOptions({ skipInstall: true })
                .withPrompts({
                    manifest: true,
                });
        });

        it('creates all "manifestFiles" files', () => {
            assert.file([
                'src/manifest.json',
            ]);
        });

    });

    describe('disabled', () => {

        beforeAll(() => {
            return helpers.run(path.join(__dirname, '../generators/app'))
                .withOptions({ skipInstall: true })
                .withPrompts({
                    manifest: false,
                });
        });

        it('creates no "manifestFiles" files', () => {
            assert.noFile([
                'src/manifest.json',
            ]);
        });

    });

});

describe('generator-jm-vuejs:app | Webpack', () => {

    beforeEach(() => {
        return helpers.run(path.join(__dirname, '../generators/app'))
            .withOptions({ skipInstall: true });
    });

    it('creates all webpackFiles files', () => {
        assert.file([
            'config/dev.env.js',
            'config/index.js',
            'config/prod.env.js',
            'config/test.env.js',
            'build/build.js',
            'build/check-versions.js',
            'build/dev-client.js',
            'build/dev-server.js',
            'build/test-server.js',
            'build/utils.js',
            'build/vue-loader.conf.js',
            'build/webpack.base.conf.js',
            'build/webpack.dev.conf.js',
            'build/webpack.prod.conf.js',
            'build/webpack.test.conf.js',
        ]);
    });

});

describe('generator-jm-vuejs:app | Testing', () => {

    beforeEach(() => {
        return helpers.run(path.join(__dirname, '../generators/app'))
            .withOptions({ skipInstall: true });
    });

    it('creates all testingFiles files', () => {
        assert.file([
            'jest.default.config.json',
            'jest.visual.config.json',
            'test/browser.visual.js',
            'test/setup.default.js',
            'test/setup.visual.js',
            'test/test-app/main.js',
            'test/test-app/index.html',
            'test/test-app/components/app.vue',
        ]);
    });

});

describe('generator-jm-vuejs:app | IDE', () => {

    describe('VS Code', () => {

        beforeEach(() => {
            return helpers.run(path.join(__dirname, '../generators/app'))
                .withOptions({ skipInstall: true })
                .withPrompts({
                    ide: 'vscode',
                });
        });

        it('creates all ideFiles.vscode files', () => {
            assert.file([
                '.vscode/launch.json',
                '.vscode/settings.json',
                'jsconfig.json',
            ]);
        });

    });

    describe('None', () => {

        beforeEach(() => {
            return helpers.run(path.join(__dirname, '../generators/app'))
                .withOptions({ skipInstall: true })
                .withPrompts({
                    ide: 'none',
                });
        });

        it('creates no *Files files', () => {
            assert.noFile([
                '.vscode/launch.json',
                '.vscode/settings.json',
                'jsconfig.json',
            ]);
        });

    });

});

describe('generator-jm-vuejs:app | Routing', () => {

    beforeAll(() => {
        return helpers.run(path.join(__dirname, '../generators/app')).withPrompts({
            vuejsComponents: [
                'routing',
            ],
        });
    });

    it('creates all "routingFiles" files', () => {
        assert.file([
            'src/core/routing/index.js',
            'src/core/routing/routes.js',
            'src/components/index',
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
                'stateManagement',
            ],
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
                'translations',
            ],
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
                'httpClient',
            ],
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
                'graphqlClient',
            ],
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
                'dependencyInjection',
            ],
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

describe('generator-jm-vuejs:app | NPM Validity ', () => {

    beforeAll(() => {
        return helpers.run(path.join(__dirname, '../generators/app')).withPrompts({
            appName: 'generator-jm-vuejs-app',
            appDescription: 'generator-jm-vuejs-app test description',
            nodeVersion: 8,
            ide: 'vscode',
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
            ],
        });
    });

    it('has a valid package.json', () => {

        const
            packageJson = readFile('package.json');

        test = packageJsonValidator.validate(packageJson, 'npm', {
            warnings: true,
            recommendations: true,
        });

        expect(test.errors).toBeUndefined();
        expect(test.valid).toBeTruthy();

    });

});
