<template>
  <v-app>
    <v-app-bar app>
      <Header />
    </v-app-bar>

    <v-main>
      <v-container class="d-flex flex-column align-center" style="padding-top: 18%">
        <h1 class="text-h1 text-center fw-bolder" style="font-size: 18cap">404</h1>
        <h2 class="text-h2 text-center fw-bold" style="font-size: 5cap">Page not found</h2>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
</script>

