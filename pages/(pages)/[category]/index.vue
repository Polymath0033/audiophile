<script setup lang="ts">
import { product } from "~/lib/data";
import { useResponsive } from "~/composables/responsive";
import { useStore } from "~/store";
import { storeToRefs } from "pinia";
const { getProductsByCategory } = storeToRefs(useStore());
const route = useRoute();
const productCategory = Array.isArray(route.params.category)
  ? route.params.category[0]
  : route.params.category;

const categories = computed(() =>
  getProductsByCategory
    .value(productCategory)
    .sort((a, b) => (a.new === b.new ? 0 : a.new ? -1 : 1))
);
const { mode } = useResponsive();
</script>
<template>
  <TopComp :title="productCategory" />
  <main class="px-[140px] flex flex-col gap-20 my-40">
    <SectionItem
      v-for="(category, index) in categories"
      :key="category.slug"
      :description="category.description"
      :image-url="category.image[mode]"
      :new-product="category.new"
      :title="category.name"
      :slug="`/${productCategory}/details/${category.slug}`"
      :order="index % 2 === 0 ? '' : 'order-1'"
    />
  </main>
</template>

<style scoped></style>
