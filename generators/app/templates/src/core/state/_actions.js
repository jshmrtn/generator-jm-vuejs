export const
    CLEAR_ALL_DATA = ({ commit }) => {

        commit('RESET_META');
        commit('RESET_LOCALSTORAGE');

        return Promise.resolve();

    };
