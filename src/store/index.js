import Vue from 'vue'
import Vuex from 'vuex'
import punkapi from './modules/punkapi'
import common from './modules/common'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    common,
    punkapi,
  },
})
