<template>
  <div class="formular_pozadie">
    <h2 class="text-center formular_nadpis">Napíšte nám</h2>
    <form class="formular" @submit.prevent="submitForm">
      <div class="form-group justify-content-center">
        <label class="formular_label" for="nameInput">Meno a priezvisko</label>
        <input type="text" id="nameInput" name="name" class="form-control formular_input" v-model="formData.name" autocomplete="name" required />
      </div>
      <div class="form-group">
        <label class="formular_label" for="emailInput">E-mail</label>
        <input type="email" id="emailInput" name="email" class="form-control formular_input" v-model="formData.email" placeholder="meno@mail.com" autocomplete="email" required />
      </div>
      <div class="form-group">
        <label class="formular_label" for="requestInput">Požiadavka</label>
        <textarea id="requestInput" name="request" class="form-control formular_textarea" v-model="formData.request" rows="3" autocomplete="off" required></textarea>
      </div>
      <div class="form-check">
        <input type="checkbox" id="consentCheckbox" name="consent" class="form-check-input formular_input" v-model="formData.consent" autocomplete="off" required />
        <label class="form-check-label formular_input" for="consentCheckbox">Súhlas so spracovaním osobných údajov</label>
      </div>
      <div v-if="formError" class="alert alert-danger">
        Prosím, vyplňte všetky povinné polia a zaškrtnite súhlas.
      </div>
      <div class="text-center">
        <button type="submit" class="btn btn-primary">Odoslať</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        request: '',
        consent: false,
      },
      formError: false,
    };
  },
  methods: {
    validateForm() {
      return (
          this.formData.name &&
          this.formData.email &&
          this.formData.request &&
          this.formData.consent
      );
    },
    submitForm() {
      if (!this.validateForm()) {
        this.formError = true;
        return;
      }
      this.formError = false;
      this.$router.push({
        path: '/thankyou',
        query: {
          prepojenie: '/kontakt',
          nadpis: 'Ďakujeme za dotaz',
        },
      });
      this.formData = {
        name: '',
        email: '',
        request: '',
        consent: false,
      };
    },
  },
};
</script>
