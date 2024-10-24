import { defineStore } from "pinia";
import { product } from "~/lib/data";
import type { Product } from "~/types/data";
export const useStore = defineStore({
  id: "store",
  state: () => ({
    product,
    cart: [] as { product: Product; quantity: number }[],
  }),
  getters: {
    getProductBySlug: (state) => (slug: string) => {
      return state.product.find((p) => p.slug === slug);
    },
    getProductsByCategory: (state) => (category: string) => {
      return state.product.filter((p) => p.category === category);
    },
    cartTotal: (state) => {
      return state.cart.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
      );
    },
    getCartQuantity: (state) => {
      return state.cart.reduce((total, item) => total + item.quantity, 0);
    },
    getCart: (state) => {
      return state.cart;
    },
    getCartLength: (state) => {
      return state.cart.length;
    },
  },
  actions: {
    addToCart(product: Product, quantity: number) {
      const item = this.cart.find((i) => i.product === product);
      if (item) {
        item.quantity += quantity;
      } else {
        this.cart.push({ product, quantity });
      }
    },
    removeFromCart(product: Product) {
      const index = this.cart.findIndex((i) => i.product === product);
      if (index !== -1) {
        this.cart.splice(index, 1);
      }
    },
    removeAllFromCart() {
      this.cart = [];
    },
  },
});
