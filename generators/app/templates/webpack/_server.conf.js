/* jshint node: true */
/* eslint-env node */

const CONTENT_BASE = 'dist/';

module.exports = {
    hot: true,
    inline: true,
    historyApiFallback: true,
    publicPath: '/',
    contentBase: CONTENT_BASE,
    watchOptions: {
        aggregateTimeout: 100,
        poll: 100,
    },
    overlay: {
        warnings: false,
        errors: true,
    },
    headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Allow-Credentials': 'true',
    },
};
