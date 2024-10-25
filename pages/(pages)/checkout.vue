<script setup lang="ts">
import { formatPrice } from "~/lib/price-formatter";
import AppInput from "~/components/inputs/app-input.vue";
import { useStore } from "~/store";
import AppButton from "~/components/buttons/app-button.vue";
import { storeToRefs } from "pinia";
const router = useNuxtApp().$router;
const { cart, cartTotal, getCartQuantity } = storeToRefs(useStore());
const shippingFee = cartTotal.value / 100;
const vatIncluded = 4 * getCartQuantity.value;
const grandTotal = shippingFee + vatIncluded + cartTotal.value;
definePageMeta({
  layout: "checkout",
  middleware: [
    function () {
      const store = useStore();
      if (store.cart.length < 1) {
      }
    },
  ],
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
      <section class="py-[54px] px-12 rounded-lg bg-white grow">
        <h3 class="text-h3 !text-[32px]">CHECKOUT</h3>
        <div class="mt-[41px] flex flex-col gap-[53px] w-full">
          <div class="w-full">
            <h6 class="text-subtitle text-primary uppercase !font-bold">
              Billing Details
            </h6>
            <div class="flex flex-col gap-8 w-full">
              <div class="grid grid-cols-2 grid-rows-2 w-full gap-4">
                <AppInput
                  id="name"
                  type="text"
                  label="Name"
                  placeholder="Enter your name"
                  label-class="w-full"
                />
                <AppInput
                  id="email"
                  type="email"
                  label="Email"
                  placeholder="Enter your email"
                  label-class="w-full"
                />
                <AppInput
                  type="number"
                  id="phone-number"
                  placeholder="+1 202-555-0136"
                  label="Phone Number"
                />
              </div>
            </div>
          </div>
          <div>
            <h6 class="text-subtitle text-primary uppercase !font-bold">
              Shipping Details
            </h6>
            <div class="flex flex-col gap-8 w-full">
              <div class="grid grid-cols-2 grid-rows-2 w-full gap-4">
                <AppInput
                  id="address"
                  type="text"
                  label="Address"
                  placeholder="Enter your address"
                  label-class="w-full col-span-2 "
                />
                <AppInput
                  id="zip"
                  type="number"
                  label="ZIP Code"
                  placeholder="Enter your ZIP code"
                />
                <AppInput
                  id="city"
                  type="text"
                  label="City"
                  placeholder="Enter your city"
                />
                <AppInput
                  id="country"
                  type="text"
                  label="Country"
                  placeholder="Enter your country"
                />
              </div>
            </div>
          </div>
          <div>
            <h6 class="text-subtitle text-primary uppercase !font-bold">
              Payment Details
            </h6>
            <div class="flex flex-col gap-8 w-full">
              <div class="grid grid-cols-2 grid-rows-2 w-full gap-4">
                <AppInput
                  id="card-name"
                  type="text"
                  label="Cardholder Name"
                  placeholder="Enter your name"
                  label-class="w-full col-span-2"
                />
                <AppInput
                  id="card-number"
                  type="number"
                  label="Card Number"
                  placeholder="Enter your card number"
                />
                <AppInput
                  id="exp-date"
                  type="text"
                  label="Expiration Date"
                  placeholder="MM/YY"
                />
                <AppInput
                  id="cvv"
                  type="number"
                  label="CVV"
                  placeholder="Enter your CVV"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="grow h-fit bg-white p-8 rounded-lg">
        <h6 class="text-h6 !font-bold uppercase">SUMMARY</h6>
        <ul class="my-[31px] flex flex-col gap-6">
          <li
            class="flex justify-between"
            v-for="item in cart"
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
            <p class="text-body !font-bold uppercase text-black opacity-40">
              x{{ item.quantity }}
            </p>
          </li>
        </ul>
        <div class="flex justify-between items-center">
          <h6 class="uppercase text-body text-black opacity-50">TOTAL</h6>
          <p class="text-black text-lg font-bold uppercase">
            {{ formatPrice(cartTotal) }}
          </p>
        </div>
        <div class="flex justify-between items-center">
          <h6 class="uppercase text-body text-black opacity-50">SHIPPING</h6>
          <p class="text-black text-lg font-bold uppercase">
            {{ formatPrice(shippingFee) }}
          </p>
        </div>
        <div class="flex justify-between items-center">
          <h6 class="uppercase text-body text-black opacity-50">
            VAT(INCLUDED)
          </h6>
          <p class="text-black text-lg font-bold uppercase">
            {{ formatPrice(vatIncluded) }}
          </p>
        </div>
        <div class="flex justify-between items-center my-8">
          <h6 class="uppercase text-body text-black opacity-50">GRAND TOTAL</h6>
          <p class="text-black text-lg font-bold uppercase">
            {{ formatPrice(grandTotal) }}
          </p>
        </div>
        <AppButton app-type="button" class="w-full"value="CONTINUE & PAY" />
      </section>
    </form>
  </main>
</template>

<style scoped></style>
