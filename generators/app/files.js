module.exports.simpleFiles = {
    '_.babelrc': '.babelrc',
    '_.csscomb.json': '.csscomb.json',
    '_.editorconfig': '.editorconfig',
    '_.eslintignore': '.eslintignore',
    '_.eslintrc.json': '.eslintrc.json',
    '_.gitattributes': '.gitattributes',
    '_.gitignore': '.gitignore',
    '_.htmlhintrc': '.htmlhintrc',
    '_.modernizrrc.json': '.modernizrrc.json',
    '_postcss.config.js': 'postcss.config.js',
    '_jsconfig.json': 'jsconfig.json',
    'static/_.gitkeep': 'static/.gitkeep',
    'src/assets/_.gitkeep': 'src/assets/.gitkeep',
    'src/helpers/_.gitkeep': 'src/helpers/.gitkeep',
    'src/mixins/_.gitkeep': 'src/mixins/.gitkeep',
    'src/plugins/_.gitkeep': 'src/plugins/.gitkeep',
    'src/styles/_fonts.scss': 'src/styles/fonts.scss',
    'src/styles/_variables.scss': 'src/styles/variables.scss',
    'src/_global.scss': 'src/global.scss',
};
module.exports.tplFiles = {
    '__.nvmrc': '.nvmrc',
    '__README.md': 'README.md',
    'src/__client.config.dist.json': 'src/client.config.dist.json',
    'bin/__setup-client-config': 'bin/setup-client-config',
    'src/__main.js': 'src/main.js',
    'src/__index.html': 'src/index.html',
    'src/components/app/**': 'src/components/app',
};
module.exports.ciFiles = {
    'travis': {
        '_ci/__.travis.yml': '.travis.yml',
    },
    'gitlab': {
        '_ci/__.gitlab-ci.yml': '.gitlab-ci.yml',
    },
    'circle': {
        '_ci/__circle.yml': 'circle.yml',
    },
};
module.exports.serviceworkerFiles = {
    'src/__sw.js': 'src/sw.js',
};
module.exports.bundlerFiles = {
    'webpack': {
        '_bundler/webpack/config/_dev.env.js': 'config/dev.env.js',
        '_bundler/webpack/config/_index.js': 'config/index.js',
        '_bundler/webpack/config/_prod.env.js': 'config/prod.env.js',
        '_bundler/webpack/config/_test.env.js': 'config/test.env.js',
        '_bundler/webpack/build/_build.js': 'build/build.js',
        '_bundler/webpack/build/_check-versions.js': 'build/check-versions.js',
        '_bundler/webpack/build/_dev-client.js': 'build/dev-client.js',
        '_bundler/webpack/build/_dev-server.js': 'build/dev-server.js',
        '_bundler/webpack/build/_utils.js': 'build/utils.js',
        '_bundler/webpack/build/_vue-loader.conf.js': 'build/vue-loader.conf.js',
        '_bundler/webpack/build/_webpack.base.conf.js': 'build/webpack.base.conf.js',
        '_bundler/webpack/build/_webpack.dev.conf.js': 'build/webpack.dev.conf.js',
        '_bundler/webpack/build/_webpack.prod.conf.js': 'build/webpack.prod.conf.js',
        '_bundler/webpack/build/_webpack.test.conf.js': 'build/webpack.test.conf.js',
    },
};
module.exports.browserconfigFiles = {
    'src/_browserconfig.xml': 'src/browserconfig.xml',
};
module.exports.manifestFiles = {
    'src/_manifest.json': 'src/manifest.json',
};
module.exports.routingFiles = {
    'src/core/routing/_index.js': 'src/core/routing/index.js',
    'src/core/routing/_routes.js': 'src/core/routing/routes.js',
    'src/components/index/**': 'src/components/index',
    'src/components/not-found/**': 'src/components/not-found',
};
module.exports.stateManagementFiles = {
    'src/core/state/__state.js': 'src/core/state/state.js',
    'src/core/state/_actions.js': 'src/core/state/actions.js',
    'src/core/state/_getters.js': 'src/core/state/getters.js',
    'src/core/state/_index.js': 'src/core/state/index.js',
    'src/core/state/_mutations.js': 'src/core/state/mutations.js',
    'src/core/state/_plugins.js': 'src/core/state/plugins.js',
};
module.exports.translationsFiles = {
    'src/core/translations/_en_US.json': 'src/core/translations/en_US.json',
    'src/core/translations/_index.js': 'src/core/translations/index.js',
};
module.exports.httpClientFiles = {
    'src/core/http/_index.js': 'src/core/http/index.js',
};
module.exports.graphqlClientFiles = {
    'src/core/graphql/_index.js': 'src/core/graphql/index.js',
};
module.exports.dependencyInjectionFiles = {
    'src/core/dependency-injection/_index.js': 'src/core/dependency-injection/index.js',
};
