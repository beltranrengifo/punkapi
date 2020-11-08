import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'

import { shallowMount, createLocalVue } from '@vue/test-utils'

import PaMain from '@/components/PaMain'

const localVue = createLocalVue()
Vue.use(Vuetify)
localVue.use(Vuex)

describe('Main component', () => {
  let actions
  let getters
  let store
  let wrapper

  beforeEach(() => {
    actions = { 'punkapi/fetchBeers': jest.fn() }
    getters = {
      'punkapi/getBeers': jest.fn(),
      'punkapi/getError': jest.fn(),
   }
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
        beers: {
          get() {
            return [{ id: 1 }, { id: 2 }]
          },
          set(val) {
            return val
          }
        },
      },
    })
  })

  it('Main works and contains proper tag', () => {
    const main = wrapper.find('main')
    expect(main.exists()).toBe(true)
  })

  it('Main should match the snapshot', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('Main dispatches fetchBeers when instance is created', () => {
    expect(actions['punkapi/fetchBeers']).toHaveBeenCalled()
  })

  it('Main should render no-results component if no beers in array', () => {
    const wrapper = shallowMount(PaMain, {
      localVue,
      store,
      computed: {
        beers: {
          get() {
            return []
          },
          set(val) {
            return val
          }
        },
      },
    })

    const c = wrapper.findComponent({name: 'pa-no-results'})
    expect(c.exists()).toBe(true)
  })
  it('Main should render error component if error', () => {
    const wrapper = shallowMount(PaMain, {
      localVue,
      store,
      computed: {
        beers: {
          get() {
            return []
          },
          set(val) {
            return val
          }
        },
        error: {
          get() {
            return new Error('Hi!')
          },
          set(val) {
            return val
          }
        },
      },
    })

    const c = wrapper.findComponent({name: 'pa-error'})
    expect(c.exists()).toBe(true)
  })
})
