module.exports = [
  {
    type: 'input',
    name: 'appName',
    message: 'Your projects name',
    default: this.appname,
    store: true,
  },
  {
    type: 'input',
    name: 'appDescription',
    message: 'A short description of your project',
    default: 'A VueJS application.',
    store: true,
  },
  {
    type: 'list',
    name: 'nodeVersion',
    message: 'Which version of Node would you like to use?',
    choices: [
      '7',
      '6',
      '5'
    ],
    default: 0,
    store: true,
  },
  {
    type: 'list',
    name: 'bundlerType',
    message: 'Which bundler would you like to use?',
    choices: [
      'webpack',
      'none'
    ],
    default: 0,
    store: true,
  },
  {
    type: 'list',
    name: 'ciType',
    message: 'Which CI would you like to use?',
    choices: [
      'travis',
      'gitlab',
      'circle',
      'none'
    ],
    default: 0,
    store: true,
  },
  {
    type: 'confirm',
    name: 'serviceworker',
    message: 'Would you like to use a serviceworker?',
    default: false,
    store: true,
  },
  {
    type: 'confirm',
    name: 'browserconfig',
    message: 'Would you like to use a browserconfig.xml?',
    default: true,
    store: true,
  },
  {
    type: 'confirm',
    name: 'manifest',
    message: 'Would you like to use a web app manifest (manifest.json)?',
    default: true,
    store: true,
  },
  {
    type: 'checkbox',
    name: 'vuejsComponents',
    message: 'Please select the necessary parts for the VueJS setup.',
    choices: [
      {
        name: 'Routing (vue-router)',
        value: 'routing'
      },
      {
        name: 'State Management (vuex)',
        value: 'stateManagement'
      },
      {
        name: 'Translations (vue-i18n)',
        value: 'translations'
      },
      {
        name: 'HTTP Client (vue-resource)',
        value: 'httpClient'
      },
      {
        name: 'GraphQL Client (vue-apollo)',
        value: 'graphqlClient'
      },
      {
        name: 'Dependency Injection (vue-inject)',
        value: 'dependencyInjection'
      },
    ],
    default: [],
    store: true,
  },
]
