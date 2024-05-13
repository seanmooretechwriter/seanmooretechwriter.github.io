<template>
  <div class="custom-drawer" >
    <ul>
      <li v-for="(item, index) in selectedItemsMap"
          :key="item"
          :class="{ 'selectedTileActive': selectedIndex === index }"
          @click="navigate(item)"><v-icon class="pr-5 pl-4">{{ icons[index] }}</v-icon> {{ titles[index] }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";
import { VIcon } from 'vuetify/components';

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
.custom-drawer {
  background-color: #000000;
  color: #ffffff;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  padding: 10px;
  border-bottom: 1px solid #37474F;
  cursor: pointer;

  align-items: center;
}

li:hover {
  background-color: #90a4ae;
}

.selectedTileActive {
  background-color: #ffffff;
  color: black;
}
</style>
