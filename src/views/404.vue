<template>
  <body>
    <Header />
    <div class="container d-flex justify-content-center flex-column align-center" style="padding-top: 15%;">
      <h1 class="text-center fw-bolder" style="font-size: 18cap">404</h1>
      <h2 class="mb-8 text-center fw-bolder" style="font-size: 5cap">Page not found</h2>
      <br><br>
      <router-link class="btn btn-dark w-25 mx-auto" to="/">Hlavná stránka</router-link>
    </div>
  </body>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
</script>
