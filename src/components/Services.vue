<template>
  <div class="zoznam">
    <table class="table caption-top">
      <caption>List služieb:</caption>
      <thead class="table-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Služba</th>
        <th scope="col">Popis služby</th>
        <th scope="col">Pridať</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(service, index) in services" :key="index">
        <th class="align-middle" scope="row">{{ index + 1 }}</th>
        <td class="align-middle fw-bolder">
          {{ service.name }}<br>
          Cena: {{ service.cena }}
        </td>
        <td class="align-middle">
          <ul>
            <li v-for="(detail, idx) in service.details" :key="idx">{{ detail }}</li>
          </ul>
        </td>
        <td class="align-middle" style="width: 15%;">
          <button
              :id="'btn' + (index + 1)"
              class="btn"
              :style="{ margin: '0 auto', color: 'white', backgroundColor: service.isSelected ? 'green' : 'grey', fontSize: 'large' }"
              @click="toggleButton(index)"
          >
            {{ service.isSelected ? 'Vybraté' : 'Vybrať' }}
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      hasConsent: localStorage.getItem("cookieConsent") === "true", // Kontrola cookie consent
      services: [
        { name: "Rezervácia leteniek", details: ["Medzinárodné lety", "Vnútroštátne lety", "Last-minute ponuky"], cena: "20€", isSelected: false },
        { name: "Rezervácia ubytovania", details: ["Hotely", "Apartmány", "Hostely", "Rezervácia dovolenkových domov"], cena: "20€", isSelected: false },
        { name: "Zabezpečenie prepravy", details: ["Autopožičovňa", "Transfer z letiska", "MHD v cieľovej destinácii"], cena: "35€", isSelected: false },
        { name: "Turistické balíčky", details: ["Výlety a exkurzie", "Skupinové a individuálne zájazdy", "Kultúrne a dobrodružné programy"], cena: "250€", isSelected: false },
        { name: "Dodatočné poistenie", details: ["Cestovné poistenie", "Zdravotné poistenie", "Poistenie zrušenia"], cena: "100€", isSelected: false },
        { name: "Víza a iné formality", details: ["Pomoc s vízami", "Iné povinné formality"], cena: "50€", isSelected: false },
        { name: "Technická podpora", details: ["24/7 zákaznícka podpora", "Mobilné aplikácie a informačné systémy pre zákazníkov"], cena: "20€", isSelected: false },
        { name: "Event Management", details: ["Organizácia konferencií a podujatí", "Team-building akcie", "Svadobné plánovanie destinácií"], cena: "150€", isSelected: false },
        { name: "Jazykové služby", details: ["Priradenie sprievodcu v cudzom jazyku", "Preklady dokumentov", "Komunikačná asistencia"], cena: "280€", isSelected: false },
        { name: "Špeciálne služby pre firemných klientov", details: ["Organizácia firemných ciest a team-buildingov", "Zabezpečenie konferenčných priestorov"], cena: "150€", isSelected: false },
        { name: "Kultúrne zážitky", details: ["Rezervácie v reštauráciách", "Kultúrne podujatia a festivaly"], cena: "50€", isSelected: false },
        { name: "VIP služby", details: ["Prémiové lety a ubytovanie", "Exkluzívne zážitky a služby"], cena: "500€", isSelected: false },
      ],
    };
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
  },
  mounted() {
    if (this.hasConsent) this.loadServicesFromCookies();
  },
});
</script>

