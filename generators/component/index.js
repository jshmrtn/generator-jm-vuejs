'use strict';

const
    Generator = require('yeoman-generator'),
    chalk = require('chalk'),
    yosay = require('yosay'),
    prompts = require('./prompts');

module.exports = class extends Generator {
    prompting() {

        this.log(yosay(
            'Welcome to the wicked ' + chalk.red('generator-jm-vuejs') + ' generator for components!'
        ));

        return this.prompt(prompts).then((props) => {

            this.props = props;

        });

    }

    configuring() {

        const config = this.config.getAll();

        if (config.components && config.components[this.props.componentName]) {
            this.log(yosay(
                `Sorry, but a component with the same name ${chalk.red('already exists')}. Try again?`
            ));

            process.exit();
        }

    }

    writing() {

        let source, target;

        const componentName = this.props.componentName;

        const componentFiles = {
            '__component__.vue': `src/components/${componentName}/${componentName}.vue`,
        };

        const unitTestingfiles = {
            '__component__.unit.js': `src/components/${componentName}/${componentName}.unit.js`,
        };

        const integrationTestingfiles = {
            '__component__.integration.js': `src/components/${componentName}/${componentName}.integration.js`,
        };

        const visualTestingfiles = {
            '__component__.visual.js': `src/components/${componentName}/${componentName}.visual.js`,
        };

        /**
     * Component
     */

        for (source in componentFiles) {
            target = componentFiles[source];
            this._copyTpl(source, target);
        }

        /**
     * Unit Testing
     */
        if (this.props.testingTypes.indexOf('unit') >= 0) {
            for (source in unitTestingfiles) {
                target = unitTestingfiles[source];
                this._copyTpl(source, target);
            }
        };

        /**
     * Integration Testing
     */
        if (this.props.testingTypes.indexOf('integration') >= 0) {
            for (source in integrationTestingfiles) {
                target = integrationTestingfiles[source];
                this._copyTpl(source, target);
            }
        };

        /**
     * Visual Testing
     */
        if (this.props.testingTypes.indexOf('visual') >= 0) {
            for (source in visualTestingfiles) {
                target = visualTestingfiles[source];
                this._copyTpl(source, target);
            }
        };

    }


    end() {
        this._writeConfig();
    }

    _writeConfig() {

        let config = this.config.getAll();

        if (!config.components) {
            this.config.set('components', {});
            this.config.save();
            config = this.config.getAll();
        }

        if (!config.components[this.props.componentName]) {
            this.config.set({
                'components': {
                    ...config.components,
                    [this.props.componentName]: {
                        'testingTypes': this.props.testingTypes,
                    },
                },
            });
        }

    }

    _copyTpl(source, dest) {
        this.fs.copyTpl(this.templatePath(source), this.destinationPath(dest), this);
    }

};
