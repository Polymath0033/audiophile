<script setup lang="ts">
const year = new Date().getFullYear();
</script>
<template>
   <article
    class="mt-20 flex gap-[30px] h-[588px] items-center w-[calc(100%_-_280px)] mx-auto"
  >
    <div class="w-1/2 flex flex-col gap-8">
      <h2 class="text-h2 text-black uppercase">
        Bringing you the <span class="text-primary">best</span> audio gear
      </h2>
      <p class="text-body text-black opacity-50">
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </p>
    </div>
    <div class="w-1/2 bg-grey rounded-lg">
      <nuxt-img
        src="./assets/shared/desktop/image-best-gear.jpg"
        class="w-full h-full rounded-lg"
      ></nuxt-img>
    </div>
  </article>
<footer-comp/>
</template>

<style scoped></style>
