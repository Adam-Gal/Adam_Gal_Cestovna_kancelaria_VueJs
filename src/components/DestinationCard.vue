<template>
  <div class="accordion accordion-flush accordion_background" :id="id">
    <div class="dest">
      <div>
        <img :src="image" class="img-thumbnail img-fluid dest_ob" :alt="name" />
      </div>
      <h1 class="nazov">{{ name }}</h1>
    </div>
    <div class="accordion-item rounded mt-2">
      <h2 class="accordion-header rounded" :id="`heading-${id}`">
        <button
            class="accordion-button collapsed rounded"
            style="text-align: center"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="`#collapse-${id}`"
            aria-expanded="false"
            :aria-controls="`collapse-${id}`"
        >
          Zobraziť detaily
        </button>
      </h2>
      <div
          :id="`collapse-${id}`"
          class="accordion-collapse collapse"
          :aria-labelledby="`heading-${id}`"
          :data-bs-parent="`#${id}`"
      >
        <div class="accordion-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item" v-for="(price, index) in prices" :key="index">
              <span class="text_vlavo">All inclusive. Dovolenka pre {{ index + 1 }}. {{ index === 0 ? 'osobu' : 'ľudí' }}</span>
              <span class="text_vpravo">{{ price }}€</span>
            </li>
          </ul>
          <div class="justify-content-center" style="display: flex">
            <div class="form-outline" style="width: 5.7rem; display: inline-block;">
              <label class="form-label" style="white-space: nowrap; margin: 0 auto;">Počet ľudí:</label>
              <input v-model="people" min="1" max="5" type="number" class="form-control" />
            </div>
            <router-link to="/sluzby" class="btn btn-primary dest_tlacidlo">
              Objednaj
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br>
</template>

<script lang="ts">
export default {
  props: {
    id: String,
    name: String,
    image: String,
    prices: Array
  },
  data() {
    return {
      people: 1,
    };
  },
};
</script>

<style scoped>
.dest_ob {
  width: 100%;
  height: auto;
}
</style>
