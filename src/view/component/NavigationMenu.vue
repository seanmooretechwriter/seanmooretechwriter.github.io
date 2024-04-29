<template>
  <v-layout>
    <v-navigation-drawer class="bg-grey-darken-4" width="210" theme="dark" permanent>
      <v-list color="transparent">
        <v-list-item prepend-icon="mdi-home-outline" title="Home" @click="navigate('/')"></v-list-item>
        <v-list-item prepend-icon="mdi-post" title="Blog" @click="navigate('/blog')"></v-list-item>
        <v-list-item prepend-icon="mdi-information" title="About" @click="navigate('/about')"></v-list-item>
        <v-list-item prepend-icon="mdi-file-account" title="Resume" @click="navigate('/resume')"></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();

const navigate = (path: string) => {
  console.log("Navigating to:", path); 
  router.push(path);
};
</script>
