<template>
  <div v-if="isVisible" class="cookie-consent">
    <p>Cookie consent text here</p>
    <button @click="hideConsent">OK</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: true,
    };
  },
  methods: {
    hideConsent() {
      this.isVisible = false;
    },
  },
};
</script>
