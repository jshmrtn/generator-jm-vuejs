'use strict';

const
    baseConfig = require('./base'),
    _ = require('lodash'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    webpack = require('webpack'),
    WebpackCleanupPlugin = require('webpack-cleanup-plugin');

baseConfig.resolve.alias.vue$ = 'vue/dist/vue.min.js';

baseConfig.plugins.push(new webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production'),
        VUE_ENV: JSON.stringify(process.env.VUE_ENV || 'client'),
    },
}));

baseConfig.plugins.push(new WebpackCleanupPlugin());

baseConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        compress: {
            warnings: false,
        },
        sourceMap: true,
    })
);

baseConfig.plugins.push(
    new ExtractTextPlugin({
        filename: '[hash].css',
        allChunks: true,
        disable: false,
    })
);

module.exports = _.merge({}, baseConfig, {
    devtool: 'source-map',
});
