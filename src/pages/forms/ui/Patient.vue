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
import { PatientFormState, isFormValid, LB, KG } from '../index.ts'
export default {
  name: 'AppPatient',

  setup() {
    const patientForm: PatientFormState = {
      name: 'John',
      weight: {
        value: 445,
        units: LB,
      },
    }
    const form = reactive({
      name: '',
      weight: {
        value: 0,
        units: KG,
      },
    })

    // const validState = validateForm(patientForm)

    const validatedForm = computed(() => form)
    const valid = computed(() => isFormValid(validatedForm))
    return {
      form,
      validatedForm,
      valid,
    }
  },
}
</script>

<style scoped></style>
