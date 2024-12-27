<template>
  <div class="formular_pozadie">
    <h2 class="text-center formular_nadpis">Napíšte nám</h2>
    <form class="formular">
      <div class="form-group justify-content-center">
        <label class="formular_label">Meno a priezvisko</label>
        <input type="text" class="form-control formular_input" required />
      </div>
      <div class="form-group">
        <label class="formular_label">E-mail</label>
        <input
            type="email"
            id="emailInput"
            class="form-control formular_input"
            placeholder="meno@mail.com"
            required
        />
      </div>
      <div class="form-group">
        <label class="formular_label">Požiadavka</label>
        <textarea
            class="form-control formular_textarea"
            rows="3"
            required
        ></textarea>
      </div>
      <div class="form-check">
        <input
            type="checkbox"
            id="consentCheckbox"
            class="form-check-input formular_input"
            required
        />
        <label class="form-check-label formular_input">
          Súhlas so spracovaním osobných údajov
        </label>
      </div>
      <button id="odoslat" type="button" class="btn btn-primary">Odoslať</button>
    </form>
  </div>
</template>

<script lang="ts">
export default {
  name: "ContactForm",
};
</script>
