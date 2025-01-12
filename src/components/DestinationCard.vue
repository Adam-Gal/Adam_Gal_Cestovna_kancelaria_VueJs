<template>
  <div>
    <div v-for="destination in destinations" :key="destination.id" class="accordion accordion-flush accordion_background" :id="destination.id" style="margin-bottom: 15px">
      <div class="dest">
        <div>
          <img :src="destination.image" class="img-thumbnail img-fluid dest_ob" :alt="destination.name" />
        </div>
        <h1 class="nazov">{{ destination.name }}</h1>
      </div>
      <div class="accordion-item rounded mt-2">
        <h2 class="accordion-header rounded" :id="`heading-${destination.id}`">
          <button
              class="accordion-button collapsed rounded"
              style="text-align: center"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="`#collapse-${destination.id}`"
              aria-expanded="false"
              :aria-controls="`collapse-${destination.id}`"
          >
            Zobraziť detaily
          </button>
        </h2>
        <div
            :id="`collapse-${destination.id}`"
            class="accordion-collapse collapse"
            :aria-labelledby="`heading-${destination.id}`"
            :data-bs-parent="`#${destination.id}`"
        >
          <div class="accordion-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item" v-for="(price, index) in destination.prices" :key="index">
                <span class="text_vlavo">All inclusive. Dovolenka pre {{ index + 1 }}. {{ index === 0 ? 'osobu' : 'ľudí' }}</span>
                <span class="text_vpravo">{{ price }}€</span>
              </li>
            </ul>
            <div class="justify-content-center" style="display: flex">
              <div class="form-outline" style="width: 5.7rem; display: inline-block;">
                <label class="form-label" :for="'people-input-' + destination.id" style="white-space: nowrap; margin: 0 auto;">Počet ľudí:</label>
                <input v-model="people" min="1" max="5" type="number" class="form-control" :id="'people-input-' + destination.id" name="people" />
              </div>
              <router-link to="/sluzby" @click="saveSelectedDestination(destination)" class="btn btn-success dest_tlacidlo">Rezervovať a vybrať služby</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      destinations: [] as { id: string; name: string; image: string; prices: number[] }[], // Inline typing
      people: 1,
    };
  },
  mounted() {
    this.loadDestinations();
  },
  methods: {
    async loadDestinations() {
      try {
        const response = await fetch('/src/data_output.json');
        const data = await response.json();
        this.destinations = data.destinations;
      } catch (error) {
        console.error("Error loading destinations:", error);
      }
    },
    saveSelectedDestination(destination: { id: string; name: string; prices: number[] }) {
      const selectedPrice = destination.prices[this.people - 1] || destination.prices[0] || 0;
      localStorage.setItem('selectedDestination', JSON.stringify({
        id: destination.id,
        name: destination.name,
        price: selectedPrice,
        people: this.people,
      }));
    },
  },
});
</script>
