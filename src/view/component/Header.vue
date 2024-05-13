<template>
    <div class="bg-black main-header">
      <v-icon icon="mdi-code-json" class="ml-12" color="orange-darken-1" />
      <h2 class="mr-2 ml-4 mt-4 mb-4 text-grey-lighten-1" >{{ title }}</h2><h4 class="ml-1 mr-1 text-grey-darken-1">({{subtitle}})</h4>
    </div>
</template>

<script lang="ts" setup>
interface Props {
  title: string;
  subtitle: string;
}
defineProps<Props>();

</script>

<style>
.main-header {
  width: 100%;
  display: flex;
  align-items: center;

  top: 0;
}
</style>