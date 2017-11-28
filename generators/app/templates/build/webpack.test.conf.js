#!/usr/bin/env node

/* eslint-disable no-console */
'use strict';

const
      path = require('path'),
      webpack = require('webpack'),
      config = require('../config'),
      merge = require('webpack-merge'),
      baseWebpackConfig = require('./webpack.base.conf'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      rootPath = path.join(__dirname, '../');

module.exports = merge(baseWebpackConfig, {
  devtool: '#cheap-module-eval-source-map',
  entry: {
    main: [
      path.join(rootPath, 'test/test-app/main.js'),
      'modernizr',
    ],
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.test.env,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(rootPath, 'test/test-app/index.html'),
      inject: true,
      excludeChunks: ['app'],
    }),
    new ExtractTextPlugin({
      filename: '[hash].css',
      allChunks: true,
      disable: true,
    }),
  ],
});
