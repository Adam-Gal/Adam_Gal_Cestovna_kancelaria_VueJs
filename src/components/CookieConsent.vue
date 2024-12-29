<template>
  <div v-if="!hasConsent && !closed" class="cookie-consent">
    <p class="cookie-text">Táto stránka používa súbory cookies. Chete prijať ich používanie ?</p>
    <div class="mt-2 d-flex align-items-center justify-content-center g-2">
      <button class="allow-button" @click="handleAccept">Prijať</button>
      <button class="deny-button" @click="handleDeny">Odmietnuť</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      closed: false,
      hasConsent: this.checkConsent(),
    };
  },
  methods: {
    handleAccept() {
      this.setConsent(true);
      this.closed = true;
    },

    handleDeny() {
      this.setConsent(false);
      this.closed = true;
    },

    setConsent(consent: boolean) {
      localStorage.setItem('cookieConsent', consent.toString());
      this.hasConsent = consent;
    },

    checkConsent() {
      return localStorage.getItem('cookieConsent') === 'true';
    },
  },
};
</script>