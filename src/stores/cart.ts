// stores/cart.ts
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as Array<{ id: string; name: string; price: number; people: number; services?: string[] }>,
  }),
  actions: {
    addToCart(item: { id: string; name: string; price: number; people: number; services?: string[] }) {
      this.items.push(item);
    },
    clearCart() {
      this.items = [];
    },
  },
});
