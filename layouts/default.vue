<script setup lang="ts">
import AppFooter from '~/components/app-footer.vue';
import AppHeader from '~/components/headers/app-header.vue';
</script>

<template>
<AppHeader/>
  
    <slot />
    <AppFooter />
</template>

<style scoped></style>
