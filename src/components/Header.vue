<script setup>
const props = defineProps ({
  info: Object,
});
</script>

<template>
  <div class="header">
    <h1>{{ info.title }}</h1>
    <p class="subtitle">{{ info.subtitle }}</p>
  </div>
</template> 

<style>
.subtitle {
  font-size: 1.125rem;
}
</style>