export const
  CLEAR_ALL_DATA = ({
    commit,
  }) => {

    commit('RESET_LOCALSTORAGE');

    return Promise.resolve();

  };
