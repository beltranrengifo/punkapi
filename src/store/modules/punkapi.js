import http from '@/utils/http'

const state = () => ({
  beers: [],
  error: false,
  random: null,
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
  async fetchBeers({ commit }, payload) {
    const params = (payload && payload.params) || {
      page: 1,
      per_page: 20,
    }

    const loadMore = (payload && payload.loadMore) || false

    try {
      const { data } = await http().get('/beers', { params })
      commit('SET_BEERS', { data, loadMore })
    } catch (e) {
      commit('SET_ERROR', e)
      console.error(e)
    }
  },

  async fetchRandom({ commit }) {
    try {
      const { data } = await http().get('/beers/random')
      commit('SET_RANDOM', data[0])
      return data[0]
    } catch (e) {
      commit('SET_ERROR', e)
      console.error(e)
    }
  },
}

const mutations = {
  'SET_BEERS'(state, payload) {
    if (payload.loadMore) {
      const result = state.beers.concat(payload.data)
      state.beers = result
      return
    }

    state.beers = payload.data
  },

  'SET_RANDOM'(state, data) {
    state.random = data
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
