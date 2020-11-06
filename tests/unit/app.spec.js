import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'

import { shallowMount, createLocalVue } from '@vue/test-utils'

import App from '@/App'

const localVue = createLocalVue()
Vue.use(Vuetify)
localVue.use(Vuex)

describe('App', () => {
  let store
  let wrapper

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        common: {
          DEFAULT_TITLE: 'PunkApi',
        },
      },
    })
    wrapper = shallowMount(App, { localVue, store })
  })

  it('App works and is mounting Vuetify components', () => {
    expect(wrapper.findComponent({ name: 'v-app' })).toBeTruthy()
  })

  it('App should match the snapshot', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
