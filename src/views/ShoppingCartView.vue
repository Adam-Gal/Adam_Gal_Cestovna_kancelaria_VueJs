<template>
  <!DOCTYPE html>
  <html lang="sk">
    <body>
      <Header active="kosik"></Header>
      <br><br><br><br><br><br><br>
      <div class="container">
        <HeadingText nazov="Košík"></HeadingText>
        <br><br><br>
        <ItemsToBuy></ItemsToBuy>
      </div>
      <Footer></Footer>
      <br><br>

    </body>
  </html>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import HeadingText from "@/components/HeadingText.vue";
import ItemsToBuy from "@/components/ItemsToBuy.vue";
</script>