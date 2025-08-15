export interface PatientFormValidation {
    name: {
        valid: boolean
    },
    weight: {
        valid: boolean,
        message?: string
    }
}