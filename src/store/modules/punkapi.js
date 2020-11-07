import http from '@/utils/http'

const state = () => ({
  beers: [],
  pageNum: 1,
  perPage: 20,
  error: false,
})

const getters = {
  getBeers(state) {
    return state.beers
  },
  getError(state) {
    return state.error
  },
}

const actions = {
  async fetchBeers({ commit, state }, { params } = {
    page: state.pageNum,
    per_page: state.perPage,
  }) {
    try {
      const { data } = await http().get('/beers', { params })
      commit('SET_BEERS', data)
    } catch (e) {
      commit('SET_ERROR', e)
      console.error(e)
    }
  },
}

const mutations = {
  'SET_BEERS'(state, beers) {
    state.beers = beers
  },
  'SET_ERROR'(state, error) {
    state.error = error
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
}
