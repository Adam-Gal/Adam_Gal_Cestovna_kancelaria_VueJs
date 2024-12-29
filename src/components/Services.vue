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
          {{ service.cena }}€
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

export default {
  data() {
    return {
      hasConsent: localStorage.getItem("cookieConsent") === "true",
      services: [
        { name: "Rezervácia leteniek", details: ["Medzinárodné lety", "Vnútroštátne lety", "Last-minute ponuky"], cena: 20, isSelected: false },
        { name: "Rezervácia ubytovania", details: ["Hotely", "Apartmány", "Hostely", "Rezervácia dovolenkových domov"], cena: 20, isSelected: false },
        { name: "Zabezpečenie prepravy", details: ["Autopožičovňa", "Transfer z letiska", "MHD v cieľovej destinácii"], cena: 35, isSelected: false },
        { name: "Turistické balíčky", details: ["Výlety a exkurzie", "Skupinové a individuálne zájazdy", "Kultúrne a dobrodružné programy"], cena: 250, isSelected: false },
        { name: "Dodatočné poistenie", details: ["Cestovné poistenie", "Zdravotné poistenie", "Poistenie zrušenia"], cena: 100, isSelected: false },
        { name: "Víza a iné formality", details: ["Pomoc s vízami", "Iné povinné formality"], cena: 50, isSelected: false },
        { name: "Technická podpora", details: ["24/7 zákaznícka podpora", "Mobilné aplikácie a informačné systémy pre zákazníkov"], cena: 20, isSelected: false },
        { name: "Event Management", details: ["Organizácia konferencií a podujatí", "Team-building akcie", "Svadobné plánovanie destinácií"], cena: 150, isSelected: false },
        { name: "Jazykové služby", details: ["Priradenie sprievodcu v cudzom jazyku", "Preklady dokumentov", "Komunikačná asistencia"], cena: 280, isSelected: false },
        { name: "Špeciálne služby pre firemných klientov", details: ["Organizácia firemných ciest a team-buildingov", "Zabezpečenie konferenčných priestorov"], cena: 150, isSelected: false },
        { name: "Kultúrne zážitky", details: ["Rezervácie v reštauráciách", "Kultúrne podujatia a festivaly"], cena: 50, isSelected: false },
        { name: "VIP služby", details: ["Prémiové lety a ubytovanie", "Exkluzívne zážitky a služby"], cena: 500, isSelected: false },
      ],
      selectedDestination: JSON.parse(localStorage.getItem('selectedDestination') || '{}'),
    };
  },
  computed: {
    totalPrice() {
      let total = this.selectedDestination.price || 0;
      this.services.forEach(service => {
        if (service.isSelected) {
          total += service.cena;
        }
      });

      return total.toFixed(2);
    },
  },
  methods: {
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
      this.$router.push({ name: 'kosik' });
    },
    resetSelection() {
      localStorage.removeItem('selectedDestination');
      document.cookie = `selectedServices=[]; path=/;`;
    }
  },
  mounted() {
    if (this.hasConsent) this.loadServicesFromCookies();
  },
};
</script>
