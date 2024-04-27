<template>
  <div>
    <h1>{{ applicationTitle }}</h1>
    <NavigationMenu />
  </div>
</template>
<script setup lang="ts">

import NavigationMenu from './view/NavigationMenu.vue'
import { useMainApplicationStore } from './store'
import { storeToRefs } from 'pinia'

const store = useMainApplicationStore();
const { applicationID, applicationTitle } = storeToRefs(store);

console.log('applicationID: ', applicationID.value);
console.log('getterFunction: ', store.getterFunction);

</script>