<template>
    <div :class="variant">
        <h1>BPPM!</h1>
    </div>
</template>

<script setup lang="ts">

    enum Variant {
        success = 'success',
        warning = 'warning',
        error = 'error'
    }
    // can be 'success', 'warning' or 'error'
    defineProps<{
        variant: {
            type: Variant,

        }
    }>()

   
</script>

<style scoped>

</style>