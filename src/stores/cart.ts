import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as Array<{ id: string; name: string; price: number; people: number; services?: string[] }>,
  }),
  actions: {
    addToCart(item: { id: string; name: string; price: number; people: number; services?: string[] }) {
      this.items.push(item);
      this.saveCartToLocalStorage();
    },
    clearCart() {
      this.items = [];
      this.saveCartToLocalStorage();
    },
    setItems(items: Array<{ id: string; name: string; price: number; people: number; services?: string[] }>) {
      this.items = items;
      this.saveCartToLocalStorage();
    },
    saveCartToLocalStorage() {
      localStorage.setItem('cartItems', JSON.stringify(this.items));
    },
    loadCartFromLocalStorage() {
      const cartJson = localStorage.getItem('cartItems');
      if (cartJson) {
        try {
          const cartData = JSON.parse(cartJson);
          if (Array.isArray(cartData)) {
            this.items = cartData;
          }
        } catch (e) {
          console.error('Chyba pri načítaní košíka z localStorage:', e);
        }
      }
    }
  },
});
