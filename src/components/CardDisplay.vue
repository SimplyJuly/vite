<script setup>
const props = defineProps ({
  cardData: Array
});
</script>

<template>
  <v-container>
    <v-row class="padding">
      <v-col v-for="data in cardData" :key="data.title">
  
        <!-- Default Card -->
        <v-card class="cardSize">
          <div v-if="!data.toggle">
            <div class="imgContainer">
              <img class="cardImg" :src="data.img">
            </div>
            <v-card-title>{{ data.title }}</v-card-title>
            <v-card-subtitle>{{ data.time }}</v-card-subtitle>
            <v-card-actions>
              <v-btn color="teal-accent-4" @click="data.toggle = true">
                Learn More
              </v-btn>
            </v-card-actions>
          </div>
  
          <!-- Learn More Card -->
          <v-expand-transition>
            <v-card v-if="data.toggle" class="revealedCard">
              <v-row>
                <v-col class="titleWrapper">
                  <v-card-title>{{ data.title }}</v-card-title>
                </v-col>
                <v-col cols="12" style="height: 150px">
                  <v-card-text>{{ data.description }}</v-card-text>
                </v-col>
                <v-col class="buttonWrapper">
                  <v-card-actions>
                    <v-btn 
                      @click="data.toggle = false"
                      class="revealButton">
                      Return
                    </v-btn>
                  </v-card-actions>
                </v-col>
              </v-row>
            </v-card>
          </v-expand-transition>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template> 

<style>
/* Container Styling */
.padding {
  padding: 30px;
}

/* Default Card Styling */
.cardImg {
  max-height: 180px;
  overflow: hidden;
  max-width: 300px;
  margin: auto;
}
.cardSize {
  width: 300px;
  height: 300px;
  z-index: 1;
}
.imgContainer {
  height: 180px;
  width: 300px;
  display: flex;
}
.v-card-subtitle {
  font-size: 1rem !important;
  height: 20px
}
.button {
  box-shadow: 0px 3px 1px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 2px 2px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 5px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12))
}

/* Revealed Card Styling */

.revealedCard {
  height: 300px;
  padding: .5rem !important;
}

.titleWrapper {
  height: 90px;
  display: flex;
  align-items: center;
}

.buttonWrapper {
  height: 60px;
}

.revealButton {
 color: #00bfa5 !important;
}
</style>