<template>
  <v-app>
    <Header :title="applicationTitle" :subtitle="applicationSubtitle" style=" height: 135px; " />
    <v-main style=" height: 100%">
      <div class="container-fluid" style="height: 100%;" >
        <div class="sidebar"  style="height: 100%;" >
          <NavigationMenu/>
        </div>
        <div class="main-content pl-10 pt-5">
          <router-view></router-view>
        </div>
      </div>
    </v-main>
    <div class="pr-8 main-footer bg-black d-flex justify-end">2024—Sean Moore ©</div>
  </v-app>
</template>

<script setup lang="ts">
console.time('🕓 Application Loaded');
import NavigationMenu from "./view/component/NavigationMenu.vue";
import Header from "./view/component/Header.vue";
import { useMainApplicationStore } from "./store";
import { storeToRefs } from "pinia";

const store = useMainApplicationStore();
const { applicationID, applicationTitle, applicationSubtitle } = storeToRefs(store);
console.info(`%c🐰 Starting: ${applicationID.value}...`, 'color:Green');

console.timeEnd('🕓 Application Loaded');

console.group(`%c✨ Project Information`, 'color:Yellow');
console.info(`%cEnvironment: ${import.meta.env.MODE}`, 'color:DodgerBlue');
console.groupEnd();
</script>

<style scoped>
.main-footer {
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  bottom: 0;
  position: fixed;
}

.container-fluid {
  display: flex;
  margin: 10px;
  padding: 0;
}

.sidebar {
  width: 170px;
  background-color: black;
  height: 100%;
}

.main-content {
  flex: 1;
}
</style>


