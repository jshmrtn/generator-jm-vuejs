#!/usr/bin/env node

/* eslint-disable no-console */
'use strict';

require('./check-versions')();

const config = require('../config');

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'visual') {
  process.env.NODE_ENV = JSON.parse(config.test.env.NODE_ENV);
}

console.log(`> NODE_ENV is: ${process.env.NODE_ENV}`);

const
  opn = require('opn'),
  path = require('path'),
  express = require('express'),
  webpack = require('webpack'),
  webpackConfig = require('./webpack.test.conf');

// default port where test server listens for incoming traffic
const port = process.env.PORT || config.test.port;
// automatically open browser, if not set will be false
const autoOpenBrowser = !!config.test.autoOpenBrowser;

const app = express();
const compiler = webpack(webpackConfig);

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true,
});

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')());

// serve webpack bundle output
app.use(devMiddleware);

// serve pure static assets
const staticPath = path.posix.join(config.test.assetsPublicPath, config.test.assetsSubDirectory);

app.use(staticPath, express.static('./static'));

const uri = 'http://localhost:' + port;

let _resolve;
const readyPromise = new Promise((resolve) => {
  _resolve = resolve;
});

console.log('> Starting test server...');
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n');
  if (autoOpenBrowser) {
    opn(uri);
  }
  _resolve();
});

const server = app.listen(port);

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close();
  },
};
