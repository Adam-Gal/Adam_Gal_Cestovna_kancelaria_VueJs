<template>
  <Header active="sluzby"></Header>
  <div class="container">
    <br><br><br><br><br><br><br>
    <HeadingText nazov="Služby"/>
    <br><br><br><br>
    <Services></Services>
  </div>
  <Footer></Footer>
</template>

<script lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Services from "@/components/Services.vue";
import HeadingText from "@/components/HeadingText.vue";

export default {
  components: {
    Header,
    Footer,
    Services,
    HeadingText
  },
};
</script>
