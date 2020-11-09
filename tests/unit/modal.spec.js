import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import PaModalBase from '@/components/PaModalBase'

const localVue = createLocalVue()
localVue.use(Vuex)
Vue.use(Vuetify)

describe('Modal base component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(PaModalBase, {
      computed: {
        hasContent() { return true },
        content() { return [ 'Hi there' ] },
      },
    })
  })

  it('Modal should render proper tag in v-model is true', async () => {
    const dialog = wrapper.findComponent({ name: 'v-dialog' })
    expect(dialog.exists()).toBe(true)
  })

  it('Modal should not render proper tag in v-model is false', async () => {
    const wrapper = shallowMount(PaModalBase, {
      computed: {
        hasContent() { return false },
        content() { return [ 'Hi there' ] },
      },
    })
    const dialog = wrapper.findComponent({ name: 'v-dialog' })
    expect(dialog.exists()).toBe(false)
  })
})
