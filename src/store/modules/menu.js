const initialState = {
  isLoading: false,
  menuOpen: false,
  menuSelected: null
};

const getters = {
  getStateLoading: (state) => state.isLoading,
  getMenuOpen: (state) => state.menuOpen,
  getMenuSelected: (state) => state.menuSelected,
};

const actions = {
  toggleMenu({ commit }, payload) {
    commit("setMenu", payload);
  },
};

const mutations = {
  setStateLoading: (state, loading) =>
    (state.isLoading = loading),
  setMenu: (state, payload) => {
    state.menuOpen = payload.value;
    state.menuSelected = payload.index;
  },
};

export const menu = {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
