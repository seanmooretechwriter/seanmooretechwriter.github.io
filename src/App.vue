<template>
  <div>
    <h1>Sean Moore - Software Developer & Technical Writer</h1>
    {{ id }}
  </div>
</template>
<script setup lang="ts">

import { useMainApplicationStore } from './store'
import { storeToRefs } from 'pinia'

const store = useMainApplicationStore();
const { id } = storeToRefs(store)

</script>