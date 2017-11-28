/* eslint-env node, jest */
'use strict';

const
    path = require('path'),
    assert = require('yeoman-assert'),
    helpers = require('yeoman-test');

describe('generator-jm-vuejs:component | Component', () => {

    beforeEach(() => {
        return helpers.run(path.join(__dirname, '../generators/component'))
            .withOptions({ skipInstall: true })
            .withPrompts({
                componentName: 'test-component',
                testingTypes: [],
            });
    });

    it('creates all "componentFiles" files', () => {
        assert.file([
            'src/components/test-component/test-component.vue',
        ]);
    });

});

describe('generator-jm-vuejs:component | Unit Testing ', () => {

    beforeEach(() => {
        return helpers.run(path.join(__dirname, '../generators/component'))
            .withOptions({ skipInstall: true })
            .withPrompts({
                componentName: 'test-component',
                testingTypes: [
                    'unit',
                ],
            });
    });

    it('creates all "unitTestingfiles" files', () => {
        assert.file([
            'src/components/test-component/test-component.unit.js',
        ]);
    });

});

describe('generator-jm-vuejs:component | Integration Testing ', () => {

    beforeEach(() => {
        return helpers.run(path.join(__dirname, '../generators/component'))
            .withOptions({ skipInstall: true })
            .withPrompts({
                componentName: 'test-component',
                testingTypes: [
                    'integration',
                ],
            });
    });

    it('creates all "integrationTestingfiles" files', () => {
        assert.file([
            'src/components/test-component/test-component.integration.js',
        ]);
    });

});

describe('generator-jm-vuejs:component | Visual Testing ', () => {

    beforeEach(() => {
        return helpers.run(path.join(__dirname, '../generators/component'))
            .withOptions({ skipInstall: true })
            .withPrompts({
                componentName: 'test-component',
                testingTypes: [
                    'visual',
                ],
            });
    });

    it('creates all "visualTestingfiles" files', () => {
        assert.file([
            'src/components/test-component/test-component.visual.js',
        ]);
    });

});
