<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    class?: string;
    value: string;
    appType?: "link" | "button";
    href?: string;
  }>(),
  {
    type: "button",
    disabled: false,
    appType: "button",
    href: "",
    class: "",
    value: "",
  }
);
</script>
<template>
  <button v-if="props.appType === 'button'"
    :type="props.type"
    :disabled="props.disabled"
    :class="[
      'h-12 w-40 bg-primary flex items-center justify-center py-[15px] text-[13px] !tracking-[1px] uppercase text-white font-bold hover:bg-light-primary ',
      props.class,
    ]"
  >
    {{ props.value }}
  </button>
  <nuxt-link v-else :to="props.href" class="h-12 w-40 bg-primary flex items-center justify-center py-[15px] text-[13px] !tracking-[1px] uppercase text-white font-bold hover:bg-light-primary ">
    {{ props.value }}
  </nuxt-link>
</template>

<style scoped></style>
