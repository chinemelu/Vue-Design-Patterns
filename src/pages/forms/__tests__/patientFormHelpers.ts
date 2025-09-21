import {
  isRequired,
  validateMeasurement,
  isBetween,
  PatientFormValidation,
  isFormValid,
  patientForm,
  LB,
  KG,
  PatientFormState,
} from '../index.ts'

describe('required', () => {
  it('is invalid when undefined', () => {
    expect(isRequired(undefined)).toEqual({
      valid: false,
      message: 'Required',
    })
  })

  it('is invalid when empty string', () => {
    expect(isRequired('')).toEqual({
      valid: false,
      message: 'Required',
    })
  })
  it('returns a valid of true when input is valid', () => {
    expect(isRequired('Chinemelu Nwosu')).toEqual({
      valid: true,
    })
  })
})
describe('isBetween', () => {
  it('returns true when value is equal to min', () => {
    expect(isBetween(50, { min: 50, max: 100 })).toEqual({
      valid: true,
    })
  })
  it('returns true when value is between min/max', () => {
    expect(isBetween(65, { min: 50, max: 100 })).toEqual({
      valid: true,
    })
  })
  it('returns true when value is equal to max', () => {
    expect(isBetween(100, { min: 50, max: 100 })).toEqual({
      valid: true,
    })
  })
  it('returns false when value is less than min', () => {
    expect(isBetween(20, { min: 50, max: 100 })).toEqual({
      valid: false,
      message: 'Must be between 50 and 100',
    })
  })
  it('returns false when value is greater than max', () => {
    expect(isBetween(120, { min: 50, max: 100 })).toEqual({
      valid: false,
      message: 'Must be between 50 and 100',
    })
  })
})

describe('validateMeasurement', () => {
  it('returns invalid for undefined input', () => {
    const constraints = { min: 10, max: 30 }
    const actual = validateMeasurement(undefined, { constraints })

    expect(actual).toEqual({
      valid: false,
      message: 'Required',
    })
  })

  it('returns invalid when outside range', () => {
    const constraints = { min: 10, max: 30 }
    const actual = validateMeasurement(40, { constraints })

    expect(actual).toEqual({
      valid: false,
      message: 'Must be between 10 and 30',
    })
  })
})
describe('isFormValid', () => {
  it('returns true when mass and weight field are valid', () => {
    const form: PatientFormValidation = {
      name: { valid: true },
      weight: {
        valid: true,
      },
    }
    expect(isFormValid(form)).toBe(true)
  })
  it('returns false when any field is invalid', () => {
    const form: PatientFormValidation = {
      name: { valid: true },
      weight: {
        valid: false,
      },
    }
    expect(isFormValid(form)).toBe(false)
  })
})
describe('patientForm', () => {
  const validPatient: PatientFormState = {
    name: 'test patient',
    weight: { value: 100, units: KG },
  }

  const limits = {
    kg: { min: 30, max: 200 },
    lb: { min: 66, max: 440 },
  }
  it('is valid when form is filled out correctly', () => {
    const form = patientForm(validPatient, limits)
    expect(form.name).toEqual({ valid: true })
    expect(form.weight).toEqual({ valid: true })
  })
  it('is invalid when name is null', () => {
    const form = patientForm({ ...validPatient, name: '' }, limits)
    expect(form.name).toEqual({ valid: false, message: 'Required' })
  })
  it('validates weight in imperial', () => {
    const form = patientForm({ ...validPatient, weight: { value: 65, units: LB } }, limits)
    expect(form.weight).toEqual({ valid: false, message: 'Must be between 66 and 440' })
  })
  it('validates weight in metric', () => {
    const form = patientForm({ ...validPatient, weight: { value: 29, units: KG } }, limits)
    expect(form.weight).toEqual({ valid: false, message: 'Must be between 30 and 200' })
  })
})
