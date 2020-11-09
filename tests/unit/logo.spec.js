
import { shallowMount } from '@vue/test-utils'
import PaLogo from '@/components/PaLogo'

describe('PaLogo component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(PaLogo)
  })

  it('Component should match the snapshot', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
