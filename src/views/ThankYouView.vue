<template>
  <v-app>
    <v-app-bar app>
      <Header />
    </v-app-bar>
    <v-main>
      <v-container class="d-flex flex-column align-center justify-center" style="padding-top: 18%;">
        <h1 class="text-h1 text-center fw-bolder" style="font-size: 8cap">{{ text }}</h1><br>
        <router-link class="btn btn-dark w-25 mx-auto" :to="link">Naspäť</router-link>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";

defineProps({
  text: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  }
});
</script>
