import type { PatientFormValidation, ValidationResult, PatientFormState, Constraints, Limits } from '../index.ts'

export const isRequired = (value): ValidationResult => {
  if (!value) {
    return {
      valid: false,
      message: 'Required',
    }
  }
  return {
    valid: true,
  }
}

export const isBetween = (value, { min, max }) => {
  if (value < min || value > max) {
    return {
      valid: false,
      message: `Must be between ${min} and ${max}`,
    }
  }
  return {
    valid: true,
  }
}

export const validateMeasurement = (value: number, { constraints }: { constraints: Constraints }): ValidationResult => {
  // check if it is exists

  const result = isRequired(value)

  if (!result.valid) {
    return result
  }
  return isBetween(value, constraints)
}

export const isFormValid = (form: PatientFormValidation) => {
  return form.name.valid && form.weight.valid
}

export const patientForm = (patient: PatientFormState, limits: Limits) => {
  const name = isRequired(patient.name)
  const weight = validateMeasurement(patient.weight.value, {
    constraints: limits[patient.weight.units],
  })
  return {
    name,
    weight,
  }
}
