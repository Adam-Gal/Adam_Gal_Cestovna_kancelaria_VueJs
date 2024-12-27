<template>
  <div class="text-center uvodny_text">
    <h1 id="nadpis" style="font-weight: bold;">{{ nazov }}</h1>
  </div>
</template>

<script lang="ts">
export default {
  name: "HeadingText",
  props: {
    nazov: { type: String, required: true },
  },
};
</script>
