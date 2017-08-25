# SK&T Quiz Frontend

## Getting started

Clone the repo & run `yarn install` from the project root

## Available commands

```shell
npm start
```

Runs the Webpack module-bundler, starts watching for changes & launches the BrowserSync server to [http://localhost:3000](http://localhost:3000).

**Note!** Webpack handles all the reloading stuff while BrowserSync just proxies the default webpack-port, giving the possibility to connect to dev-server from multiple devices.

---

```shell
npm test
```

Runs all tests. This includes linting of JavaScript files an all unit and integration tests.
See [Testing](#Testing) for more information on tests.

---

```shell
npm run build
```

Runs the webpack module-bundler with production-settings (compress etc.) and builds the project to the `/dist` directory.

---

## Testing

At the moment there unit and integration tests. E2E tests will be implemented in the future.

### Unit Tests

Right now the setup implements unit testing via [Karma](http://karma-runner.github.io/), [Mocha](https://mochajs.org/) and [Chai](http://chaijs.com/).

You can run the tests with the following command:

```shell
npm run test:unit
```

If you want to have a watcher running for the unit tests run the following:

```shell
npm run test:unit:dev
```

### Integration Tests

Right now the setup implements integration testing via [Karma](http://karma-runner.github.io/), [Mocha](https://mochajs.org/) and [Chai](http://chaijs.com/).

You can run the tests with the following command:

```shell
npm run test:integration
```

If you want to have a watcher running for the integration tests run the following:

```shell
npm run test:integration:dev
```
