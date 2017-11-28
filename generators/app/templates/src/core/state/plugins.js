import createPersistedState from 'vuex-persistedstate';
import {
  STORAGE_KEY,
} from 'Core/state/state';

export default [
  createPersistedState({
    key: STORAGE_KEY,
    paths: [],
  }),
];
