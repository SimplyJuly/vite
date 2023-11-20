<script setup>
import CardDisplay from "../components/CardDisplay.vue";
import { ref } from "vue";

const experiences = ref([
  {
    img: "/projects/forest.jpeg",
    title: "Survival VR Game",
    description:
      "Built a VR Game using Unity that allowed players to learn how to adapt to different wilderness environments.",
    toggle: false,
  },
  {
    img: "/projects/pool.jpeg",
    title: "Jaeli Construction",
    description:
      "Created a website for Jaeli Construction company. Allows for potential clients to reach out and view past work. Built using Vue.",
    toggle: false,
  },
  {
    img: "/projects/hackathon.jpeg",
    title: "Hackathon Portal",
    description:
      "Helped Build a Hackathon Website that streamlined participant registration, team management, and information display. Built using Vue and Java Spring for the Backend.",
    toggle: false,
  },
  {
    img: "/projects/media.jpeg",
    title: "Media Library",
    description:
      "Program that receives a list of various media (movies, songs, books) and sorts them into searchable libraries. Built in C++",
    toggle: false,
  },
]);
</script>

<template>
  <v-row class="shiftRight">
    <v-col>
      <CardDisplay :cardData="experiences" />
    </v-col>
  </v-row>
</template>

<style scoped>
@import "/src/style.css";
</style>
