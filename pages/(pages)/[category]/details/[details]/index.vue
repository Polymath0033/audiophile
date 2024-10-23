<script setup lang="ts">
import { useResponsive } from "~/composables/responsive";
import AppButton from "~/components/buttons/app-button.vue";
import { useStore } from "~/store";

const store = useStore();

const route = useRoute();
const router = useRouter();

const details = Array.isArray(route.params.details)
  ? route.params.details[0]
  : route.params.details;
const item = computed(() => store.getProductBySlug(details));

if (!item.value) {
  router.push("/404");
  // redirect to 404
  // this.$router.push('/404')
}
const formatPrice = (price: number) => {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};
const quantity = ref(1);
const increaseQuantity = () => quantity.value++;
const decreaseQuantity = () => {
  if (quantity.value <= 1) return;
  quantity.value--;
};
const escapeNewLine = (text: string) => text.replace(/\n/g, "<br>");
const { mode } = useResponsive();
const addToCart = () => {
  if (!item.value) return;
  store.addToCart(item.value, quantity.value);
  console.log(store.cart);
 // router.push("/cart");
};
</script>
<template>

  <main class="px-[140px] flex flex-col gap-20 my-40">
    <button
      type="button"
      v-on:click="router.back()"
      class="flex items-start -mb-6 text-body text-black opacity-50"
    >
      Go back
    </button>
    <SectionItem
      :description="item?.description!"
      :image-url="item?.image[mode]!"
      :new-product="item?.new!"
      :slug="item?.slug!"
      :details="false"
      :title="item?.name!"
    >
      <h6 class="text-black text-h6">{{ formatPrice(item?.price!) }}</h6>
      <div class="flex gap-4 mt-8">
        <div class="flex bg-grey h-12 w-[120px] justify-center items-center">
          <button
            v-on:click="decreaseQuantity"
            :class="[
              'w-full text-[13px] font-bold !tracking-[1px] uppercase flex items-center justify-center text-black ',
              quantity <= 1 ? 'opacity-25 cursor-not-allowed' : '',
            ]"
            type="button"
          >
            -
          </button>
          <input
            class="w-full border-none outline-none bg-transparent flex items-center justify-center px-2 text-center text-[13px] font-bold text-black !tracking-[1px]"
            type="number"
            :name="`quantity-${item?.slug}`"
            :id="`quantity-${item?.slug}`"
            v-model="quantity"
          />
          <button
            v-on:click="increaseQuantity"
            :class="[
              'w-full text-[13px] font-bold  !tracking-[1px] uppercase flex items-center justify-center text-primary ',
            ]"
            type="button"
          >
            +
          </button>
        </div>
        <AppButton @click="addToCart" value="Add to Cart" app-type="button" />
      </div>
    </SectionItem>
    <section class="flex gap-[120px]">
      <article class="flex gap-8 flex-col">
        <h3
          class="text-[32px] font-bold !leading-[112.5%] !tracking-[1.143px] uppercase"
        >
          FEATURES
        </h3>
        <p
          class="text-body text-black opacity-50 text-wrap w-full"
          v-html="escapeNewLine(item?.features!)"
        ></p>
      </article>
      <div class="w-full grow flex flex-col gap-8">
        <h3
          class="text-[32px] font-bold !leading-[112.5%] !tracking-[1.143px] uppercase"
        >
          IN THE BOX
        </h3>
        <ul class="flex flex-col gap-2">
          <li
            class="inline-flex justify-start items-start gap-6"
            v-for="box in item?.includes"
          >
            <span class="text-body !font-bold text-primary"
              >{{ box.quantity }}X
            </span>
            <p class="text-body opacity-50 capitalize">{{ box.item }}</p>
          </li>
        </ul>
      </div>
    </section>
    <section class="h-[580px] grid gap-8 grid-cols-2 grid-rows-2 border">
      <nuxt-img
        v-for="img in item?.gallery"
        :src="img[mode]"
        class="w-full h-full even:[grid-row:2_/_span_2] last-of-type:[grid-row:1_/_span_2] rounded-lg object-cover"
      />
    </section>
    <section>
      <h3
        class="text-[32px] font-bold !leading-[112.5%] !tracking-[1.143px] uppercase text-center mb-16"
      >
        YOU MAY ALSO LIKE
      </h3>
      <div class="grid grid-cols-3 gap-8">
        <div
          v-for="other in item?.others"
          class="flex gap-10 flex-col items-center"
        >
          <nuxt-img
            :src="other.image[mode]"
            class="w-[280px] h-[280px] rounded-lg object-cover"
          ></nuxt-img>

          <p class="text-h6 text-black uppercase">{{ other.name }}</p>
          <AppButton
            value="See Product"
            app-type="link"
            :href="`/${item?.category}/details/${other.slug}`"
          />
        </div>
      </div>
    </section>
  </main>
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
