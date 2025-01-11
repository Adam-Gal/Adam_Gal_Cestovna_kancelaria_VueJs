<template>
  <body>
    <Header />
    <div class="container d-flex justify-content-center flex-column align-center" style="padding-top: 18%;">
      <h1 class="text-center fw-bolder" style="font-size: 8cap;">
        {{ text }}
      </h1><br>
      <router-link class="btn btn-dark w-25 mx-auto" :to="link">Naspäť</router-link>
    </div>
  </body>
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
