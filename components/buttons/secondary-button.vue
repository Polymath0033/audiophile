<script setup lang="ts">
const { type = "button", href="/", appType="button", class: className,} = defineProps<{value: string; type?: "button" | "submit" | "reset";  href?: string; appType?: string; class?: string;
}>();
</script>
<template>
  <button   
    v-if="appType === 'button'"
    :type="type"
    :class="[
      'h-12 w-40 bg-transparent border border-black flex items-center justify-center py-[15px] text-[13px] !tracking-[1px] uppercase text-black font-bold hover:bg-black hover:text-white ',
      className,
    ]"
  >
    {{ value }}
  </button>
  <nuxt-link
    v-else
    :to="href"
    class="h-12 w-40 bg-transparent border border-black flex items-center justify-center py-[15px] text-[13px] !tracking-[1px] uppercase text-black font-bold hover:bg-black hover:text-white"
  >
    {{ value }}
  </nuxt-link>
</template>

<style scoped></style>
