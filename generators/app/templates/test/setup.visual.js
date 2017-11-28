#!/usr/bin/env node

const {
  configureToMatchImageSnapshot
} = require('jest-image-snapshot');

const toMatchImageSnapshot = configureToMatchImageSnapshot({
  customSnapshotsDir: './__snapshots__/__image_snapshots__',
});

expect.extend({
  toMatchImageSnapshot
});
