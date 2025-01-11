<template>
  <div class="zoznam">
    <h2 v-if="selectedDestination.name">Vybrali ste destináciu: {{ selectedDestination.name }}</h2>
    <table class="table caption-top">
      <caption>Doplnkové služby:</caption>
      <thead class="table-dark">
      <tr>
        <th scope="col">Služba</th>
        <th scope="col">Popis služby</th>
        <th scope="col">Vybrať</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(service, index) in services" :key="index">
        <th class="align-middle" scope="row">
          {{ service.name }}<br>
          {{ service.price }}€
        </th>
        <td class="align-middle">
          <ul>
            <li v-for="(detail, idx) in service.details" :key="idx">{{ detail }}</li>
          </ul>
        </td>
        <td class="align-middle" style="width: 15%;">
          <button
              class="btn"
              :disabled="!selectedDestination"
              :style="{ margin: '0 auto', color: 'white', backgroundColor: service.isSelected ? 'green' : 'grey', fontSize: 'large', opacity: !selectedDestination ? 0.5 : 1 }"
              @click="toggleButton(index)"
          >
            {{ service.isSelected ? 'Vybrané' : 'Vybrať' }}
          </button>
        </td>
      </tr>
      </tbody>
    </table>
    <div v-if="selectedDestination">
      <h3>Celková cena: {{ totalPrice }}€</h3>
      <button @click="addToCart" class="btn btn-success mt-3" :disabled="!selectedDestination">
        Pridať do košíka
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { useCartStore } from '@/stores/cart';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router'; // Import useRouter

export interface Service {
  name: string;
  details: string[];
  price: number;
  isSelected: boolean;
}

export default defineComponent({
  data() {
    return {
      hasConsent: localStorage.getItem("cookieConsent") === "true",
      services: [] as Service[],
      selectedDestination: JSON.parse(localStorage.getItem('selectedDestination') || '{}'),
    };
  },
  computed: {
    totalPrice() {
      let total = this.selectedDestination.price || 0;
      this.services.forEach(service => {
        if (service.isSelected) {
          total += service.price;
        }
      });

      return total.toFixed(2);
    },
  },
  methods: {
    async fetchServices() {
      try {
        const response = await fetch('/src/data_output.json');
        const data = await response.json();
        this.services = data.services;
      } catch (error) {
        console.error('Chyba pri načítaní služieb:', error);
      }
    },
    toggleButton(index: number) {
      this.services[index].isSelected = !this.services[index].isSelected;
      if (this.hasConsent) this.saveServicesToCookies();
    },
    saveServicesToCookies() {
      const selectedServices = this.services.filter(s => s.isSelected).map(s => s.name);
      document.cookie = `selectedServices=${JSON.stringify(selectedServices)}; path=/;`;
    },
    loadServicesFromCookies() {
      const cookieMatch = document.cookie.match(/selectedServices=([^;]+)/);
      if (cookieMatch) {
        const selectedServices = JSON.parse(cookieMatch[1]);
        this.services.forEach(s => (s.isSelected = selectedServices.includes(s.name)));
      }
    },
    addToCart() {
      const cartStore = useCartStore();
      const selectedServices = this.services.filter(service => service.isSelected).map(service => service.name);

      if (!this.selectedDestination.name) {
        alert("Pred pridaním do košíka je potrebné vybrať destináciu!");
        return;
      }

      cartStore.addToCart({
        id: this.selectedDestination.id,
        name: this.selectedDestination.name,
        price: parseFloat(this.totalPrice),
        people: this.selectedDestination.people,
        services: selectedServices,
      });

      this.resetSelection();
      const router = useRouter(); // Use the useRouter hook
      router.push({ name: 'kosik' });
    },
    resetSelection() {
      localStorage.removeItem('selectedDestination');
      document.cookie = `selectedServices=[]; path=/;`;
    }
  },
  async mounted() {
    await this.fetchServices();
    if (this.hasConsent) this.loadServicesFromCookies();
  }
});
</script>
