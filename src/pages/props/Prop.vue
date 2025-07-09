<template>
    <h1>Hello World! {{ boat }}</h1>
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue'

    const boat = ref(0)

    onMounted(() => {
        setInterval(() => {
            boat.value += 1
        }, 1000)
    })
</script>

<style scoped>

</style>