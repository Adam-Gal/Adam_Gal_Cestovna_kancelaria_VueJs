<template>
  <!DOCTYPE html>
  <html lang="sk">
  <Head></Head>
  <body>
  <Header></Header>
  <div class="container">
    <br><br><br><br><br><br><br>
    <div class="text-center uvodny_text">
      <h1 id="nadpis">Služby</h1>
    </div>
    <br><br><br>
    <!-- Zoznam služieb -->
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
        <!-- Use v-for to generate the rows dynamically -->
        <tr v-for="(service, index) in services" :key="index">
          <th class="align-middle" scope="row">{{ index + 1 }}</th>
          <td class="align-middle">{{ service.name }}</td>
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
  </div>
  <br><br>
  <Footer></Footer>
  </body>
  </html>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import Head from "@/components/Head.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  components: { Footer, Head, Header },
  data() {
    return {
      services: [
        { name: "Rezervácia leteniek", details: ["Medzinárodné lety", "Vnútroštátne lety", "Last-minute ponuky"], isSelected: false },
        { name: "Ubytovanie", details: ["Hotely", "Apartmány", "Hostely", "Rezervácia dovolenkových domov"], isSelected: false },
        { name: "Preprava", details: ["Autopožičovňa", "Transfer z letiska", "MHD v cieľovej destinácii"], isSelected: false },
        { name: "Turistické balíčky", details: ["Výlety a exkurzie", "Skupinové a individuálne zájazdy", "Kultúrne a dobrodružné programy"], isSelected: false },
        { name: "Poistenie", details: ["Cestovné poistenie", "Zdravotné poistenie", "Poistenie zrušenia"], isSelected: false },
        { name: "Víza a iné formality", details: ["Pomoc s vízami", "Iné povinné formality"], isSelected: false },
        { name: "Technická podpora", details: ["24/7 zákaznícka podpora", "Mobilné aplikácie a informačné systémy pre zákazníkov"], isSelected: false },
        { name: "Event Management", details: ["Organizácia konferencií a podujatí", "Team-building akcie", "Svadobné plánovanie destinácií"], isSelected: false },
        { name: "Jazykové služby", details: ["Priradenie sprievodcu v cudzom jazyku", "Preklady dokumentov", "Komunikačná asistencia"], isSelected: false },
        { name: "Cestovné poradenstvo", details: ["Odporúčania pre destinácie", "Špecializované odporúčania pre rodiny, páry, dobrodruhov"], isSelected: false },
        { name: "Špeciálne služby pre firemných klientov", details: ["Organizácia firemných ciest a team-buildingov", "Zabezpečenie konferenčných priestorov"], isSelected: false },
        { name: "VIP služby", details: ["Prémiové lety a ubytovanie", "Exkluzívne zážitky a služby"], isSelected: false },
        { name: "Kulinarické a kultúrne zážitky", details: ["Rezervácie v reštauráciách", "Kultúrne podujatia a festivaly"], isSelected: false },
        { name: "Cestovné balíčky pre špecifické skupiny", details: ["Rodinné dovolenky", "Párty dovolenky", "Senior friendly balíčky"], isSelected: false },
      ],
    };
  },
  methods: {
    toggleButton(index: number) {
      const service = this.services[index];
      service.isSelected = !service.isSelected;
    },
  },
});
</script>
