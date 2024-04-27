<template>
  <div>
    <h1>Sean Moore - Software Developer & Technical Writer</h1>
    {{ applicationID }}
    
    {{ store.getterFunction }}
  </div>
</template>
<script setup lang="ts">

import { useMainApplicationStore } from './store'
import { storeToRefs } from 'pinia'

const store = useMainApplicationStore();
const { applicationID } = storeToRefs(store)

console.log('applicationID: ', applicationID.value);
console.log('getterFunction: ', store.getterFunction);

</script>