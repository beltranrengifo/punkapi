import Vue from 'vue'
import Vuetify from 'vuetify'
import { mount } from '@vue/test-utils'
import PaSwitcher from '@/components/PaSwitcher'

Vue.use(Vuetify)

describe('Theme Switcher with icon', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(PaSwitcher, {
      propsData: {
        icon: 'mdi-theme-light-dark',
        useIcon: true,
      },
    })
  })
  it('Component should find v-btn component', () => {
    const c = wrapper.findComponent({ name: 'v-btn' })
    expect(c.exists()).toBe(true)
  })
  it('Component should emit custom event on cick', async () => {
    wrapper.findComponent({ name: 'v-btn' }).trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted()['handle-value']).toBeTruthy()
  })

  it('Component should render a mdi icon', () => {
    wrapper.findComponent({ name: 'v-icon' }).text('mdi-toggle-switch')
  })

  it('Component should render proper mdi icon', () => {
    wrapper.findComponent({ name: 'v-icon' }).text('mdi-theme-light-dark')
  })

  it('Component should render default mdi icon', () => {
    const wrapper = mount(PaSwitcher, { propsData: { icon: '', useIcon: true } })
    wrapper.findComponent({ name: 'v-icon' }).text('mdi-toggle-switch')
  })
})

describe('Theme Switcher with v-switch', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(PaSwitcher, {
      propsData: {
        label: 'My label'
      }
    })
  })

  it('Component should find v-switch component', () => {
    const c = wrapper.findComponent({ name: 'v-switch' })
    expect(c.exists()).toBe(true)
  })
})
