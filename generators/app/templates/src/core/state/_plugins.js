import createPersistedState from 'vuex-persistedstate';
import {
    STORAGE_KEY,
} from 'core/state/state';

export default [
    createPersistedState({
        key: STORAGE_KEY,
        paths: [],
    }),
];
