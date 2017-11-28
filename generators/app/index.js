'use strict';

const
    Generator = require('yeoman-generator'),
    chalk = require('chalk'),
    yosay = require('yosay'),
    prompts = require('./prompts'),
    simpleFiles = require('./files').simpleFiles,
    tplFiles = require('./files').tplFiles,
    webpackFiles = require('./files').webpackFiles,
    testingFiles = require('./files').testingFiles,
    ideFiles = require('./files').ideFiles,
    serviceworkerFiles = require('./files').serviceworkerFiles,
    browserconfigFiles = require('./files').browserconfigFiles,
    manifestFiles = require('./files').manifestFiles,
    routingFiles = require('./files').routingFiles,
    stateManagementFiles = require('./files').stateManagementFiles,
    translationsFiles = require('./files').translationsFiles,
    httpClientFiles = require('./files').httpClientFiles,
    graphqlClientFiles = require('./files').graphqlClientFiles,
    dependencyInjectionFiles = require('./files').dependencyInjectionFiles;

module.exports = class extends Generator {
    prompting() {

        this.log(yosay(
            'Welcome to the wicked ' + chalk.red('generator-jm-vuejs') + ' generator!'
        ));

        return this.prompt(prompts).then((props) => {

            this.props = props;

        });

    }

    configuring() {

        const config = this.config.getAll();

        if (config.app) {
            this.log(yosay(
                'Sorry, but the application was already generated.'
            ));

            process.exit();
        }

    }

    writing() {

        let source, target;

        this._copyTpl('package.json', 'package.json');

        /**
         * Webpack
         */

        for (source in webpackFiles) {
            target = webpackFiles[source];
            this._copyTpl(source, target);
        }

        /**
         * Testing
         */

        for (source in testingFiles) {
            target = testingFiles[source];
            this._copyTpl(source, target);
        }

        /**
         * IDE
         */

        if (this.props.ide !== 'none') {

            const
                selectedIdeFiles = ideFiles[this.props.ide];

            for (source in selectedIdeFiles) {
                target = selectedIdeFiles[source];
                this._copyTpl(source, target);
            }

        }

        /**
         * serviceworker
         */

        if (this.props.serviceworker) {

            for (source in serviceworkerFiles) {
                target = serviceworkerFiles[source];
                this._copyTpl(source, target);
            }

        }

        /**
         * browserconfig
         */

        if (this.props.browserconfig) {

            for (source in browserconfigFiles) {
                target = browserconfigFiles[source];
                this._copyTpl(source, target);
            }

        }

        /**
         * manifest
         */

        if (this.props.manifest) {

            for (source in manifestFiles) {
                target = manifestFiles[source];
                this._copyTpl(source, target);
            }

        }

        /**
         * VueJS
         */

        // routing
        if (this.props.vuejsComponents.indexOf('routing') >= 0) {
            for (source in routingFiles) {
                target = routingFiles[source];
                this._copyTpl(source, target);
            }
        }
        // stateManagement
        if (this.props.vuejsComponents.indexOf('stateManagement') >= 0) {
            for (source in stateManagementFiles) {
                target = stateManagementFiles[source];
                this._copyTpl(source, target);
            }
        }
        // translations
        if (this.props.vuejsComponents.indexOf('translations') >= 0) {
            for (source in translationsFiles) {
                target = translationsFiles[source];
                this._copyTpl(source, target);
            }
        }
        // httpClient
        if (this.props.vuejsComponents.indexOf('httpClient') >= 0) {
            for (source in httpClientFiles) {
                target = httpClientFiles[source];
                this._copyTpl(source, target);
            }
        }
        // graphqlClient
        if (this.props.vuejsComponents.indexOf('graphqlClient') >= 0) {
            for (source in graphqlClientFiles) {
                target = graphqlClientFiles[source];
                this._copyTpl(source, target);
            }
        }
        // dependencyInjection
        if (this.props.vuejsComponents.indexOf('dependencyInjection') >= 0) {
            for (source in dependencyInjectionFiles) {
                target = dependencyInjectionFiles[source];
                this._copyTpl(source, target);
            }
        }

        /**
         * General
         */

        for (source in simpleFiles) {
            target = simpleFiles[source];
            this._copyTpl(source, target);
        }

        for (source in tplFiles) {
            target = tplFiles[source];
            this._copyTpl(source, target);
        }

    }

    install() {

        // make bin executable
        // setup client config

        this.installDependencies({
            bower: false,
            npm: false,
            yarn: true,
        });

    }

    end() {
        this._writeConfig();
    }

    _writeConfig() {

        this.config.set({
            'app': {
                ...this.props,
            },
        });

    }

    _copyTpl (source, dest) {
        this.fs.copyTpl(this.templatePath(source), this.destinationPath(dest), this);
    }

};
