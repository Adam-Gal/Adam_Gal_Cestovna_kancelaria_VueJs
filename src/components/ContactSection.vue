<template>
  <div class="kontakt">
    <div class="clanok">
      <div>
        <h2 class="adresa">Adresa:</h2>
        <p class="adr">{{ address.street }}</p>
        <p class="adr">{{ address.zip }} {{ address.city }}</p>
        <a :href="address.mapUrl" class="btn btn-secondary">Pozrieť na mape</a>
      </div>
      <Carousel />
    </div>
    <hr />
    <h2 style="font-weight: bold;">Kontakty:</h2>
    <div class="text-center justify-content-center">
      <div class="kontakty" v-for="contact in contact" :key="contact.who">
        <h3 class="kto">{{ contact.who }}</h3>
        <p class="email_tel">
          E-mail {{ contact.who }}: <a :href="'mailto:' + contact.email">{{ contact.email }}</a>
        </p>
        <p class="email_tel">
          Tel. č. {{ contact.who }}: <a :href="'tel:' + contact.tel">{{ contact.tel }}</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Carousel from "@/components/Carousel.vue";

export interface Address {
  street: string;
  zip: string;
  city: string;
  mapUrl: string;
}

export interface Contact {
  who: string;
  email: string;
  tel: string;
}

export default defineComponent({
  components: { Carousel },
  data() {
    return {
      address: {
        street: "",
        zip: "",
        city: "",
        mapUrl: "",
      } as Address,
      contact: [] as Contact[],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch('/src/data_output.json');
        const data = await response.json();
        this.address = data.address;
        this.contact = data.contact;
      } catch (error) {
        console.error('Chyba pri načítaní JSON súboru:', error);
      }
    },
  },
});
</script>
