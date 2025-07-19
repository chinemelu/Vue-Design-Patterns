<template>
    <button role="increment" @click="increment" />
    <button role="submit" @click="submit" />
</template>

<script lang="ts">
    import { submitValidator } from '../lib/submitValidator'

    export default {
        name: "AppCounter",
        // emits: ['submit'],
        emits: {
            // submit: (count: number) => {
            //     // another way of declaring emits
            //     // if the validation fails, there will be no emission
            //     // If the validator returns false, the event will not be emitted.
            //     return typeof count !== 'string' && !isNaN(count)
            // }
            submit: submitValidator
        },
        data() {
            return {
                count: 0
            }
        },
        methods: {
            increment() {
                this.count += 1
            },
            submit() {
                this.$emit('submit' , this.count)
            }
        }
    }
</script>

<!-- <script setup lang="ts">
    import { ref } from 'vue'
    
    const count = ref(0)
</script> -->

<style scoped>

</style>