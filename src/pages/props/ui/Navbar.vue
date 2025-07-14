<template>
    <button v-if="authenticated">Logout</button>
    <button v-if="!authenticated">Login</button>
</template>

<script lang="ts">
  export default {
    name: 'nav-bar',
  }
</script>

<script lang="ts" setup>
import { defineProps } from 'vue';
    defineProps({
        authenticated: {
            type: Boolean,
            default: false
        }
    })
</script>

<style lang="scss" scoped>

</style>