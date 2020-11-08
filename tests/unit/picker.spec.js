import Vue from 'vue'
import Vuetify from 'vuetify'
import { mount } from '@vue/test-utils'
import PaPicker from '@/components/PaPicker'

Vue.use(Vuetify)

describe('Switcher with icon', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(PaPicker, {
      propsData: {
        label: 'My label',
      },
    })
  })
  it('Component should render the label', () => {
    const c = wrapper.findComponent({ name: 'v-text-field' })
    expect(c.text()).toContain('My label')
  })
})
