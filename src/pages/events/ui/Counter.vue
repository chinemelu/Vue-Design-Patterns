<template>
    <button role="increment" @click="count += 1" />
    <button role="submit" @click="$emit('submit' , count)" />
</template>

<script lang="ts">
    export default {
        name: "AppCounter",
        data() {
            return {
                count: 0
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