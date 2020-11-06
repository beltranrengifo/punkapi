import Vue from 'vue'
import Vuetify from 'vuetify'
import { shallowMount } from '@vue/test-utils'
import PaThemeSwitcher from '@/components/PaThemeSwitcher'

Vue.use(Vuetify)

describe('Theme Switcher', () => {
  it('Component should find v-btn component', () => {
    const wrapper = shallowMount(PaThemeSwitcher)
    expect(wrapper.findComponent({ name: 'v-btn' })).toBeTruthy()
  })
})
