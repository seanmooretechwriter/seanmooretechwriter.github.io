<template>
  <v-layout>
    <div class="bg-black main-header">
      <h2 class="ml-8 mt-4 mb-4 text-grey-lighten-1" >{{ applicationTitle }}</h2>
    </div>
  </v-layout>
</template>

<script lang="ts" setup>
import { useMainApplicationStore } from "./../../store";
import { storeToRefs } from "pinia";

const store = useMainApplicationStore();
const { applicationTitle } = storeToRefs(store);
</script>

<style>
.main-header {
  width: 100%;
}
</style>