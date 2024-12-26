<template>
  <form @submit.prevent="validateAndSubmit">
    <input type="text" v-model="menoPriezvisko" placeholder="Meno a Priezvisko" />
    <input type="email" v-model="email" placeholder="Email" />
    <textarea v-model="poziadavka" placeholder="Požiadavka"></textarea>
    <input type="checkbox" v-model="consentCheckbox" id="consentCheckbox" />
    <label for="consentCheckbox">Súhlasím so spracovaním údajov</label>
    <button type="submit">Odoslať</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      menoPriezvisko: "",
      email: "",
      poziadavka: "",
      consentCheckbox: false,
    };
  },
  methods: {
    validateAndSubmit() {
      if (!this.menoPriezvisko.trim()) {
        alert("Prosím, zadajte meno a priezvisko");
        return;
      }
      if (!this.poziadavka.trim()) {
        alert("Prosím, zadajte text v dotaze");
        return;
      }
      if (this.isValidEmail(this.email) && this.consentCheckbox) {
        window.location.href = "ThankYouPage.html";
      } else {
        alert(
            !this.isValidEmail(this.email)
                ? "Neplatná e-mailová adresa"
                : "Musíte súhlasiť so spracovaním osobných údajov"
        );
      }
    },
    isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
  },
};
</script>
