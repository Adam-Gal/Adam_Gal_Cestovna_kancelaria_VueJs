<template>
  <button :style="{ backgroundColor: isSelected ? 'green' : 'grey' }" @click="toggle">
    {{ isSelected ? "Vybraté" : "Vybrať" }}
  </button>
</template>

<script>
export default {
  data() {
    return {
      isSelected: false,
    };
  },
  methods: {
    toggle() {
      this.isSelected = !this.isSelected;
    },
  },
};
</script>
