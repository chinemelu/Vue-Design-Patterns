import { patientFormValidation } from '../index'

describe('required', () => {
    it('is invalid when undefined', () => {
        expect(patientFormValidation.isRequired(undefined, () => 'Field is required')).toEqual({
            valid: false,
            message: 'Field is required'
        })
    })

    it('is invalid when empty string', () => {
         expect(patientFormValidation.isRequired('', () => 'Field is required')).toEqual({
            valid: false,
            message: 'Field is required'
        })
    })
    it('returns a valid of true when input is valid', () => {
         expect(patientFormValidation.isRequired('Chinemelu Nwosu', () => 'Field is required')).toEqual({
            valid: true,
            message: 'Field is required'
        })
    })
})