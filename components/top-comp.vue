<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>
<template>
  <div
    class="relative top-[97px] flex uppercase text-white items-center justify-center h-[239px] bg-black text-h2"
  >
    <h2>{{ title }}</h2>
  </div>
  </template>