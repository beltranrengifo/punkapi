
import { shallowMount } from '@vue/test-utils'
import PaNoResults from '@/components/PaNoResults'

describe('PaNoResults component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(PaNoResults, {
      propsData: {
        text: 'No results',
        subtext: 'My subtext'
      },
    })
  })

  it('Component should find the title', () => {
    const title = wrapper.find('h2')
    expect(title.is('h2')).toBe(true)
  })

  it('Component should render the text prop', () => {
    const title = wrapper.find('h2')
    expect(title.text()).toContain('No results')
  })

  it('Component should render the subtext prop', () => {
    const p = wrapper.find('p')
    expect(p.text()).toContain('My subtext')
  })

  it('Component should match the snapshot', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
