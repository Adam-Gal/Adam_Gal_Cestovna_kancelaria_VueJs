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
      closed: false, // Track whether the consent has been closed
      hasConsent: this.checkConsent(), // Track if consent is already given
    };
  },
  methods: {
    handleAccept() {
      this.setConsent(true);  // Store the user's consent in localStorage
      this.closed = true;      // Mark the consent message as closed
    },

    handleDeny() {
      this.setConsent(false); // Store that user denied consent in localStorage
      this.closed = true;      // Mark the consent message as closed
    },

    setConsent(consent: boolean) {
      localStorage.setItem('cookieConsent', consent.toString()); // Save consent to localStorage
      this.hasConsent = consent; // Update consent state
    },

    checkConsent() {
      return localStorage.getItem('cookieConsent') === 'true'; // Check for saved consent in localStorage
    },
  },
};
</script>