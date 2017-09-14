#!/usr/bin/env node

/* eslint-disable no-console */
'use strict';

require('./check-versions')();

process.env.NODE_ENV = 'production';

const
    ora = require('ora'),
    rm = require('rimraf'),
    path = require('path'),
    chalk = require('chalk'),
    webpack = require('webpack'),
    config = require('../config'),
    webpackConfig = require('./webpack.prod.conf'),
    spinner = ora('building for production...');

spinner.start();

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), (error) => {
    if (error) {
        throw error;
    }
    webpack(webpackConfig, function (error, stats) {
        spinner.stop();
        if (error) {
            throw error;
        }
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false,
        }) + '\n\n');

        if (stats.hasErrors()) {
            console.log(chalk.red('  Build failed with errors.\n'));
            process.exit(1);
        }

        console.log(chalk.cyan('  Build complete.\n'));
        console.log(chalk.yellow(
            '  Tip: built files are meant to be served over an HTTP server.\n' +
            '  Opening index.html over file:// won\'t work.\n'
        ));
    });
});
