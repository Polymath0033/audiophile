<script setup lang="ts">
defineEmits<{ (e: "close"): void }>();
</script>
<template>
  <Teleport to="#teleports">
    <div
      class="fixed top-0 left-0 w-full h-screen bg-black opacity-40 z-[1000]"
      v-on:click="$emit('close')"
    ></div>
    <dialog
      open
      class="fixed top-28 right-0 h-fit rounded-lg bg-white z-[1200] w-[377px] p-8 border mr-[165px] "
    >
      Hello
    </dialog>
  </Teleport>
</template>

<style scoped></style>
