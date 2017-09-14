// Import Vue
import Vue from 'vue';
import VueResource from 'vue-resource';
import {
    apiRoot,
} from 'src/client.config.json';

Vue.use(VueResource);
Vue.http.options.root = apiRoot;
