import type { ValidationResult } from "../index"
import type { Limits } from "../index"

const limits: Limits = {
    kg: { min: 30, max: 200 },
    lb: { min: 66, max: 440 },
}

const isRequired = (fieldValue: unknown, cb?: () => string): ValidationResult => {
    return {
        valid: !!fieldValue,
        message: cb ? cb() : 'Invalid field'
    }
}

const isValidLength = (fieldValue: number, unit: keyof Limits, cb?: () => string): ValidationResult => {
    const lengthObject = limits[unit]
    const max = lengthObject.max
    const min = lengthObject.min
    return {
        valid: fieldValue >= min && fieldValue <= max,
        ...(cb && { message: cb()} )
    }
}

export default {
    isValidLength,
    isRequired
}