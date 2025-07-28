import { patientFormValidation } from '../index.ts'
import { LB, KG } from "../constants.ts"


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
    //     expect(patientFormValidation.isValidLength(50, KG)).toEqual({
    //         valid: false,
    //         message: 'Field is required'
    //     })
    // })

    // it('returns an invalid message if unit is lb', () => {
    //      expect(patientFormValidation.isValidLength(100, LB)).toEqual({
    //         valid: false,
    //         message: 'Field is required'
    //     })
    // })
    it('returns an invalid message if unit in kg does not fall within the specified range', () => {
        expect(patientFormValidation.isValidLength(20, KG)).toEqual({
            valid: false
        })
        expect(patientFormValidation.isValidLength(201, KG)).toEqual({
            valid: false
        })
    })
    it('returns an invalid message if unit in lb does not fall within the specified range', () => {
         expect(patientFormValidation.isValidLength(65, LB)).toEqual({
            valid: false
        })
        expect(patientFormValidation.isValidLength(441, LB)).toEqual({
            valid: false
        })
    })
    it('returns a valid message if unit in lb falls within the specified range', () => {
        expect(patientFormValidation.isValidLength(66, LB)).toEqual({
            valid: true
        })
        expect(patientFormValidation.isValidLength(440, LB)).toEqual({
            valid: true
        })
        expect(patientFormValidation.isValidLength(150, LB)).toEqual({
            valid: true
        })
        expect(patientFormValidation.isValidLength(300, LB)).toEqual({
            valid: true
        })
    })
    it('returns a valid message if unit in kg falls within the specified range', () => {
        expect(patientFormValidation.isValidLength(30, KG)).toEqual({
            valid: true
        })
        expect(patientFormValidation.isValidLength(50, KG)).toEqual({
            valid: true
        })
        expect(patientFormValidation.isValidLength(200, KG)).toEqual({
            valid: true
        })
        expect(patientFormValidation.isValidLength(190, KG)).toEqual({
            valid: true
        })
    })
    it('returns a valid message if message callback is specified', () => {
        expect(patientFormValidation.isValidLength(30, KG, () => "Valid weight in kg")).toEqual({
            valid: true,
            message: "Valid weight in kg"
        })
        expect(patientFormValidation.isValidLength(300, LB, () => "Valid weight in lb")).toEqual({
            valid: true,
            message: "Valid weight in lb"             
        })
    })
})