// File: src/router/index.js
// (DIPERBARUI) Menambahkan properti 'meta' untuk setiap rute.

import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { // Meta tags untuk SEO dan judul halaman
      title: 'Home',
      description: 'A minimalist, modern, and professional private space.'
    }
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/ProjectsView.vue'),
    meta: { // Meta tags untuk SEO dan judul halaman
      title: 'Projects',
      description: 'A collection of projects built by Jiya.'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: { // Meta tags untuk SEO dan judul halaman
      title: 'About',
      description: 'Learn more about Jiya, the developer behind this space.'
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

