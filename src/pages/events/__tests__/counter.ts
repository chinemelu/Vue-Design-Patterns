import { shallowMount } from '@vue/test-utils'
import { Counter } from '../index.ts'

describe('Testing events with Counter Component', () => {
    it('emits the correct event', () => {
        const wrapper = shallowMount(Counter, {
            data() {
                return {
                    count: 0
                }
            }
        })
        wrapper.find('button[role="increment"]').trigger('click')
        wrapper.find('button[role="submit"]').trigger('click')
        expect(wrapper.emitted()).toHaveProperty('submit')
        expect(wrapper.emitted().submit).toHaveLength(1)
        expect(wrapper.emitted().submit[0]).toEqual([1])
    })
})