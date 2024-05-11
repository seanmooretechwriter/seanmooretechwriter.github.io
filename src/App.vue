<template>
  <v-app>
    <Header :title="applicationTitle" :subtitle="applicationSubtitle" />
    <v-layout class="main-app-container">
      <NavigationMenu :width="210" class="mainNavigationMenu" />
      <v-main class="main-body">
        <router-view></router-view>
      </v-main>
    </v-layout>
    <v-footer class="main-footer bg-black d-flex justify-end" border>2024—Sean Moore ©</v-footer>
  </v-app>
</template>

<script setup lang="ts">
import NavigationMenu from "./view/component/NavigationMenu.vue";
import Header from "./view/component/Header.vue";
import { useMainApplicationStore } from "./store";
import { storeToRefs } from "pinia";

const store = useMainApplicationStore();
const { applicationID, applicationTitle, applicationSubtitle } = storeToRefs(store);

console.log("applicationID: ", applicationID.value);
console.log("getterFunction: ", store.getterFunction);
</script>

<style>
.main-app-container {
  height: 90%;
}

.main-footer {
  height: 10%;
}

.main-body {
}
</style>
