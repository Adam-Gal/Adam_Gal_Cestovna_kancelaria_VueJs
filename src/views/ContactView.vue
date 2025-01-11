<template>
  <div>
    <Header active="kontakt"></Header>
    <div class="container">
      <br><br><br><br><br><br><br>
      <HeadingText nazov="Kontakt"></HeadingText>
      <br><br><br><br><br>
      <ContactSection></ContactSection>
      <br><br><br>
      <ContactForm></ContactForm>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import HeadingText from "@/components/HeadingText.vue";
import ContactSection from "@/components/ContactSection.vue";
import ContactForm from "@/components/ContactForm.vue";

export default {
  components: {
    Header,
    Footer,
    HeadingText,
    ContactSection,
    ContactForm,
  },
};
</script>
