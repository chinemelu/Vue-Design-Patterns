import { shallowMount } from '@vue/test-utils'
import PatientComponent from '../ui/Patient.vue'
import { KG, LB } from '../constants.ts'

describe('FormValidation', () => {
  const wrapper = shallowMount(PatientComponent)
  // if you fill the input fields correctly, the form should be valid

  it('fills out the form correctly', async () => {
    wrapper.find('input[id="name"]').setValue('John Doe')
    wrapper.find('input[id="weight"]').setValue(70)
    await wrapper.vm.$nextTick()
    // the error div closest to the name input field
    expect(wrapper.findAll('div.error').length).toBe(0)
  })
  it('shows error for invalid name', async () => {
    wrapper.find('input[id="name"]').setValue('')
    wrapper.find('select').setValue(LB)
    wrapper.find('input[id="weight"]').setValue(66)
    await wrapper.vm.$nextTick()
    expect(wrapper.findAll('div.error').length).toBe(1)
  })
  it('shows error for invalid weight in kg', async () => {
    wrapper.find('input[id="name"]').setValue('John Doe')
    wrapper.find('select').setValue(KG)
    wrapper.find('input[id="weight"]').setValue(420)
    await wrapper.vm.$nextTick()
    expect(wrapper.findAll('div.error').length).toBe(1)
  })
  it('shows error for invalid weight in lb', async () => {
    wrapper.find('input[id="name"]').setValue('John Doe')
    wrapper.find('select').setValue(LB)
    wrapper.find('input[id="weight"]').setValue(30)
    await wrapper.vm.$nextTick()
    expect(wrapper.findAll('div.error').length).toBe(1)
  })
  it('shows error for invalid name and invalid weight', async () => {
    wrapper.find('input[id="name"]').setValue('')
    wrapper.find('input[id="weight"]').setValue('')
    await wrapper.vm.$nextTick()
    expect(wrapper.findAll('div.error').length).toBe(2)
  })
  it('disables button when form is invalid', async () => {
    wrapper.find('input[id="name"]').setValue('John Doe')
    wrapper.find('select').setValue(LB)
    wrapper.find('input[id="weight"]').setValue(66)
    await wrapper.vm.$nextTick()
    expect(wrapper.find('button[disabled]').exists()).toBe(false)
  })
})
