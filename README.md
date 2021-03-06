# generator-jm-vuejs

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] ![Greenkeeper badge][greenkeeper-image] [![Code Climate][codeclimate-image]][codeclimate-url] [![Code Climate][codeclimate-coverage-image]][codeclimate-coverage-url] [![Known Vulnerabilities][snyk-image]][snyk-url]

> Generator for generating VueJS applications.

## General

It is important to note that this generator is heavily opinionated. It is intended to be used as a starting point for bigger Vue SPA projects.

## Installation

First, install [Yeoman](http://yeoman.io) and generator-jm-vuejs using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-jm-vuejs
```

Then generate your new project:

```bash
yo @jshmrtn/jm-vuejs
```

## Yeoman

Feel free to [learn more about Yeoman](http://yeoman.io/).

## Vue Application

This generator will help you bootstrap a vue application pretty quickly. You will have a few choices for the core boilerplate. These choices will let you decide on which additional features (besides the ones in the Vue core) you would like to use. In the following section you'll get a short summary of the functionality and the libs we use to enhance our applications.

```bash
yo @jshmrtn/jm-vuejs:app
```

### Core Features

The following core features are built into the generators root boilerplate.

<details>
  <summary>Dependency Injection</summary>

  This can be used to ease working with dependencies the right way. Also, this makes testing components much easier.

  ##### Libs

  * [vue-inject](https://www.npmjs.com/package/vue-inject)

  ##### Docs / Articles

  * [vue-inject Docs](https://github.com/jpex-js/vue-inject/blob/master/README.md)
</details>

<details>
  <summary>Error Tracking</summary>

  Error tracking with raven-js will allow you to catch most uncatched errors in a production grade frontend application.

  ##### Libs

  * [raven-js](https://www.npmjs.com/package/raven-js)
  * [raven-js/plugins/vue](https://github.com/getsentry/raven-js/blob/master/plugins/vue.js)

  ##### Docs / Articles

  * [raven-js with Vue](https://github.com/getsentry/raven-js/blob/master/docs/integrations/vue.rst)

</details>

<details>
  <summary>GraphQL Client</summary>

  If you intend to connect your Vue application to a GraphQL backend the apollo client and vue-apollo do a great job.

  ##### Libs

  * [apollo-client](https://www.npmjs.com/package/apollo-client)
  * [vue-apollo](https://www.npmjs.com/package/vue-apollo)

  ##### Docs / Articles

  * [vue-apollo Docs](https://github.com/Akryum/vue-apollo)
  * [vue-apollo example app](https://github.com/Akryum/vue-apollo-example)
  * ["Use Apollo in your VueJS app" - 27.09.2016](https://dev-blog.apollodata.com/use-apollo-in-your-vuejs-app-89812429d8b2)

</details>

<details>
  <summary>HTTP Client</summary>

  For communicating with regular (and not so regular) REST APIs vue-resource is a great tool.

  ##### Libs

  * [vue-resource](https://www.npmjs.com/package/vue-resource)

  ##### Docs / Articles

  * [vue-resource Docs](https://github.com/pagekit/vue-resource)

</details>

<details>
  <summary>Routing</summary>

  All routing needs can be fulfilled with vue-router. This is especially true because it is developed by the core team in "feature parity" together with Vue itself.

  ##### Libs

  * [vue-router](https://www.npmjs.com/package/vue-router)

  ##### Docs / Articles

  * [vue-router Docs](https://router.vuejs.org/en/)

</details>

<details>
  <summary>State</summary>

  Handling the state will quickly become a vital part of your Vue application if you intend to scale it. Vuex is (like the vue-router) developed by the core team.

  ##### Libs

  * [vuex](https://www.npmjs.com/package/vuex)

  ##### Docs / Articles

  * [vuex Docs](https://vuex.vuejs.org/en/)

</details>

<details>
  <summary>Translations / i18n</summary>

  If you consider a lightweight i18n implementation in your applications to be a "basic feature", vue-i18n can be used without hassle.

  ##### Libs

  * [vue-i18n](https://www.npmjs.com/package/vue-i18n)

  ##### Docs / Articles

  * [vue-i18n Docs](https://kazupon.github.io/vue-i18n/)

</details>

## Vue Component

This generator will help you bootstrap a vue component pretty quickly.

```bash
yo @jshmrtn/jm-vuejs:component
```

## License

MIT © [JOSHMARTIN GmbH](https://joshmartin.ch)

[snyk-image]: https://snyk.io/test/github/jshmrtn/generator-jm-vuejs/badge.svg
[snyk-url]: https://snyk.io/test/github/jshmrtn/generator-jm-vuejs
[npm-image]: https://badge.fury.io/js/generator-jm-vuejs.svg
[npm-url]: https://npmjs.org/package/@jshmrtn/generator-jm-vuejs
[travis-image]: https://travis-ci.org/jshmrtn/generator-jm-vuejs.svg?branch=master
[travis-url]: https://travis-ci.org/jshmrtn/generator-jm-vuejs
[daviddm-image]: https://david-dm.org/jshmrtn/generator-jm-vuejs.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/jshmrtn/generator-jm-vuejs
[greenkeeper-image]: https://badges.greenkeeper.io/jshmrtn/generator-jm-vuejs.svg
[codeclimate-image]: https://api.codeclimate.com/v1/badges/98242e3a7ef1dffa476a/maintainability
[codeclimate-url]: https://codeclimate.com/github/jshmrtn/generator-jm-vuejs/maintainability
[codeclimate-coverage-image]: https://api.codeclimate.com/v1/badges/98242e3a7ef1dffa476a/test_coverage
[codeclimate-coverage-url]: https://codeclimate.com/github/jshmrtn/generator-jm-vuejs/test_coverage
