<template>
  <v-navigation-drawer class="bg-grey-darken-4" :width="width" theme="dark" permanent>
    <v-list color="transparent">
      <v-list-item
          v-for="(item, index) in selectedItemsMap"
          :key="item"
          :class="{ 'SelectedTile-active': selectedIndex === index }"
          :prepend-icon="icons[index]"
          :title="titles[index]"
          @click="navigate(item)"
          slim
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";

interface Props {
  width: number;
}
defineProps<Props>();

const router = useRouter();
const selectedIndex = ref(0);

const selectedItemsMap = [
  '/',
  '/blog',
  '/about',
  '/resume'
];

const titles = ["Home", "Blog", "About", "Resume"];
const icons = [
  "mdi-home-outline",
  "mdi-post",
  "mdi-information",
  "mdi-file-account"
];

const navigate = (path: string) => {
  selectedIndex.value = selectedItemsMap.indexOf(path);
  router.push(path);
};
</script>

<style scoped>
.SelectedTile-active {
  background-color: #F57C00;
}
</style>




