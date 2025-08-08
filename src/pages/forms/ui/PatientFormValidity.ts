import { ValidationResult } from "../index.ts"

export default interface PatientFormValidity {
    name: ValidationResult
    weight: ValidationResult
}