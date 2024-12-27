<template>
  <div>
    <Header active="destinacie"></Header>
    <br><br><br><br><br><br><br>
    <div class="container">
      <HeadingText nazov="Destinácie"/>
      <br><br>
      <h1 class="aktualne_destinacie">Aktuálne destinácie:</h1>
      <Destination
          v-for="destination in destinations"
          :key="destination.id"
          :id="destination.id"
          :name="destination.name"
          :image="destination.image"
          :prices="destination.prices"
      />
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Destination from "@/components/DestinationCard.vue";
import HeadingText from "@/components/HeadingText.vue";

export default {
  components: {
    Header,
    Footer,
    Destination,
    HeadingText
  },
  data() {
    return {
      destinations: [
        { id: "bali", name: "Bali", image: "../img/destinacie/img1.jpg", prices: [500, 900, 1350, 1700, 2100] },
        { id: "egypt", name: "Egypt", image: "../img/destinacie/img2.jpg", prices: [450, 800, 1200, 1500, 1850] },
        { id: "kanarske", name: "Kanárske ostrovy", image: "../img/destinacie/img3.jpg", prices: [600, 950, 1400, 1750, 2200] },
        { id: "cyprus", name: "Cyprus", image: "../img/img5.jpg", prices: [700, 1400, 1950, 2400, 2800] },
        { id: "hawai", name: "Hawai", image: "../img/destinacie/img4.jpg", prices: [1000, 1800, 2600, 3400, 4100] },
        { id: "malorka", name: "Malorka", image: "../img/img6.jpg", prices: [350, 600, 1000, 1600, 2100] },
      ],
    };
  },
};
</script>

<style>
body {
  background: radial-gradient(circle, rgba(3, 124, 166, 1) 0%, rgba(38, 129, 208, 1) 60%, rgba(0, 212, 255, 1) 100%);
}
</style>
