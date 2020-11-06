import http from '@/utils/http'

const state = () => ({
  beers: [],
})

const getters = {
  getAllBeers(state) {
    return state.beers
  },
}

const actions = {
  async fetchBeers({ commit }, { pageNum }) {
    try {
      const { data } = await http().get(`/beers?page=${pageNum}&per_page=20`)
      commit('SET_BEERS', data)
    } catch (e) {
      console.error(e)
    }
  },
}

const mutations = {
  'SET_BEERS'(state, beers) {
    state.beers = beers
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
}
