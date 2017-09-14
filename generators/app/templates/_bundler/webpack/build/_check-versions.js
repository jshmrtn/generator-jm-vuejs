#!/usr/bin/env node

/* eslint-disable no-console */
'use strict';

const
    chalk = require('chalk'),
    semver = require('semver'),
    packageConfig = require('../package.json'),
    shell = require('shelljs');

function exec(cmd) {
    return require('child_process').execSync(cmd).toString().trim();
}

const versionRequirements = [{
    name: 'node',
    currentVersion: semver.clean(process.version),
    versionRequirement: packageConfig.engines.node,
}];

if (shell.which('npm')) {
    versionRequirements.push({
        name: 'npm',
        currentVersion: exec('npm --version'),
        versionRequirement: packageConfig.engines.npm,
    });
}

module.exports = function () {
    const warnings = [];

    for (let index = 0; index < versionRequirements.length; index++) {
        const mod = versionRequirements[index];

        if (!semver.satisfies(mod.currentVersion, mod.versionRequirement)) {
            warnings.push(mod.name + ': ' +
                chalk.red(mod.currentVersion) + ' should be ' +
                chalk.green(mod.versionRequirement)
            );
        }
    }

    if (warnings.length) {
        console.log('');
        console.log(chalk.yellow('To use this template, you must update following to modules:'));
        console.log();
        for (let index = 0; index < warnings.length; index++) {
            const warning = warnings[index];

            console.log('  ' + warning);
        }
        console.log();
        process.exit(1);
    }
};
