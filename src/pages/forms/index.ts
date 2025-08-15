export type { ValidationResult } from './ui/ValidationResult.ts'
export type { Limits } from './ui/Limits.ts'
export { LB, KG } from './constants.ts'

import patientFormValidation from './lib/validateForm.ts'
export { patientFormValidation }

export type { PatientFormState } from './ui/PatientFormState.ts'
export type { PatientFormValidation } from './ui/PatientFormValidation.ts'
