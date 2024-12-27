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
import { defineComponent, ref } from 'vue';

export interface Destination {
  name: string;
  image: string;
  description: string;
  link: string;
}

export default defineComponent({
  name: 'Destinations',
  setup() {
    const destinations = ref<Destination[]>([
      {
        name: 'Bali',
        image: 'img/img2.jpg',
        description:
            'Kultúrne poklady a harmonická atmosféra vytvárajú ideálnu dovolenkovú oázu. Bali je miestom, kde sa stretáva prírodná krása s kultúrnym bohatstvom, ponúkajúc nezabudnuteľné zážitky pre váš oddych a zážitky.',
        link: '#bali',
      },
      {
        name: 'Egypt',
        image: 'img/img3.jpg',
        description:
            'Piesočné pláže pri tyrkysovo modrom mori vytvárajú dokonalý ráj pre oddych. Egypt je miestom, kde sa stretáva moderný luxus s historickým pokladom, ponúkajúc nezabudnuteľné zážitky a relaxáciu v jednom.',
        link: '#egypt',
      },
      {
        name: 'Kanárske ostrovy',
        image: 'img/img4.jpg',
        description:
            'Oáza pod slnkom a modrým nebom Atlantiku. Zlatisté pláže, ktoré omýva príjemné teplo oceánu, tvoria dokonalé miesto na oddych. Kanárske ostrovy sú miestom, vytvárajúc ideálny raj pre oddych a objavovanie.',
        link: '#kanarske',
      },
    ]);

    return {
      destinations,
    };
  },
});
</script>

