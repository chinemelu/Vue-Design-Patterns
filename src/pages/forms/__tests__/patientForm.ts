import { patientFormValidation } from '../index'

describe('required', () => {
    it('is invalid when undefined', () => {
        patientFormValidation.required(undefined)
    })

    it('is invalid when empty string', () => {

    })
    it('returns a valid of true when input is valid', () => {

    })
})