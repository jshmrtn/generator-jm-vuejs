#!/usr/bin/env node

/* eslint-disable no-console */
'use strict';

const
      path = require('path'),
      config = require('../config'),
      ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.cwd = (file) => {
  return path.join(process.cwd(), file || '');
};

exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production' ?
    config.build.assetsSubDirectory :
    config.dev.assetsSubDirectory;

  return path.posix.join(assetsSubDirectory, _path);
};

exports.cssLoaders = function (options) {
  options = options || {};

  const cssLoader = {
    loader: 'css-loader',
    options: {
      minimize: process.env.NODE_ENV === 'production',
      sourceMap: options.sourceMap,
    },
  };

  // generate loader string to be used with extract text plugin
  function generateLoaders(loader, loaderOptions) {
    const loaders = [cssLoader];

    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap,
        }),
      });
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader',
      });
    }

    return ['vue-style-loader'].concat(loaders);

  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', {
      indentedSyntax: true,
    }),
    scss: generateLoaders('sass', {
      globalVars: {
        'style-path': './src/styles',
      },
      includePaths: [
        path.resolve(__dirname, '../node_modules'),
      ],
    }),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus'),
  };
};
