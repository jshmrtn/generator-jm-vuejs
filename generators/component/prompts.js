module.exports = [{
    type: 'input',
    name: 'componentName',
    message: 'Your new components name',
    default: this.componentName || 'component',
    store: true,
  },
  {
    type: 'checkbox',
    name: 'testingTypes',
    message: 'Please select how you would like to test your component.',
    choices: [{
        name: 'Unit',
        value: 'unit',
      },
      {
        name: 'Integration',
        value: 'integration',
      },
      {
        name: 'Visual',
        value: 'visual',
      },
    ],
    default: [],
    store: true,
  },
];
