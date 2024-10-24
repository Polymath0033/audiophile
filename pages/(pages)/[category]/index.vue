<script setup lang="ts">
import { useResponsive } from "~/composables/responsive";
import { useStore } from "~/store";
import { storeToRefs } from "pinia";
const route = useRoute();
const store = useStore();
definePageMeta({
  middleware: [
    function ({ params }, from) {
      const store = useStore();
      const category = Array.isArray(params.category)
        ? params.category[0]
        : params.category;

      const categories = store.getProductsByCategory(category);

      if (categories.length < 1) {
        return abortNavigation(
          createError({
            statusCode: 404,
            message: `Category ${category} not found`,
          })
        );
      }
    },
  ],
});
const productCategory = Array.isArray(route.params.category)
  ? route.params.category[0]
  : route.params.category;

const categories = computed(() =>
  store
    .getProductsByCategory(productCategory)
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
