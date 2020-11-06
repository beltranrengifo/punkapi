import http from '@/utils/http'

const state = () => ({
  beers: [],
  pageNum: 1,
})

const getters = {
  getBeers(state) {
    return state.beers
  },
}

const actions = {
  async fetchBeers({ commit, state }) {
    try {
      const { data } = await http().get(`/beers?page=${state.pageNum}&per_page=20`)
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
