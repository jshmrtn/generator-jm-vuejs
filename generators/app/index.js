'use strict';

const
    Generator = require('yeoman-generator'),
    chalk = require('chalk'),
    yosay = require('yosay'),
    prompts = require('./prompts'),
    simpleFiles = require('./files').simpleFiles,
    tplFiles = require('./files').tplFiles,
    bundlerFiles = require('./files').bundlerFiles,
    ciFiles = require('./files').ciFiles,
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

  writing() {

    let source, target;

    this._copyTpl('__package.json', 'package.json');

    /**
     * Webpack
     */

    if (this.props.bundlerType === 'webpack') {

      for (source in bundlerFiles['webpack']) {
        target = bundlerFiles['webpack'][source];
        this._copyTpl(source, target);
      }

    }

    /**
     * CI
     */

    const
      selectedCiFiles = ciFiles[this.props.ciType];

    for (source in selectedCiFiles) {
      target = selectedCiFiles[source];
      this._copyTpl(source, target);
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
    if (this.props.vuejsComponents.indexOf("routing") >= 0) {
      for (source in routingFiles) {
        target = routingFiles[source];
        this._copyTpl(source, target);
      }
    }
    // stateManagement
    if (this.props.vuejsComponents.indexOf("stateManagement") >= 0) {
      for (source in stateManagementFiles) {
        target = stateManagementFiles[source];
        this._copyTpl(source, target);
      }
    }
    // translations
    if (this.props.vuejsComponents.indexOf("translations") >= 0) {
      for (source in translationsFiles) {
        target = translationsFiles[source];
        this._copyTpl(source, target);
      }
    }
    // httpClient
    if (this.props.vuejsComponents.indexOf("httpClient") >= 0) {
      for (source in httpClientFiles) {
        target = httpClientFiles[source];
        this._copyTpl(source, target);
      }
    }
    // graphqlClient
    if (this.props.vuejsComponents.indexOf("graphqlClient") >= 0) {
      for (source in graphqlClientFiles) {
        target = graphqlClientFiles[source];
        this._copyTpl(source, target);
      }
    }
    // dependencyInjection
    if (this.props.vuejsComponents.indexOf("dependencyInjection") >= 0) {
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
      this._copy(source, target);
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
      callback: function () {}
    });
  }

  _copyTpl (source, dest) {
    this.fs.copyTpl(this.templatePath(source), this.destinationPath(dest), this);
  }

  _copy (source, dest) {
    this.fs.copy(this.templatePath(source), this.destinationPath(dest));
  }

};
