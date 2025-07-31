import { patientFormValidation } from '../index.ts'
import { LB, KG } from "../index.ts"


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
    it('returns an invalid message if unit in kg does not fall within the specified range', () => {
        const limits = {
            kg: { min: 50, max: 100 },
            lb: { min: 200, max: 440 },
        }

        expect(patientFormValidation.isValidLength(20, KG, limits)).toEqual({
            valid: false
        })
        expect(patientFormValidation.isValidLength(101, KG, limits)).toEqual({
            valid: false
        })
    })
    it('returns an invalid message if unit in lb does not fall within the specified range', () => {
        const limits = {
            kg: { min: 50, max: 100 },
            lb: { min: 200, max: 440 },
        }

        expect(patientFormValidation.isValidLength(65, LB, limits)).toEqual({
            valid: false
        })
        expect(patientFormValidation.isValidLength(441, LB, limits)).toEqual({
            valid: false
        })
    })
    it('returns a valid message if unit in lb falls within the specified range', () => {
        const limits = {
            kg: { min: 50, max: 100 },
            lb: { min: 200, max: 440 },
        }

        expect(patientFormValidation.isValidLength(200, LB, limits)).toEqual({
            valid: true
        })
        expect(patientFormValidation.isValidLength(440, LB, limits)).toEqual({
            valid: true
        })
        expect(patientFormValidation.isValidLength(250, LB, limits)).toEqual({
            valid: true
        })
        expect(patientFormValidation.isValidLength(300, LB, limits)).toEqual({
            valid: true
        })
    })
    it('returns a valid message if unit in kg falls within the specified range', () => {
        const limits = {
            kg: { min: 50, max: 100 },
            lb: { min: 200, max: 440 },
        }
        expect(patientFormValidation.isValidLength(50, KG, limits)).toEqual({
            valid: true
        })
        expect(patientFormValidation.isValidLength(100, KG, limits)).toEqual({
            valid: true
        })
        expect(patientFormValidation.isValidLength(80, KG, limits)).toEqual({
            valid: true
        })
        expect(patientFormValidation.isValidLength(90, KG, limits)).toEqual({
            valid: true
        })
    })
    it('returns a valid message if message callback is specified', () => {
        const limits = {
            kg: { min: 30, max: 200 },
            lb: { min: 66, max: 440 },
        }
        const actual = patientFormValidation.isValidLength(30, KG, limits, () => "Valid weight in lb")
        expect(actual).toEqual({
            valid: true,
            message: "Valid weight in kg"
        })
    })
})

describe('measurement', () => {
    it('returns invalid if undefined value is used', () => {
        const limits = {
            kg: { min: 10, max: 50 },
            lb: { min: 150, max: 200 },
        }
        const actualKg = patientFormValidation.isValidMeasurement(undefined, KG, limits)
        const actualLb = patientFormValidation.isValidMeasurement(undefined, LB, limits)

        expect(actualKg).toEqual({
            valid: false,
            message: 'Measurement does not exist'
        })
        expect(actualLb).toEqual({
            valid: false,
            message: 'Measurement does not exist'
        })
    })

    it('returns invalid if the measurement is not a valid length', () => {
        const limits = {
            kg: { min: 10, max: 50 },
            lb: { min: 150, max: 200 },
        }

        const actualKg = patientFormValidation.isValidMeasurement(5, KG, limits)
        const actualLb = patientFormValidation.isValidMeasurement(145, LB, limits)

        expect(actualKg).toEqual({
            valid: false,
            message: 'Invalid measurement in kg'
        })
        expect(actualLb).toEqual({
            valid: false,
            message: 'Invalid measurement in lb'
        })
    })

    it('returns valid if the measurement exists and is valid', () => {
        const limits = {
            kg: { min: 50, max: 200 },
            lb: { min: 500, max: 2000 },
        }

        const actualKg = patientFormValidation.isValidMeasurement(30, KG, limits)
        const actualLb = patientFormValidation.isValidMeasurement(200, LB, limits)  

        expect(actualKg).toEqual({
            valid: true,
            message: 'Valid measurement in kg'
        })
        expect(actualLb).toEqual({
            valid: true,
            message: 'Valid measurement in kg'
        })
    })
})