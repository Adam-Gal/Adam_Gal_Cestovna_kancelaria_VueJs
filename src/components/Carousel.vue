<template>
  <div>
    <div id="carouselExampleIndicators" class="carousel slide">
      <div class="carousel-indicators">
        <button
            type="button"
            v-for="(item, index) in images"
            :key="index"
            :data-bs-target="'#carouselExampleIndicators'"
            :data-bs-slide-to="index"
            :class="{ active: index === 0 }"
            :aria-label="'Slide ' + (index + 1)"
        ></button>
      </div>
      <div class="carousel-inner">
        <div
            v-for="(image, index) in images"
            :key="index"
            :class="['carousel-item', { active: index === 0 }]"
        >
          <img :src="image" class="d-block w-100" :alt="'Obrázok ' + (index + 1)">
        </div>
      </div>
      <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Predchádzajúci</span>
      </button>
      <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Ďalší</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import data from '@/data_output.json';

export default defineComponent({
  name: "Carousel",
  data() {
    return {
      images: [] as string[],
    };
  },
  created() {
    this.images = data.carousel_images;
  },
});
</script>