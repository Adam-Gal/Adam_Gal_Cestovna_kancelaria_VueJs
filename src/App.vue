<template>
  <RouterView :key="$route.fullPath" />
</template>

<script lang="ts">
export default {
  name: 'App',
}
</script>

