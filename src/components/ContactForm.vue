<template>
  <div class="formular_pozadie">
    <h2 class="text-center formular_nadpis">Napíšte nám</h2>
    <form class="formular" @submit.prevent="submitForm">
      <div class="form-group justify-content-center">
        <label class="formular_label">Meno a priezvisko</label>
        <input v-model="formData.name" type="text" class="form-control formular_input" required />
      </div>
      <div class="form-group">
        <label class="formular_label">E-mail</label>
        <input v-model="formData.email" type="email" id="emailInput" class="form-control formular_input" placeholder="meno@mail.com" required />
      </div>
      <div class="form-group">
        <label class="formular_label">Požiadavka</label>
        <textarea v-model="formData.request" class="form-control formular_textarea" rows="3" required></textarea>
      </div>
      <div class="form-check">
        <input v-model="formData.consent" type="checkbox" id="consentCheckbox" class="form-check-input formular_input" required />
        <label class="form-check-label formular_input">Súhlas so spracovaním osobných údajov</label>
      </div>
      <button id="odoslat" type="submit" class="btn btn-primary">Odoslať</button>
    </form>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: "ContactForm",
  setup() {
    const router = useRouter();
    const formData = ref({
      name: '',
      email: '',
      request: '',
      consent: false,
    });

    const submitForm = () => {
      if (formData.value.consent) {
        router.push({ name: 'thankyou', params: { text: "Ďakujeme za dotaz", link: '/kontakt' } });
      } else {
        alert('Prosím potvrďťe spracovanie osobných údajov');
      }
    };

    return {
      formData,
      submitForm,
    };
  },
};
</script>