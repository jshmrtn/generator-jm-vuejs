module.exports.simpleFiles = {
  '.editorconfig': '.editorconfig',
  '.eslintignore': '.eslintignore',
  '.eslintrc.json': '.eslintrc.json',
  'jsconfig.json': 'jsconfig.json',
  '_.csscomb.json': '.csscomb.json',
  '_.gitattributes': '.gitattributes',
  '_.gitignore': '.gitignore',
  '_.htmlhintrc': '.htmlhintrc',
  '_.modernizrrc.json': '.modernizrrc.json',
  '_README.md': 'README.md',
  'bin/_dev-server': 'bin/dev-server',
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
  'src/__client.config.dist.json': 'src/client.config.dist.json',
  'bin/__setup-client-config': 'bin/setup-client-config',
  'src/__main.js': 'src/main.js',
  'src/__index.html': 'src/index.html',
  'src/components/app/**': 'src/components/app',
};
module.exports.ciFiles = {
  'travis': {
    'ci/__.travis.yml': '.travis.yml',
  },
  'gitlab': {
    'ci/__.gitlab-ci.yml': '.gitlab-ci.yml',
  },
  'circle': {
    'ci/__circle.yml': 'circle.yml',
  }
};
module.exports.serviceworkerFiles = {
  'src/__sw.js': 'src/sw.js',
};
module.exports.bundlerFiles = {
  'webpack': {
    'webpack/_base.js': 'webpack/base.js',
    'webpack/_dev.js': 'webpack/dev.js',
    'webpack/_prod.js': 'webpack/prod.js',
    'webpack/_server.conf.js': 'webpack/server.conf.js',
    'webpack/_server.js': 'webpack/server.js',
  }
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
  'src/core/state/_actions.js': 'src/core/state/actions.js',
  'src/core/state/_getters.js': 'src/core/state/getters.js',
  'src/core/state/_index.js': 'src/core/state/index.js',
  'src/core/state/_mutations.js': 'src/core/state/mutations.js',
  'src/core/state/_plugins.js': 'src/core/state/plugins.js',
  'src/core/state/_state.js': 'src/core/state/state.js',
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
