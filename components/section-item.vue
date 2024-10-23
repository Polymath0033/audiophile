<script setup lang="ts">
import AppButton from "./buttons/app-button.vue";
const { details = true } = defineProps<{
  imageUrl: string;
  newProduct: boolean;
  description: string;
  title: string;
  slug: string;
  order?: string;
  details?: boolean;
}>();
</script>
<template>
  <section class="flex gap-[120px] items-center h-[560px]">
    <div :class="['w-full rounded-lg bg-grey h-full', order]">
      <nuxt-img
        :src="`${imageUrl}`"
        class="w-full h-full object-cover rounded-lg"
        width-="480"
        height="480"
      ></nuxt-img>
    </div>
    <article class="flex w-full flex-col gap-5 justify-center h-full">
      <div>
        <p class="text-overline text-primary uppercase" v-if="newProduct">
          NEW PRODUCTs
        </p>
        <h2 class="text-h2 uppercase">{{ title }}</h2>
      </div>
      <p class="text-body text-black opacity-50">{{ description }}</p>
      <AppButton v-if="details" value="See Product" app-type="link" :href="slug" />
      <slot></slot>
    </article>
  </section>
</template>
