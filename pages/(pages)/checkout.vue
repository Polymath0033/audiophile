<script setup lang="ts">
import AppInput from "~/components/inputs/app-input.vue";
const router = useNuxtApp().$router;
definePageMeta({
  layout: "checkout",
});
</script>
<template>
  <main class="px-[140px] flex flex-col gap-20 py-40 bg-light-grey">
    <button
      type="button"
      v-on:click="router.back()"
      class="flex items-start -mb-6 text-body text-black opacity-50"
    >
      Go back
    </button>
    <form class="flex gap-[30px]">
      <section class="py-[54px] px-12 rounded-lg bg-white grow w-full  ">
        <h3 class="text-h3 !text-[32px]">CHECKOUT</h3>
        <div class="mt-[41px] w-full ">
          <h6 class="text-subtitle text-primary uppercase !font-bold">
            Billing Details
          </h6>
          <div class="flex flex-col gap-8  w-full" >
            <div class="flex w-full gap-4 border ">
              <AppInput
                id="name"
                type="text"
                label="Name"
                placeholder="Enter your name"
              />
              <AppInput
                id="email"
                type="email"
                label="Email"
                placeholder="Enter your email"
                />
            </div>
          </div>
        </div>
      </section>
    </form>
  </main>
</template>

<style scoped></style>
