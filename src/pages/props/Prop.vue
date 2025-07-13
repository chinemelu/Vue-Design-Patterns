<template>
    <div :class="variant">Message</div>
</template>

<script setup lang="ts">
import validateVariant from './lib/util/validateVariant'

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
            validator: validateVariant,
            default: 'success'
        }
    })

   
</script>

<style scoped>

</style>