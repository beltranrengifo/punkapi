
import { shallowMount } from '@vue/test-utils'
import PaError from '@/components/PaError'

describe('Error component', () => {
  let wrapper
  const error = new Error('Not funny')

  beforeEach(() => {
    wrapper = shallowMount(PaError, {
      propsData: {
        error,
      },
    })
  })

  it('Component should find the title', () => {
    expect(wrapper.find('h2')).toBeTruthy()
  })

  it('Component should render the error', () => {
    expect(wrapper.find('h2').text(error.toString())).toBeTruthy()
  })

  it('Component should match the snapshot', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
