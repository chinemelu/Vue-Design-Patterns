import type { ValidationResult } from "../index.js"
import type { Limits } from "../index.js"

const isRequired = (fieldValue: unknown, cb?: () => string): ValidationResult => {
    return {
        valid: !!fieldValue,
        message: cb ? cb() : 'Invalid field'
    }
}

const isValidLength = (fieldValue: number, unit: keyof Limits, limits: Limits, cb?: () => string): ValidationResult => {
    const lengthObject = limits[unit]
    const max = lengthObject.max
    const min = lengthObject.min
    return {
        valid: fieldValue >= min && fieldValue <= max,
        ...(cb && { message: cb()} )
    }
}

const isValidMeasurement = (value: number, unit: keyof Limits, limits: Limits): ValidationResult => {
    // check if it is exists
    // if it exists, check if it is a valid length

}

export default {
    isValidLength,
    isRequired,
    isValidMeasurement
}