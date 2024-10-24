<script setup lang="ts">
import { useStore } from "~/store";
import { formatPrice } from "~/lib/price-formatter";
//import AppButton from "./buttons/app-button.vue";
defineEmits<{ (e: "close"): void }>();
const store = useStore();
</script>
<template>
  <Teleport to="#teleports">
    <div
      class="fixed top-0 left-0 w-full h-screen bg-black opacity-40 z-[1000]"
      v-on:click="$emit('close')"
    ></div>
    <dialog
      open
      class="fixed top-28 right-0 h-fit rounded-lg bg-white z-[1200] w-[377px] p-8 border mr-[165px]"
    >
      <div class="flex justify-between gap-[149px]">
        <h6 class="text-h6 text-black uppercase">
          CART({{ store.getCart.length }})
        </h6>
        <button v-on:click="store.removeAllFromCart" type="button" class="underline text-body text-black opacity-50">
          Remove all
        </button>
      </div>
      <ul class="my-8 flex flex-col gap-6">
        <li
          class="flex justify-between"
          v-for="item in store.cart"
          :key="item.product.name"
        >
          <div class="flex gap-4">
            <div
              class="w-16 h-16 flex justify-center items-center rounded-lg bg-grey"
            >
              <nuxt-img
                :src="`/assets/cart/image-${item.product.slug}.jpg`"
                class="w-full h-full object-cover rounded-lg"
                width="36.19"
                height="40"
              ></nuxt-img>
            </div>
            <div>
              <p
                class="text-body !font-bold line-clamp-1"
                :title="item.product.name"
              >
                {{ item.product.name }}
              </p>
              <p class="text-body !font-bold opacity-50">
                {{ formatPrice(item.product.price) }}
              </p>
            </div>
          </div>
          <div class="h-8 w-24 bg-grey flex items-center">
            <button
              type="button"
              v-on:click="store.addToCart(item.product, -1)"
              :class="[
                'w-full text-[13px] font-bold !tracking-[1px] uppercase flex items-center justify-center text-black ',
                item.quantity <= 1 ? 'opacity-25 cursor-not-allowed' : '',
              ]"
            >
              -
            </button>
            <input
              class="w-full border-none outline-none bg-transparent flex items-center justify-center px-2 text-center text-[13px] font-bold text-black !tracking-[1px]"
              type="number"
              :value="item.quantity"
            />
            <button
              v-on:click="store.addToCart(item.product, 1)"
              type="button"
              :class="[
                'w-full text-[13px] font-bold  !tracking-[1px] uppercase flex items-center justify-center text-primary ',
              ]"
            >
              +
            </button>
          </div>
        </li>
      </ul>
      <div class="flex justify-between items-center">
        <h6 class="uppercase text-body text-black opacity-50">TOTAL</h6>
        <p class="text-black text-lg font-bold uppercase">
          {{ formatPrice(store.cartTotal) }}
        </p>
      </div>
      <AppButton value="Checkout" class="mt-8 w-full" app-type="button" />
    </dialog>
  </Teleport>
</template>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
