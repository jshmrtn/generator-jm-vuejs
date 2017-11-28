/* global navigator */

// Import Vue
import Vue from 'vue';

// Declare Dependencies Array
const coreDependencies = {};

<%_ if (props.vuejsComponents.indexOf("routing") >= 0) { _%>
// Routing
import router from 'Core/routing/index';
Object.assign(coreDependencies, {
  router,
});
<%_ } _%>

<%_ if (props.vuejsComponents.indexOf("stateManagement") >= 0) { _%>
// State Management
import state from 'Core/state/index';
Object.assign(coreDependencies, {
  state,
});
<%_ } _%>

<%_ if (props.vuejsComponents.indexOf('translations') >= 0) { _%>
// Translations
import i18n from 'Core/translations/index';
Object.assign(coreDependencies, {
  i18n,
});
<%_ } _%>

<%_ if (props.vuejsComponents.indexOf("httpClient") >= 0) { _%>
// HTTP Client
import 'Core/http/index';
<%_ } _%>

<%_ if (props.vuejsComponents.indexOf("dependencyInjection") >= 0) { _%>
// Dependency Injection
import 'Core/dependency-injection/index';
<%_ } _%>

<%_ if (props.vuejsComponents.indexOf("graphqlClient") >= 0) { _%>
// GraphQL Client
import {
  apolloProvider,
} from 'Core/graphql/index';
Object.assign(coreDependencies, {
  apolloProvider,
});
<%_ } _%>

<%_ if (props.serviceworker) { _%>
// serviceworker
import registerEvents from 'serviceworker-webpack-plugin/lib/browser/registerEvents';
import serviceworkerRuntime from 'serviceworker-webpack-plugin/lib/runtime';

if ('serviceWorker' in navigator &&
  (window.location.protocol === 'https:' ||
    window.location.hostname === 'localhost') &&
  // eslint-disable-next-line
  process.env.NODE_ENV !== 'development') {

  const registration = serviceworkerRuntime.register();

  registerEvents(registration, {
    onInstalled: () => {
      // eslint-disable-next-line
      console.log('onInstalled');
    },
    onUpdateReady: () => {
      // eslint-disable-next-line
      console.log('onUpdateReady');
    },

    onUpdating: () => {
      // eslint-disable-next-line
      console.log('onUpdating');
    },
    onUpdateFailed: () => {
      // eslint-disable-next-line
      console.log('onUpdateFailed');
    },
    onUpdated: () => {
      // eslint-disable-next-line
      console.log('onUpdated');
    },
  });

} else {
  // eslint-disable-next-line
  console.log('serviceWorker not enabled');
}
<%_ } _%>

<%_ if (props.errorTracking) { _%>
// Error Tracking
import 'Core/error-tracking/index';
<%_ } _%>

// Import Root Component
import appComponent from 'Components/app/app';

// Set Configuration
Vue.config.productionTip = false;

// Initialize Vue Application
new Vue({
  ...coreDependencies,
  el: 'app',
  components: {
    'app': appComponent,
  },
});
