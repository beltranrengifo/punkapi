import { shallowMount } from '@vue/test-utils'
import PaTitle from '@/components/PaTitle'

describe('Titlet', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(PaTitle, {
      propsData: {
        text: 'My title',
        tag: 'h1',
        upper: true,
        useLine: true,
      },
    })
  })

  it('Title should render proper tag', () => {
    const h1 = wrapper.find('h1')
    expect(h1.exists()).toBe(true)
  })

  it('Title should render proper text', () => {
    expect(wrapper.text()).toBe('My title')
  })

  it('Title should render proper text', () => {
    expect(wrapper.text()).toBe('My title')
  })

  it('Title should render proper css classes', () => {
    expect(wrapper.classes()).toContain('pa-title--upper')
    expect(wrapper.classes()).toContain('pa-title--underline')
  })
})
