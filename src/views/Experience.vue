<script setup>
import CardDisplay from "../components/CardDisplay.vue";
import { ref } from 'vue'

const experiences = ref([	
		{
			img: '/src/assets/CommerceLogo.png',
			title: 'Software Engineer Intern',
			time: '2023 - Present',
			description: 'Full Stack Development in Blah blah. He is the bee\'s knees and does all of the cool stuff or something.',
			toggle: false,
		},
		{
			img: '/src/assets/ApproachLogo.jpeg',
			title: 'Quality Assurance',
			time: '2021 - 2023',
			toggle: false,
		},
		{
			img: '/src/assets/CommerceLogo.png',
			title: 'Key Holder',
			time: '2020 - Present',
			toggle: false,
		},
		{
			img: '/src/assets/CommerceLogo.png',
			title: 'Key Holder',
			time: '2020 - Present',
			toggle: false,
		},
		{
			img: '/src/assets/CommerceLogo.png',
			title: 'Software Engineer Intern',
			toggle: false,
		},
	]);

const message = 'Hello'
</script>

<template>
  <v-row class="shiftRight">
    <v-col>
      <CardDisplay :cardData="experiences" :message="message"/>
    </v-col>
  </v-row>
</template>

<style scoped>
@import "/src/style.css";
</style>
