<script setup lang="ts">
import FooterComp from "~/components/footer-comp.vue";
import AppHeader from "~/components/headers/app-header.vue";
console.log("checkout layout");
</script>

<template>
  <AppHeader />

  <slot />
  <FooterComp />
</template>

<style scoped></style>
