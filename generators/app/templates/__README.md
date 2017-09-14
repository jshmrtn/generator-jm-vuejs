# A VueJS Project

## Getting started

Clone the repo & run `yarn install` from the project root

<%_ if (props.bundlerType === 'webpack') { _%>
## Available commands

```shell
yarn start
```

Runs the Webpack module-bundler, starts watching for changes & launches the dev-server to [http://localhost:8080](http://localhost:8080).

---

```shell
yarn run build
```

Runs the webpack module-bundler with production-settings (compress etc.) and builds the project to the `/dist` directory.
<%_ } _%>
