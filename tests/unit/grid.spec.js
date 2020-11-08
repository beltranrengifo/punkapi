import Vue from 'vue'
import Vuetify from 'vuetify'
import { shallowMount } from '@vue/test-utils'
import beers from './mocks/beers'
import './mocks/matchMedia.mock'
import PaGrid from '@/components/PaGrid'

Vue.use(Vuetify)

describe('Grid component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(PaGrid, {
      propsData: {
        items: beers,
      },
    })
  })
  it('Component should render grid item component', () => {
    const c = wrapper.findComponent({ name: 'pa-grid-item' })
    expect(c.exists()).toBe(true)
  })

  it('Component should render a grid item component for each item in array', () => {
    const childs = wrapper.findAllComponents({ name: 'pa-grid-item' })
    expect(childs).toHaveLength(beers.length)
  })

  it('Component should render load more btn', () => {
    const c = wrapper.findComponent({ name: 'v-btn' })
    expect(c.exists()).toBe(true)
  })
  it('Component should render the proper width', () => {
    wrapper.setData({ isBigDesktop: true })
    expect(wrapper.vm.width).toBe(1280)
  })
  it('Component should render the proper columns number', () => {
    wrapper.setData({ isBigDesktop: true })
    expect(wrapper.vm.columns).toBe(4)
  })
})
