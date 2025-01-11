<template>
  <!DOCTYPE html>
  <html lang="sk">
    <body>
      <Header active="domov"></Header>
      <img :src="'/img/img1.jpg'" alt="úvodný obrázok" class="pozadie bg-image">
      <br><br><br><br><br><br><br>
      <div class="container z-1">
        <HeadingText nazov="Cestovná kancelária Vias"/>
        <br><br><br>
        <HotDestinations></HotDestinations>
        <br><br><br><br>
        <h1 id="novinky">Novinky:</h1>
        <News></News>
        <CookieConsent></CookieConsent>
      </div>
      <Footer></Footer>
    </body>
  </html>
</template>

<script lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import HotDestinations from "@/components/HotDestinations.vue";
import News from "@/components/News.vue";
import CookieConsent from "@/components/CookieConsent.vue";
import HeadingText from "@/components/HeadingText.vue";

export default {
  components: { Header, Footer, HotDestinations, News, CookieConsent, HeadingText },
}
</script>

<style scoped>
body {
  margin: 0;
  background: linear-gradient(180deg, rgb(0, 255, 242) 0%, rgb(98, 141, 141) 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
