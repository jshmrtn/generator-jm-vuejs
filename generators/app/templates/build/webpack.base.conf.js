#!/usr/bin/env node

/* eslint-disable no-console */
'use strict';

const
  path = require('path'),
  utils = require('./utils'),
  config = require('../config'),
  vueLoaderConfig = require('./vue-loader.conf'),
  <%_ if (props.serviceworker) { _%>
  ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin'),
  <%_ } _%>
  rootPath = path.resolve(__dirname, '../'),
  distPath = path.join(rootPath, 'dist'),
  srcPath = path.join(rootPath, 'src');

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
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      Root: rootPath,
      Src: srcPath,
      Assets: path.join(srcPath, 'assets/'),
      Components: path.join(srcPath, 'components/'),
      Helpers: path.join(srcPath, 'helpers/'),
      Mixins: path.join(srcPath, 'mixins/'),
      Plugins: path.join(srcPath, 'plugins/'),
      Styles: path.join(srcPath, 'styles/'),
      Core: path.join(srcPath, 'core/'),
      Services: path.join(srcPath, 'services/'),
      'modernizr$': path.join(rootPath, '.modernizrrc.json'),
    },
    modules: [
      utils.cwd('node_modules'),
      utils.cwd('src'),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [path.resolve(rootPath, 'src'), path.resolve(rootPath, 'test')],
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
        test: /\.js$/,
        loader: 'babel-loader',
        include: /(vue-mdc-adapter|@material)/,
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
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
        use: [
          {
            loader: 'modernizr-loader',
          },
          {
            loader: 'json-loader',
          },
        ],
      },
      {
        test: /favicon\.ico$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'favicon.ico',
            }
          }
        ]
      },
      {
        test: /favicons\/.*\.(jpe?g|gif|png|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            }
          }
        ]
      },
      <%_ if (props.browserconfig) { _%>
      {
        test: /browserconfig\.xml$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'browserconfig.xml'
            }
          },
          {
            loader: 'web-app-browserconfig-loader'
          }
        ]
      },
      <%_ } _%>
      <%_ if (props.manifest) { _%>
      {
        test: /manifest.json$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'manifest.json'
            }
          },
          {
            loader: 'web-app-manifest-loader'
          }
        ]
      }
      <%_ } _%>
    ]
  },
  plugins: [
    <%_ if (props.serviceworker) { _%>
    new ServiceWorkerWebpackPlugin({
      entry: path.resolve(srcPath, 'sw.js'),
      excludes: ['**/.*', '**/*.map', '*.html']
    })
    <%_ } _%>
  ]
};
