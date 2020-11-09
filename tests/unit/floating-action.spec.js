import Vue from 'vue'
import Vuetify from 'vuetify'
import { shallowMount } from '@vue/test-utils'
import PaFloatingAction from '@/components/PaFloatingAction'

Vue.use(Vuetify)

describe('Floating action button', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(PaFloatingAction, {
      propsData: {
        text: 'My text',
        loading: false,
      }
    })
  })

  it('Component contains proper tag', () => {
    const btn = wrapper.findComponent({name: 'v-btn' })
    expect(btn.exists()).toBe(true)
  })

  it('Component contains proper text', () => {
    const btn = wrapper.findComponent({name: 'v-btn' })
    expect(btn.text()).toBe('My text')
  })

  it('Component should emit on click', async () => {
    wrapper.trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted()['handle-click']).toBeTruthy()
  })
})
