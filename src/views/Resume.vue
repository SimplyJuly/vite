<script setup>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiDownload } from '@mdi/js';

const downloadIcon = mdiDownload;
</script>

<template>
    <v-toolbar class="downloadSection">
        <v-toolbar-title>Download</v-toolbar-title>
        <v-btn href="/documents/Resume.pdf" download> 
            <svg-icon class="downloadIcon" type="mdi" :path="downloadIcon"/>
        </v-btn>
    </v-toolbar>

    <img src="../assets/Resume.pdf">
</template>