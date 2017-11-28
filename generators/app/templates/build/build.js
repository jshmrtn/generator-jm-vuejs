#!/usr/bin/env node

/* eslint-disable no-console */
'use strict';

require('./check-versions')();

const config = require('../config');

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.build.env.NODE_ENV);
}

console.log(`> NODE_ENV is: ${process.env.NODE_ENV}`);

const
  ora = require('ora'),
  rm = require('rimraf'),
  path = require('path'),
  chalk = require('chalk'),
  webpack = require('webpack'),
  spinner = ora(`building for ${process.env.NODE_ENV}...`);

let webpackConfig;

switch (process.env.NODE_ENV) {
case 'development':
  webpackConfig = require('./webpack.dev.conf');
  break;
case 'test':
  webpackConfig = require('./webpack.test.conf');
  break;
default:
  webpackConfig = require('./webpack.prod.conf');
  break;
}

spinner.start();

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), error => {
  if (error) {
    throw error;
  }
  webpack(webpackConfig, function(error, stats) {
    spinner.stop();
    if (error) {
      throw error;
    }
    process.stdout.write(
      stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
      }) + '\n\n'
    );

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'));
      process.exit(1);
    }

    console.log(chalk.cyan('  Build complete.\n'));
    console.log(
      chalk.yellow(
        '  Tip: built files are meant to be served over an HTTP server.\n' +
          "  Opening index.html over file:// won't work.\n"
      )
    );
  });
});
