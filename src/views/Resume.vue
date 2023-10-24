<script setup>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiDownload } from '@mdi/js';

const downloadIcon = mdiDownload;
</script>

<template>
    <v-toolbar class="download">
        <v-toolbar-title>Download</v-toolbar-title>
        <v-btn href="@/Resume.pdf" download>
            <svg-icon type="mdi" :path="downloadIcon"/>
        </v-btn>
    </v-toolbar>

    <img src="../assets/Resume.pdf">
</template>