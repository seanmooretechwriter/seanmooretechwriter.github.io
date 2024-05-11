<template>
  <div class="ml-4">
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="'/blog-posts/' + post.id">{{ post.title }}</router-link>
        - {{ post.description }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';

const posts = ref([]);

onMounted(async () => {
  const response = await fetch('./blog-posts/blog-posts.json');
  posts.value = await response.json();
});
</script>
<style>
ul li {
  font-size: 16px;
}
</style>
