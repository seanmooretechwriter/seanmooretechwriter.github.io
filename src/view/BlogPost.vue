<template>
  <div class="mb-5 page-title">Blog Post</div>
  <div class="markdown-body pb-5" style="width: 640px" v-html="content"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { marked } from 'marked';

const route = useRoute();
const content = ref('');

defineProps(['id']);

onMounted(async () => {
  const postId = route.params.id;
  const response = await fetch(`/blog-posts/${postId}.md`);
  const markdown = await response.text();
  content.value = marked(markdown) as string;
});
</script>

<style>
.markdown-body {
  font-family: 'Helvetica', 'Arial', sans-serif;
  line-height: 1.6;
}

.markdown-body img {
  max-width: 100%;
  height: auto;
}

.markdown-body h1, .markdown-body h2 {
  border-bottom: 1px solid #eee;
}

.markdown-body ul, .markdown-body ol {
  padding-left: 20px;
}

.markdown-body li {
  margin: 5px 0;
}

.markdown-body p {
  margin: 10px 0;
}

.markdown-body strong {
  font-weight: bold;
}

.markdown-body em {
  font-style: italic;
}

</style>