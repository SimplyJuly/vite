<script setup>
import CardDisplay from "../components/CardDisplay.vue";
import { ref } from "vue";

const experiences = ref([
  {
    img: "/CommerceLogo.png",
    title: "Software Engineer Intern",
    time: "2023 - Present",
    description:
      "Analyzing, designing, and maintaining a full-stack software application as part of an agile development team",
    toggle: false,
  },
  {
    img: "/approachLogo.png",
    title: "Quality Assurance",
    time: "2021 - 2023",
    description:
      "Identified bugs and problems in software applications, supported clients through technical issues.",
    toggle: false,
  },
  {
    img: "/RokcLogo.png",
    title: "Front Desk",
    time: "2020 - Present",
    description:
      "Opened and maintained climbing facility. Evaluated risk management for all climbers.",
    toggle: false,
  },
  {
    img: "/PizzahutLogo.jpeg",
    title: "Shift Lead",
    time: "2019 - 2020",
    description:
      "Ran store, enforced health regulations, managed delivery times.",
    toggle: false,
  },
  {
    img: "/KohlsLogo.png",
    title: "Cashier",
    time: "2018 - 2019",
    description:
      "Would check out customers and mantained surrounding clothing area.",
    toggle: false,
  },
  {
    img: "/AeropostaleLogo.png",
    title: "Sales Associate",
    time: "2017 - 2018",
    description: "Helped customers find clothing, maintained store displays.",
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
