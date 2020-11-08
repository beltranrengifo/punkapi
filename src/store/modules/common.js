const state = () => ({
  DEFAULT_TITLE: 'PunkApi',
  modalContent: null,
})

const getters = {
  getModalContent(state) {
    return state.modalContent
  },
}

const actions = {
  setModalContent({ commit }, payload) {
    commit('SET_MODAL_CONTENT', payload)
  },
}

const mutations = {
  'HANDLE_DRAWER'(state) {
    state.showDrawer = !state.showDrawer
  },
  'SET_MODAL_CONTENT'(state, content) {
    state.modalContent = content
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
}
