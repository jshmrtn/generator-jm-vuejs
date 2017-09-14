#!/usr/bin/env node

/* eslint-disable no-console */
'use strict';

// This is the webpack config used for unit tests.

const
    webpack = require('webpack'),
    merge = require('webpack-merge'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    baseConfig = require('./webpack.base.conf');

const webpackConfig = merge(baseConfig, {
    // use inline sourcemap for karma-sourcemap-loader
    devtool: '#inline-source-map',
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        },
    },
    resolveLoader: {
        alias: {
            // necessary to to make lang="scss" work in test when using vue-loader's ?inject option
            // see discussion at https://github.com/vuejs/vue-loader/issues/724
            'scss-loader': 'sass-loader',
        },
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': require('../config/test.env'),
        }),
        new ExtractTextPlugin({
            filename: '[hash].css',
            allChunks: true,
            disable: true,
        }),
    ],
});

// no need for app entry during tests
delete webpackConfig.entry;

module.exports = webpackConfig;
