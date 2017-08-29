const
  assert = require('yeoman-assert'),
  semverRegex = require('semver-regex');

module.exports.assertDependency = function assertDependency(name) {
  const expected = {
    dependencies: {},
  };
  expected.dependencies[name] = semverRegex();

  assert.jsonFileContent('package.json', expected);
}

module.exports.assertDevDependency = function assertDevDependency(name) {
  const expected = {
    devDependencies: {},
  };
  expected.dependencies[name] = semverRegex();

  assert.jsonFileContent('package.json', expected);
}
