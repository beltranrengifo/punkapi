import Vue from 'vue'
import Vuetify from 'vuetify'
import { mount } from '@vue/test-utils'
import PaSwitcher from '@/components/PaSwitcher'

Vue.use(Vuetify)

describe('Theme Switcher', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(PaSwitcher, {
      propsData: {
        icon: 'mdi-theme-light-dark',
      },
    })
  })
  it('Component should find v-btn component', () => {
    expect(wrapper.findComponent({ name: 'v-btn' })).toBeTruthy()
  })
  it('Component should emit custom event on cick', async () => {
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
  })

  it('Component should render default mdi icon', () => {
    const wrapper = mount(PaSwitcher, { propsData: { icon: '' } })
    expect(wrapper.findComponent({ name: 'v-icon' })).toBeTruthy()
    wrapper.findComponent({ name: 'v-icon' }).text('mdi-toggle-switch')
  })
})
