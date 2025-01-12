<template>
  <div class="zoznam">
    <table class="table caption-top">
      <caption>Položky na objednanie:</caption>
      <thead class="table-dark">
      <tr>
        <th scope="col">Destinácia</th>
        <th scope="col">Počet ľudí</th>
        <th scope="col">Doplnkové služby</th>
        <th scope="col">Cena</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in cartItems" :key="index">
        <th class="align-middle" scope="row">{{ item.name }}</th>
        <td class="align-middle fw-bolder">{{ item.people }}</td>
        <td class="align-middle">
          <ul>
            <li v-for="(service, idx) in item.services" :key="idx">{{ service }}</li>
          </ul>
        </td>
        <td class="align-middle" style="width: 15%;">{{ item.price }}€</td>
      </tr>
      <tr v-if="!cartItems.length">
        <td colspan="4" class="text-center">Košík je prázdny.</td>
      </tr>
      </tbody>
    </table>
    <div v-if="cartItems.length && !showOrderForm" class="text-center mt-4">
      <button @click="clearCart" class="btn btn-danger">Vyprázdniť košík</button>
      <button @click="showOrderForm = !showOrderForm" class="btn btn-success ms-3">Objednať</button>
    </div>

    <div v-if="showOrderForm" class="mt-4">
      <h3>Osobné údaje</h3>
      <form @submit.prevent="submitOrder">
        <div class="mb-3">
          <label for="firstName" class="form-label">Meno</label>
          <input type="text" class="form-control" id="firstName" v-model="personalInfo.firstName" required />
        </div>
        <div class="mb-3">
          <label for="lastName" class="form-label">Priezvisko</label>
          <input type="text" class="form-control" id="lastName" v-model="personalInfo.lastName" required />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" v-model="personalInfo.email" required />
        </div>
        <div class="mb-3">
          <label for="phone" class="form-label">Telefónne číslo</label>
          <input type="tel" class="form-control" id="phone" v-model="personalInfo.phone" required />
        </div>
        <div v-if="formError" class="alert alert-danger">
          Prosím, vyplňte všetky povinné polia.
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-primary">Dokončiť objednávku</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { useCartStore } from '@/stores/cart';

export default {
  data() {
    return {
      cartItems: [] as {
        id: string;
        name: string;
        people: number;
        services?: string[];
        price: number;
      }[],
      showOrderForm: false,
      personalInfo: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
      },
      formError: false,
    };
  },
  mounted() {
    const cartStore = useCartStore();
    cartStore.loadCartFromLocalStorage();
    this.cartItems = cartStore.items;
  },
  methods: {
    clearCart() {
      const cartStore = useCartStore();
      cartStore.clearCart();
      this.cartItems = [];
    },
    validateForm() {
      return (
          this.personalInfo.firstName &&
          this.personalInfo.lastName &&
          this.personalInfo.email &&
          this.personalInfo.phone
      );
    },
    submitOrder() {
      if (!this.validateForm()) {
        this.formError = true;
        return;
      }
      this.formError = false;
      this.$router.push({
        path: '/thankyou',
        query: {
          prepojenie: '/kosik',
          nadpis: 'Ďakujeme za objednávku',
        },
      });
      this.showOrderForm = false;
      this.clearCart();
      this.personalInfo = { firstName: '', lastName: '', email: '', phone: '' };
    },
  },
};
</script>
