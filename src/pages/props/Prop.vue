<template>
    <div :class="variant">
        <h1>BPPM!</h1>
    </div>
</template>

<script setup lang="ts">

    // enum Variant {
    //     success = 'success',
    //     warning = 'warning',
    //     error = 'error'
    // }

    // using a type alias can also work like an enum
    // type Variant = 'success' | 'warning' | 'error'
    // can be 'success', 'warning' or 'error'
    // defineProps<{
    //     variant: {
    //         type: Variant,

    //     }
    // }>()
    defineProps({
        variant: {
            type: String,
            validator: (value: string) => ['success', 'warning', 'error'].includes(value) 
        }
    })

   
</script>

<style scoped>

</style>