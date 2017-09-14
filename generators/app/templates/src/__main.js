/* global navigator */

// Import Vue
import Vue from 'vue';

// Declare Dependencies Array
const coreDependencies = {};

// Routing
<%_ if (props.vuejsComponents.indexOf("routing") >= 0) { _%>
import router from './core/routing/index';
Object.assign(coreDependencies, {
    router,
});
<%_ } _%>

// State Management
<%_ if (props.vuejsComponents.indexOf("stateManagement") >= 0) { _%>
import state from './core/state/index';
Object.assign(coreDependencies, {
    state,
});
<%_ } _%>

// Translations
<%_ if (props.vuejsComponents.indexOf('translations') >= 0) { _%>
import i18n from './core/translations/index';
Object.assign(coreDependencies, {
    i18n,
});
<%_ } _%>

// HTTP Client
<%_ if (props.vuejsComponents.indexOf("httpClient") >= 0) { _%>
import './core/http/index';
<%_ } _%>

// Dependency Injection
<%_ if (props.vuejsComponents.indexOf("dependencyInjection") >= 0) { _%>
import './core/dependency-injection/index';
<%_ } _%>

// GraphQL Client
<%_ if (props.vuejsComponents.indexOf("graphqlClient") >= 0) { _%>
import {
    apolloProvider,
} from './core/graphql/index';
Object.assign(coreDependencies, {
    apolloProvider,
});
<%_ } _%>

// serviceworker
<%_ if (props.serviceworker) { _%>
import runtime from 'serviceworker-webpack-plugin/lib/runtime';
if ('serviceWorker' in navigator &&
    (window.location.protocol === 'https:' || window.location.hostname === 'localhost') &&
    process.env.NODE_ENV !== 'development') {
    runtime.register();
}
<%_ } _%>

// Error Tracking
<%_ if (props.errorTracking) { _%>
import './core/error-tracking/index';
<%_ } _%>

// Import Root Component
import appComponent from 'components/app/app';

// Global styles
import './global.scss';

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
