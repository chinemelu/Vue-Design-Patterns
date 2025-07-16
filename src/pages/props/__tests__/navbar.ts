import { shallowMount } from '@vue/test-utils'
import { Navbar } from '../index.ts'

describe('Navbar Component when authenticated props not added', () => {
  it('renders correct text when there is no authenticated prop', () => {
    const wrapper = shallowMount(Navbar)
    expect(wrapper.text()).toBe('Login')
  })
  it('renders correct text when authenticated prop is set to true', () => {
    const wrapper = shallowMount(Navbar, {
      props: {
        authenticated: true
      }
    })
    expect(wrapper.text()).toBe('Logout')
  })
  it('renders correct text when authenticated prop is set to false', () => {
    const wrapper = shallowMount(Navbar, {
      props: {
        authenticated: false
      }
    })
    expect(wrapper.text()).toBe('Login')
  })
})
