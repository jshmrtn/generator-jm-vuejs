#!/usr/bin/env node

/* eslint-disable no-console */
'use strict';

const
    utils = require('./utils'),
    config = require('../config'),
    isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    loaders: utils.cssLoaders({
        sourceMap: isProduction ?
            config.build.productionSourceMap :
            config.dev.cssSourceMap,
        extract: isProduction,
    }),
    transformToRequire: {
        video: 'src',
        source: 'src',
        img: 'src',
        image: 'xlink:href',
    },
};
