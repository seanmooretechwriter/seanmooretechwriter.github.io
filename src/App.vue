<template>
  <div>
    <h1>Sean Moore - Software Developer & Technical Writer</h1>
    {{ appID }}
  </div>
</template>
<script setup lang="ts">

import { useMainApplicationStore } from './store'
import { storeToRefs } from 'pinia'

// access the `store` variable anywhere in the component ✨
const store = useMainApplicationStore();
const { appID } = storeToRefs(store)

</script>