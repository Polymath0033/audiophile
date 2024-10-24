<script setup lang="ts">
import type { InputHTMLAttributes } from 'vue';
const props = defineProps<{ id: string; type?: InputHTMLAttributes["type"] | 'text', label: string;placeholder:string }>()
</script>
<template>
    <label :for="props.id" class="flex flex-col  ">
        <span class="text-xs !tracking-[-0.214px] font-bold text-black mb-2 " >{{ props.label }}</span>
        <input :type="props.type" :id="props.id" :placeholder="props.placeholder" :name="props.id" class="border flex border-[#CFCFCF] rounded-lg outline-0 focus:border-primary hover:bg-white text-sm font-bold !tracking-[-0.25px] text-black placeholder:opacity-40 py-[18px] px-6 min-w-[280px] h-14  sm:min-w-[309px] !w-full " />
    </label>
</template>



<style scoped>

</style>