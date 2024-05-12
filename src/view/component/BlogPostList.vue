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

<script lang="ts" setup>
import {onMounted, Ref, ref} from 'vue';

interface Post {
  id: string;
  description: string;
  title: string;
}

class PostImpl implements Post{
  id: string;
  description: string;
  title: string;

  constructor(id: string, description: string, title: string) {
    this.id = id;
    this.description = description;
    this.title = title;
  }

}

const posts: Ref<Post[]> = ref([]);

onMounted(async () => {
  const response = await fetch('./blog-posts/blog-posts.json');
  const json = await response.json();
  const p: Post[] = [];
  for (let i=0;i<json.length;i++) {
    p[i] = new PostImpl(json[i].id as string, json[i].description as string, json[i].title as string);
  }
  posts.value = p;
});
</script>
<style>
ul li {
  font-size: 16px;
}
</style>
