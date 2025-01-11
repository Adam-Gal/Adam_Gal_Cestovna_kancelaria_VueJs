<template>
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
        <img :src="image" class="d-block w-100" alt="...">
      </div>
    </div>
    <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: "Carousel",
  setup() {
    const images = ref<string[]>([]);

    const fetchImages = async () => {
      try {
        const response = await fetch('/src/data_output.json');
        const data = await response.json();
        images.value = data['carousel_images'];
      } catch (error) {
        console.error('Chyba pri načítaní JSON súboru:', error);
      }
    };

    onMounted(() => {
      fetchImages();
    });

    return {
      images,
    };
  },
});
</script>
