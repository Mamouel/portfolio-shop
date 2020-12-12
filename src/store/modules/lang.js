const initialState = {
  isLoading: false,
  lang: "en",
};

const getters = {
  getStateLoading: (state) => state.isLoading,
  getLang: (state) => state.lang,
};

const actions = {
  changeLang({ commit }, value) {
    commit("setLang", value);
  },
};

const mutations = {
  setStateLoading: (state, loading) => (state.isLoading = loading),
  setLang: (state, value) => (state.lang = value),
};

export const lang = {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
