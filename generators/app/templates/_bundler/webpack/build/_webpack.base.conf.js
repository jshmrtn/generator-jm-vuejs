#!/usr/bin/env node

/* eslint-disable no-console */
'use strict';

const
    path = require('path'),
    utils = require('./utils'),
    config = require('../config'),
    rootPath = path.join(__dirname, '../'),
    distPath = path.join(rootPath, 'dist'),
    srcPath = path.join(rootPath, 'src'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
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
        publicPath: process.env.NODE_ENV === 'production' ?
            config.build.assetsPublicPath : config.dev.assetsPublicPath,
        filename: '[name].[hash].js',
        sourceMapFilename: '[name].[hash].js.map',
        chunkFilename: '[name].[chunkhash].js',
        hotUpdateMainFilename: '[hash]/update.json',
        hotUpdateChunkFilename: '[hash]/js/[id].update.js',
    },
    recordsOutputPath: path.join(distPath, '/records.json'),
    resolve: {
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
        },
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|components)/,
            use: [
                {
                    loader: 'babel-loader',
                },
            ],
        },
        {
            test: /\.html/,
            include: path.resolve(path.join(srcPath, 'components')),
            use: [
                {
                    loader: 'vue-html-loader',
                    options: {
                        interpolate: true,
                    },
                },
            ],
        },
        {
            test: /\.js$/,
            include: path.resolve(path.join(srcPath, 'components')),
            use: [
                {
                    loader: 'vue-hot-reload-loader',
                },
                {
                    loader: 'babel-loader',
                },
            ],
        },
        {
            enforce: 'post',
            test: /\.css/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                publicPath: '/',
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            }),
        },
        {
            enforce: 'post',
            test: /\.less$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                publicPath: '/',
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: true,
                            globalVars: {
                                'style-path': './src/styles',
                            },
                        },
                    },
                ],
            }),
        },
        {
            enforce: 'post',
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                publicPath: '/',
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: true,
                            localIdentName: '[name]_[local]_[hash:base64:5]',
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            globalVars: {
                                'style-path': './src/styles',
                            },
                        },
                    },
                ],
            }),
        },
        {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            exclude: /favicons\//,
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
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 5000,
                        mimetype: 'application/font-woff',
                        name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
                    },
                },
            ],
        },
        {
            test: /\.(eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
            },
        },
        {
            test: /\.svg$/,
            use: [
                {
                    loader: 'svg-sprite-loader',
                    options: {
                        runtimeCompat: false,
                    },
                },
            ],
            include: [
                path.join(srcPath, 'icons'),
            ],
        },
        {
            test: /favicon\.ico$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: 'favicon.ico',
                    },
                },
            ],
        },
        {
            test: /favicons\/.*\.(jpe?g|gif|png|ico)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                    },
                },
            ],
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
