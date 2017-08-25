/* jshint node: true */
/* eslint-env node */

'use strict';

const
    path = require('path'),
    autoprefixer = require('autoprefixer'),
    rootPath = path.join(__dirname, '../'),
    distPath = path.join(rootPath, 'dist'),
    srcPath = path.join(rootPath, 'src'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    <%_ if (props.serviceworker) { _%>
    ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin'),
    <%_ } _%>
    webpack = require('webpack');

module.exports = {
    context: rootPath,
    entry: {
        vendors: [
            'babel-polyfill',
            <%_ if (props.vuejsComponents.indexOf("routing") >= 0) { _%>
            'vue-router',
            <%_ } _%>
            <%_ if (props.vuejsComponents.indexOf("stateManagement") >= 0) { _%>
            'vuex',
            'vuex-persistedstate',
            <%_ } _%>
            <%_ if (props.vuejsComponents.indexOf("translations") >= 0) { _%>
            'vue-i18n',
            <%_ } _%>
            <%_ if (props.vuejsComponents.indexOf("httpClient") >= 0) { _%>
            'vue-resource',
            <%_ } _%>
            <%_ if (props.vuejsComponents.indexOf("graphqlClient") >= 0) { _%>
            'vue-apollo',
            'apollo-client',
            <%_ } _%>
            <%_ if (props.vuejsComponents.indexOf("dependencyInjection") >= 0) { _%>
            'vue-inject',
            <%_ } _%>
            'vue',
        ],
        app: [
            path.join(srcPath, 'main.js'),
            'modernizr',
        ],
    },
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
            modernizr$: path.resolve(rootPath, '.modernizrrc.json'),
        },
    },
    devtool: 'eval-source-map',
    output: {
        path: distPath,
        publicPath: '/',
        filename: '[name].[chunkhash].js',
        sourceMapFilename: '[name].[chunkhash].js.map',
        chunkFilename: '[name].[chunkhash].js',
        hotUpdateMainFilename: '[hash]/update.json',
        hotUpdateChunkFilename: '[hash]/js/[id].update.js',
    },
    recordsOutputPath: path.join(distPath, '/records.json'),
    module: {
        rules: [
            {
                test: /\.modernizrrc\.json$/,
                use: [
                    { loader: 'modernizr-loader' },
                    { loader: 'json-loader' },
                ],
            },
            {
                test: /\.html/,
                exclude: require.resolve(srcPath + '/index.html'),
                use: [
                    {
                        loader: 'vue-template-loader',
                        options: {
                            scoped: true,
                        },
                    },
                    {
                        loader: 'extract-loader',
                    },
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
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            env: {
                                test: {
                                    plugins: [
                                        'istanbul',
                                    ],
                                },
                            },
                            presets: [
                              [ 'env', {
                                  'targets': {
                                      'browsers': [
                                        'Chrome >= 52',
                                        'FireFox >= 44',
                                        'Safari >= 7',
                                        'Explorer 11',
                                        'last 4 Edge versions'
                                      ],
                                  },
                              }],
                            ],
                            plugins: [
                                'transform-runtime',
                                'transform-es2015-destructuring',
                                'transform-object-rest-spread',
                                'transform-object-assign',
                                'syntax-dynamic-import',
                            ],
                        },
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
                                plugins: function () {
                                    return [
                                        autoprefixer(),
                                    ];
                                },
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
                                plugins: function () {
                                    return [
                                        autoprefixer(),
                                    ];
                                },
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
                            },
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true,
                                plugins: function () {
                                    return [
                                        autoprefixer(),
                                    ];
                                },
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
                test: /\.(jpe?g|gif|png|ico)$/,
                exclude: /favicons\//,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            prefix: 'img/',
                            limit: 5000,
                        },
                    },
                ],
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            prefix: 'font/',
                            limit: 5000,
                            mimetype: 'application/font-woff',
                        },
                    },
                ],
            },
            {
                test: /\.(ttf|eot|svg)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
                exclude: [
                    path.join(srcPath, 'icons'),
                ],
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
            <%_ if (props.browserconfig) { _%>
            {
                test: /browserconfig\.xml$/,
                use: [
                    {
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
            <%_ } _%>
            <%_ if (props.manifest) { _%>
            {
                test: /manifest.json$/,
                use: [
                    {
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
            <%_ } _%>
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body',
            template: path.resolve(srcPath, 'index.html'),
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            children: true,
            async: true,
            minChunks: 3,
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime',
        }),
        <%_ if (props.serviceworker) { _%>
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
          <%_ } _%>
    ],
};
