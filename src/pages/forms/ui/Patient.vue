<template>
    <div>

    </div>
</template>

<script setup lang="ts">
    // import type { ValidationResult } from '../index';
    import { LB } from '../constants';
    import { PatientFormState } from '../index.ts';
    import { patientFormValidation } from '../index.ts'

    const patientForm: PatientFormState = {
        name: 'John',
        weight: {
            value: 445,
            units: LB
        }
    }

    const validState= patientFormValidation.validateForm()
    // Return value should be:
    // {
        // name: { valid: true }
        // weight: {
        // valid: false,
        // message: Must be between 66 and 440
    //  }
    // }
 
</script>

<script lang="ts">
    export default {
        name: 'AppPatient'
    }
</script>

<style scoped>

</style>