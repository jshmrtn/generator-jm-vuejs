#!/usr/bin/env node

const {
  configureToMatchImageSnapshot
} = require('jest-image-snapshot');

const toMatchImageSnapshot = configureToMatchImageSnapshot({
  customSnapshotsDir: './__snapshots__/__image_snapshots__',
  failureThreshold: '0.01',
  failureThresholdType: 'percent',
});

expect.extend({
  toMatchImageSnapshot
});
