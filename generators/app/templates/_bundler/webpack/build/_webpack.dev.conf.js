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
    FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin'),
    rootPath = path.join(__dirname, '../'),
    srcPath = path.join(rootPath, 'src');

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
    baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name]);
});

module.exports = merge(baseWebpackConfig, {
    // cheap-module-eval-source-map is faster for development
    devtool: '#cheap-module-eval-source-map',
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        },
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': config.dev.env,
        }),
        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(srcPath, 'index.html'),
            inject: true,
        }),
        new FriendlyErrorsPlugin(),
        new ExtractTextPlugin({
            filename: '[hash].css',
            allChunks: true,
            disable: true,
        }),
    ],
});
