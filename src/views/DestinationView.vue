<template>
  <Header active="destinacie"></Header>
  <br><br><br><br><br><br><br>
  <div class="container">
    <HeadingText nazov="Destinácie"/>
    <br><br>
    <h1 class="aktualne_destinacie">Aktuálne destinácie:</h1>
    <DestinationCard></DestinationCard>
  </div>
  <Footer></Footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import HeadingText from "@/components/HeadingText.vue";
import DestinationCard from "@/components/DestinationCard.vue";

export default defineComponent({
  components: {
    Header,
    Footer,
    HeadingText,
    DestinationCard
  }
});
</script>

