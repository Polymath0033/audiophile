<script setup lang="ts">
import AppHeader from "./app-header.vue";
const props = defineProps<{ title: string }>();
console.log(props.title);
</script>
<template>
  <AppHeader />
  <div class="flex items-center justify-center h-[239px] bg-black text-h2 " >
    <h2>{{ props.title }}</h2>
  </div>
</template>

<style scoped></style>
