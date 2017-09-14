import Vue from 'vue';
import Vuex from 'vuex';
import {
    state,
} from 'core/state/state';
import * as getters from 'core/state/getters';
import * as actions from 'core/state/actions';
import * as mutations from 'core/state/mutations';
import plugins from 'core/state/plugins';

Vue.use(Vuex);

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    plugins,
});

export default store;
