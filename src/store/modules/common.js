const state = () => ({
  DEFAULT_TITLE: 'PunkApi',
  showDrawer: false,
})

const getters = {
}

const actions = {
}

const mutations = {
  'HANDLE_DRAWER'(state) {
    state.showDrawer = !state.showDrawer
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
}
