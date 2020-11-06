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
    expect(wrapper.findComponent({ name: 'pa-grid-item' })).toBeTruthy()
  })

  it('Component should render a grid item component for each item in array', () => {
    const childs = wrapper.findAllComponents({ name: 'pa-grid-item' })
    expect(childs).toHaveLength(beers.length)
  })
  /* it('Component should emit custom event on cick', async () => {
    wrapper.findComponent({ name: 'v-btn' }).trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted()['handle-value']).toBeTruthy()
  })

  it('Component should render a mdi icon', () => {
    expect(wrapper.findComponent({ name: 'v-icon' })).toBeTruthy()
    wrapper.findComponent({ name: 'v-icon' }).text('mdi-toggle-switch')
  })

  it('Component should render proper mdi icon', () => {
    expect(wrapper.findComponent({ name: 'v-icon' })).toBeTruthy()
    wrapper.findComponent({ name: 'v-icon' }).text('mdi-theme-light-dark')
  }) */
})
