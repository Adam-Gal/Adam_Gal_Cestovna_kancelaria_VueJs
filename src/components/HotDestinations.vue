<template>
  <div>
    <!-- Mobile Section -->
    <div class="obrazky d-flex flex-column justify-content-center d-md-none">
      <div
          v-for="(destination, index) in destinations"
          :key="index"
          class="obrazok d-flex flex-column"
      >
        <img :src="destination.image" :alt="destination.name" class="img-thumbnail mb-2" style="border-radius: 20px;">
        <h1 class="ponuka">{{ destination.name }}</h1>
        <p class="text_uputavka">{{ destination.description }}</p>
        <div class="obj mt-auto">
          <router-link class="objednaj" to="/destinacie">Objednaj TU !!!</router-link>
        </div>
      </div>
    </div>

    <!-- Desktop Section -->
    <div class="container obrazky text-center d-none d-md-flex justify-content-center" style="max-width: 80%; font-size: 1.5rem;">
      <div
          v-for="(destination, index) in destinations"
          :key="index"
          class="obrazok d-flex flex-column mx-4"
          style="max-width: 300px;"
      >
        <img :src="destination.image" :alt="destination.name" class="img-thumbnail mb-2" style="border-radius: 20px;" loading="eager">
        <h1 class="ponuka">{{ destination.name }}</h1>
        <p class="text_uputavka">{{ destination.description }}</p>
        <div class="obj mt-auto">
          <router-link class="objednaj" to="/destinacie">Objednaj TU !!!</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export interface Destination {
  name: string;
  image: string;
  description: string;
}

export default defineComponent({
  name: 'Destinations',
  setup() {
    const destinations = ref<Destination[]>([]);

    const fetchDestinations = async () => {
      try {
        const response = await fetch('/src/data_output.json');
        const data = await response.json();
        destinations.value = data['hot-destinations'];
      } catch (error) {
        console.error('Chyba pri načítaní JSON súboru:', error);
      }
    };

    onMounted(() => {
      fetchDestinations();
    });

    return {
      destinations,
    };
  },
});
</script>
