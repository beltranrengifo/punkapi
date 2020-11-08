import Vue from 'vue'
import Vuetify from 'vuetify'
import { mount } from '@vue/test-utils'
import PaSearch from '@/components/PaSearch'

Vue.use(Vuetify)

describe('Search component, default mode', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(PaSearch, {
      propsData: {
        label: 'Input label',
        hint: 'Input hint',
      },
    })
  })
  it('Component should find v-text-field component', () => {
    const c = wrapper.findComponent({ name: 'v-text-field' })
    expect(c.exists()).toBe(true)
  })

  it('Component should render label prop', () => {
    const c = wrapper.findComponent({ name: 'v-text-field' })
    expect(c.text()).toContain('Input label')
  })

  it('Component should emit if value length > 3', async () => {
    const c = wrapper.findComponent({ name: 'v-text-field' })
    c.find('input').setValue('My value')
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted()['handleSearch']).toBeTruthy()
  })

  it('Component should not emit if value is < 3', async () => {
    const c = wrapper.findComponent({ name: 'v-text-field' })
    c.find('input').setValue('My')
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted()['handleSearch']).toBeFalsy()
  })

  it('Component should emit if value is falsy', async () => {
    const c = wrapper.findComponent({ name: 'v-text-field' })
    c.find('input').setValue('')
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted()['resetSearch']).toBeTruthy()
  })

})
