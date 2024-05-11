import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/view/Home.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('@/view/Blog.vue')
  },
  {
    path: '/blog-posts/:id', // Dynamic path for blog posts
    name: 'BlogPost',
    component: () => import('@/view/BlogPost.vue'),
    props: true
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/view/About.vue')
  },
  {
    path: '/resume',
    name: 'Resume',
    component: () => import('@/view/Resume.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
