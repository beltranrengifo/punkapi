import http from '@/utils/http'

const state = () => ({
  beers: [],
  pageNum: 1,
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
  async fetchBeers({ commit, state }) {
    try {
      const params = {
        page: state.pageNum,
        per_page: 20,
      }
      const { data } = await http().get('/beers', { params })
      commit('SET_BEERS', data)
    } catch (e) {
      console.error(e)
      commit('SET_ERROR', e)
    }
  },

  async fetchBeersByName({ commit }, query) {
    try {
      const params = {
        beer_name: query.replace(/\s/, '_', 'g'),
      }
      const { data } = await http().get('/beers', { params })
      commit('SET_BEERS', data)
    } catch (e) {
      console.error(e)
      commit('SET_ERROR', e)
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
