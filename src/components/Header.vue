<script setup>
const props = defineProps ({
  info: Object,
});
</script>

<template>
  <div class="header">
    <h1>{{ info.title }}</h1>
    <h3>{{ info.subtitle }}</h3>
  </div>
</template>