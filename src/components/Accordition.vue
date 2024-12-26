<template>
  <div>
    <button class="accordion" @click="toggleAccordion">{{ title }}</button>
    <div class="panel" :style="{ maxHeight: isOpen ? panelHeight : '0px' }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {
      isOpen: false,
      panelHeight: null,
    };
  },
  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
      this.$nextTick(() => {
        this.panelHeight = this.isOpen
            ? `${this.$refs.panel.scrollHeight}px`
            : "0px";
      });
    },
  },
};
</script>

<style>
.accordion {
  /* Add styles for the accordion button */
}

.panel {
  overflow: hidden;
  transition: max-height 0.3s ease;
}
</style>
