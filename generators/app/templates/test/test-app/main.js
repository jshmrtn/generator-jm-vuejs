/* global navigator */

// Import Vue
import Vue from 'vue';

// Import Root Component
import appComponent from './components/app';

// Set Configuration
Vue.config.productionTip = false;

// Initialize Vue Application
new Vue({
  el: 'app',
  components: {
    'app': appComponent,
  },
});
