#!/usr/bin/env node

/* eslint-disable no-console */
'use strict';

const
    path = require('path'),
    utils = require('./utils'),
    config = require('../config'),
    vueLoaderConfig = require('./vue-loader.conf'),
    rootPath = path.join(__dirname, '../'),
    srcPath = path.join(rootPath, 'src'),
    ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');

module.exports = {
    context: rootPath,
    entry: {
        app: [
            path.join(srcPath, 'main.js'),
            'modernizr',
        ],
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production' ?
            config.build.assetsPublicPath : config.dev.assetsPublicPath,
    },
    resolve: {
        extensions: [ '.js', '.vue', '.json' ],
        alias: {
            root: rootPath,
            src: srcPath,
            assets: path.join(srcPath, 'assets'),
            components: path.join(srcPath, 'components'),
            helpers: path.join(srcPath, 'helpers'),
            mixins: path.join(srcPath, 'mixins'),
            plugins: path.join(srcPath, 'plugins'),
            styles: path.join(srcPath, 'styles'),
            core: path.join(srcPath, 'core'),
            'modernizr$': path.resolve(rootPath, '.modernizrrc.json'),
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(rootPath, 'src'),
        },
    },
    module: {
        rules: [{
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            enforce: 'pre',
            include: [ path.resolve(rootPath, 'src'), path.resolve(rootPath, 'test') ],
            options: {
                formatter: require('eslint-friendly-formatter'),
            },
        },
        {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: vueLoaderConfig,
        },
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: utils.assetsPath('img/[name].[hash:7].[ext]'),
            },
        },
        {
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: utils.assetsPath('media/[name].[hash:7].[ext]'),
            },
        },
        {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
            },
        },
        {
            test: /\.modernizrrc\.json$/,
            use: [{
                loader: 'modernizr-loader',
            },
            {
                loader: 'json-loader',
            },
            ],
        },
        {
            test: /browserconfig\.xml$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: 'browserconfig.xml',
                },
            },
            {
                loader: 'web-app-browserconfig-loader',
            },
            ],
        },
        {
            test: /manifest.json$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: 'manifest.json',

                },
            },
            {
                loader: 'web-app-manifest-loader',
            },
            ],
        },
        ],
    },
    plugins: [
        new ServiceWorkerWebpackPlugin({
            entry: path.resolve(srcPath, 'sw.js'),
            excludes: [
                '**/.*',
                '**/*.map',
                '*.html',
            ],
            includes: [
                '**/*',
            ],
        }),
    ],
};
