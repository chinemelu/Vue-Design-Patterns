<template>
  <h3>Patient Data</h3>
  <form>
    <div class="field">
      <div v-if="!validatedForm.name.valid" class="error">
        {{ validatedForm.name.message }}
      </div>
      <label for="name">Name</label>
      <input id="name" name="name" v-model="form.name" />
    </div>
    <div class="field">
      <div v-if="!validatedForm.weight.valid" class="error">
        {{ validatedForm.weight.message }}
      </div>
      <label for="weight">Weight</label>
      <input id="weight" name="weight" v-model.number="form.weight.value" />
      <select name="weightUnits" v-model="form.weight.units">
        <option value="kg">kg</option>
        <option value="lb">lb</option>
      </select>
    </div>
    <div class="field">
      <button :disabled="!valid">Submit</button>
    </div>
  </form>
  <pre>
Patient Data
{{ form }}
</pre
  >
  <br />
  <pre>
Form State
{{ validatedForm }}
</pre
  >
</template>

<script lang="ts">
import { reactive, computed } from 'vue'
import { isFormValid, KG, Limits, patientForm } from '../index.ts'
import type { PatientFormState } from '../index.ts'
export default {
  name: 'AppPatient',

  setup() {
    const form: PatientFormState = reactive({
      name: '',
      weight: {
        value: 0,
        units: KG,
      },
    })

    const limits: Limits = {
      kg: {
        min: 30,
        max: 200,
      },
      lb: {
        min: 66,
        max: 440,
      },
    }

    const validatedForm = computed(() => patientForm(form, limits))
    const valid = computed(() => isFormValid(validatedForm.value))

    return {
      form,
      validatedForm,
      valid,
    }
  },
}
</script>

<style scoped></style>
