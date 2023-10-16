<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiHomeAccount, mdiNoteTextOutline, mdiSchoolOutline, mdiAccountCheckOutline, mdiProjectorScreenOutline, mdiBriefcaseOutline } from '@mdi/js';

const pages = ref([
  {url: '/', label: 'Home', icon: mdiHomeAccount},
  {url: '/resume', label: 'Resume', icon: mdiNoteTextOutline},
  {url: '/education', label: 'Education', icon: mdiSchoolOutline},
//   {url: '/skills', label: 'Skills', icon: mdiAccountCheckOutline},
//   {url: '/projects', label: 'Projects', icon: mdiProjectorScreenOutline},
//   {url: '/experience', label: 'Experience', icon: mdiBriefcaseOutline},
])
</script>

<template>
  <v-navigation-drawer expand-on-hover rail rail-width="60">
    <v-list>
      <v-list-item prepend-avatar="/src/assets/Julio.jpg" title="Julio Gracida" subtitle="jcgdc2@umsystem.edu"></v-list-item>
    </v-list>
    
    <v-divider></v-divider>
    
    <v-list density="compact" :mandatory="trueValue" nav>
      <RouterLink v-for="option in pages" :to="option.url" :key="option.label" class="routerLinks">
        <v-list-item :value="option.label">
          <template v-slot:prepend>
            <svg-icon type="mdi" :path="option.icon"/>
          </template>
          <p class="routerLabel"> {{ option.label }} </p>
        </v-list-item>
      </RouterLink>
    </v-list>
    </v-navigation-drawer>
</template>