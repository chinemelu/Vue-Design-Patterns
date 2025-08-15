import type { PatientFormValidation, ValidationResult } from "../index.js"
import type { Limits } from "../index.js"

const isRequired = (fieldValue: unknown, cb?: () => string): ValidationResult => {
    return {
        valid: !!fieldValue,
        ...((cb && !fieldValue) && { message: cb() })
    }
}

const isValidLength = (fieldValue: number, unit: keyof Limits, limits: Limits, cb?: () => string): ValidationResult => {
    const lengthObject = limits[unit]
    const max = lengthObject.max
    const min = lengthObject.min
    return {
        valid: fieldValue >= min && fieldValue <= max,
        ...(cb  && { message: cb()} )
    }
}

const isValidMeasurement = (value: number, unit: keyof Limits, limits: Limits, cbRequired? : () => string, cbLength?: () => string): ValidationResult => {
    // check if it is exists

    const isMeasurementRequiredObject = isRequired(value, cbRequired)
    const isValidNumber = isMeasurementRequiredObject.valid

    if (isValidNumber) {
        return isValidLength(value, unit, limits, cbLength)
    }
    // if it exists, check if it is a valid length
    return isMeasurementRequiredObject
}

const isFormValid = (form: PatientFormValidation) => {
    return form.name.valid && form.weight.valid
}

const validateForm = () => {
    return true
}


export default {
    isValidLength,
    isRequired,
    isValidMeasurement,
    isFormValid,
    validateForm
}