import Vue from 'vue';
import Vuex from 'vuex';
import {
  state,
} from 'Core/state/state';
import * as getters from 'Core/state/getters';
import * as actions from 'Core/state/actions';
import * as mutations from 'Core/state/mutations';
import plugins from 'Core/state/plugins';

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  plugins,
});

export default store;
