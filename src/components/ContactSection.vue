<template>
  <div class="kontakt">
    <div class="clanok">
      <div>
        <h2 class="adresa">Adresa:</h2>
        <p class="adr">Bratislavská 29</p>
        <p class="adr">949 01 Nitra</p>
        <a
            href="https://www.google.sk/maps/place/Bratislavsk%C3%A1+29,+949+01+Nitra/@48.3145157,18.0592887,17z/data=!3m1!4b1!4m6!3m5!1s0x476b3f140c555685:0x241b1a01a40bb4cd!8m2!3d48.3145122!4d18.0618636!16s%2Fg%2F11vl3939l6?hl=sk&entry=ttu"
            class="btn btn-secondary"
        >
          Pozrieť na mape
        </a>
      </div>
      <Carousel />
    </div>
    <hr />
    <h2 style="font-weight: bold;">Kontakty:</h2>
    <div class="text-center justify-content-center">
      <ContactInfo
          kto="Manažér"
          email="manazer@vias.sk"
          telefon="0904 372 965"
      />
      <ContactInfo
          kto="Riaditeľ"
          email="riaditel@vias.sk"
          telefon="0904 386 764"
      />
      <ContactInfo
          kto="Call Centrum"
          email="dovolenka@vias.sk"
          telefon="0903 752 184"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Carousel from "@/components/Carousel.vue";
import ContactInfo from "@/components/ContactInfo.vue";

export default {
  components: { Carousel, ContactInfo },
};
</script>
