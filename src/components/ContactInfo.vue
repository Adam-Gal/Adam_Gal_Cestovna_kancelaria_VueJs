<template>
  <div class="kontakty">
    <h3 class="kto">{{ kto }}</h3>
    <p class="email_tel">
      E-mail {{ kto }}: <a :href="'mailto:' + email">{{ email }}</a>
    </p>
    <p class="email_tel">
      Tel. č. {{ kto }}: <a :href="'tel:' + telefon">{{ telefon }}</a>
    </p>
  </div>
</template>

<script lang="ts">
export default {
  name: "ContactInfo",
  props: {
    kto: { type: String, required: true },
    email: { type: String, required: true },
    telefon: { type: String, required: true },
  },
};
</script>
