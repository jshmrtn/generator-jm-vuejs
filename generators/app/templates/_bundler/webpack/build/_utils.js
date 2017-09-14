#!/usr/bin/env node

/* eslint-disable no-console */
'use strict';

const
    path = require('path'),
    config = require('../config');

exports.assetsPath = function (_path) {
    const assetsSubDirectory = process.env.NODE_ENV === 'production' ?
        config.build.assetsSubDirectory :
        config.dev.assetsSubDirectory;

    return path.posix.join(assetsSubDirectory, _path);
};
