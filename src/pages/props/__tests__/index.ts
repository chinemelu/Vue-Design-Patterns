import { shallowMount } from '@vue/test-utils'
import Props from '../Prop.vue'

describe('Foo', () => {
  it('renders a div', () => {
    const wrapper = shallowMount(Props)
    expect(wrapper.text()).toContain('BPPM!')
  })
})