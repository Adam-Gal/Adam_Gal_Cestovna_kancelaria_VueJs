<template>
  <body>
  <Header />
  <div class="container d-flex justify-content-center flex-column align-center" style="padding-top: 18%;">
    <h1 class="text-center fw-bolder" style="font-size: 8cap;">
      {{ nadpis }}
    </h1>
    <br><br>
    <router-link class="btn btn-dark w-25 mx-auto" :to="prepojenie">Naspäť</router-link>
  </div>
  </body>
</template>

<script lang="ts">
import Header from "@/components/Header.vue";

export default {
  components: {
    Header,
  },
  data() {
    return {
      nadpis: '',
      prepojenie: '',
    };
  },
  created() {
    this.nadpis = this.$route.query.nadpis as string || 'Ďakujeme';
    this.prepojenie = this.$route.query.prepojenie as string || '/';
  }
};
</script>
