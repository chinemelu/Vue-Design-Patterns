import { patientFormValidation } from '../index.ts'

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
describe('length', () => {
    // it('returns an invalid message if unit is kg', () => {
    //     expect(patientFormValidation.isValidLength(50, 'kg')).toEqual({
    //         valid: false,
    //         message: 'Field is required'
    //     })
    // })

    // it('returns an invalid message if unit is lb', () => {
    //      expect(patientFormValidation.isValidLength(100, 'lb')).toEqual({
    //         valid: false,
    //         message: 'Field is required'
    //     })
    // })
    it('returns an invalid message if unit in kg does not fall within the specified range', () => {
        expect(patientFormValidation.isValidLength(20, 'kg')).toEqual({
            valid: false
        })
        expect(patientFormValidation.isValidLength(201, 'kg')).toEqual({
            valid: false
        })
    })
    it('returns an invalid message if unit in lb does not fall within the specified range', () => {
         expect(patientFormValidation.isValidLength(65, 'lb')).toEqual({
            valid: false
        })
        expect(patientFormValidation.isValidLength(441, 'lb')).toEqual({
            valid: false
        })
    })
    it('returns a valid message if unit in lb falls within the specified range', () => {
        expect(patientFormValidation.isValidLength(66, 'lb')).toEqual({
            valid: true
        })
        expect(patientFormValidation.isValidLength(440, 'lb')).toEqual({
            valid: true
        })
        expect(patientFormValidation.isValidLength(150, 'lb')).toEqual({
            valid: true
        })
        expect(patientFormValidation.isValidLength(300, 'lb')).toEqual({
            valid: true
        })
    })
    it('returns a valid message if unit in kg falls within the specified range', () => {
        expect(patientFormValidation.isValidLength(30, 'kg')).toEqual({
            valid: true
        })
        expect(patientFormValidation.isValidLength(50, 'kg')).toEqual({
            valid: true
        })
        expect(patientFormValidation.isValidLength(200, 'kg')).toEqual({
            valid: true
        })
        expect(patientFormValidation.isValidLength(190, 'kg')).toEqual({
            valid: true
        })
    })
    it('returns a valid message if message callback is specified', () => {
        expect(patientFormValidation.isValidLength(30, 'kg', () => "Valid weight in kg")).toEqual({
            valid: true,
            message: "Valid weight in kg"
        })
        expect(patientFormValidation.isValidLength(500, 'lb', () => "Valid weight in lb")).toEqual({
            valid: true,
            message: "Valid weight in lb"             
        })
    })
})