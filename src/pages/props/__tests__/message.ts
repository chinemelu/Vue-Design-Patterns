import { shallowMount } from '@vue/test-utils'
import { Message } from '../index.ts'
import validateVariant from '../lib/util/validateVariant.ts'

describe('Message Component', () => {
  it('renders a text', () => {
    const wrapper = shallowMount(Message)
    expect(wrapper.html()).toContain('<div')
    expect(wrapper.text()).toContain('Message')
  })
  it(`renders a class given a 'variant' prop`, () => {
    const wrapper = shallowMount(Message, {
      props: {
        variant: 'success',
      },
    })
    expect(wrapper.find('.success').exists()).toBe(true)
  })
  it(`validates valid variant prop`, async () => {
    const wrapper = shallowMount(Message, {
        props: {
          variant: 'success'
        }
    })
    const validProps = ['success', 'warning', 'error']
    // forEach is not good to use for asynchronous events as it won't wait for the async
    // operation to finish
    for (const variant of validProps) {
        await wrapper.setProps({ variant })
        expect(wrapper.find(`.${variant}`).exists()).toBe(true)
    }
  })
  it(`throws error for invalid variant prop`, () => {
    expect(() => validateVariant('invalid') ).toThrow()
  })
})
