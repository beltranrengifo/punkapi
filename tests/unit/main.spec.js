import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'

import { shallowMount, createLocalVue } from '@vue/test-utils'

import PaMain from '@/components/PaMain'

const localVue = createLocalVue()
Vue.use(Vuetify)
localVue.use(Vuex)

describe('App', () => {
  let actions
  let getters
  let store
  let wrapper

  beforeEach(() => {
    actions = { 'punkapi/fetchBeers': jest.fn() }
    getters = { 'punkapi/getBeers': jest.fn() }
    store = new Vuex.Store({
      state: {
        common: {
          DEFAULT_TITLE: 'PunkApi',
        },
      },
      actions,
      getters,
    })
    wrapper = shallowMount(PaMain, {
      localVue,
      store,
      computed: {
        beers() {
          return [{ id: 1 }, { id: 2 }]
        },
      },
    })
  })

  it('Main works and contains proper tag', () => {
    expect(wrapper.find('main')).toBeTruthy()
  })

  it('Main should match the snapshot', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('Main dispatches fetchBeers when instance is created', () => {
    expect(actions['punkapi/fetchBeers']).toHaveBeenCalled()
  })
})
