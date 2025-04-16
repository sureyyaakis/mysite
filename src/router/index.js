import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/blog',
    name: 'Blog',
    // Lazy loading blog page for better performance
    component: () => import('../views/Blog.vue')
  },
  {
    path: '/blog/:slug',
    name: 'BlogPost',
    // Lazy loading blog post page
    component: () => import('../views/BlogPost.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
    return { top: 0 };
  },
});

export default router;
