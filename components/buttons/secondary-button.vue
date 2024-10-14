<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    class?: string;
    value: string;
  }>(),
  {
    type: "button",
    disabled: false,
    class: "",
    value: "",
  }
);
</script>
<template>
  <button
    :type="props.type"
    :class="[
      'h-12 w-40 bg-transparent border border-black flex items-center justify-center py-[15px] text-[13px] !tracking-[1px] uppercase text-black font-bold hover:bg-black hover:text-white ',
      props.class,
    ]"
  >
    {{ props.value }}
  </button>
</template>

<style scoped></style>
