// File: src/router/index.js
// (DIPERBARUI) Rute untuk halaman Proyek ditambahkan kembali.

import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProjectsView from '../views/ProjectsView.vue'; // <-- Tambahkan kembali
import AboutView from '../views/AboutView.vue';
import NotFoundView from '../views/NotFoundView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Home | JiyaOS',
      description: 'Personal space for Jiya'
    }
  },
  { // <-- Tambahkan kembali rute ini
    path: '/projects',
    name: 'projects',
    component: ProjectsView,
    meta: {
      title: 'Projects | JiyaOS',
      description: 'A collection of projects by Jiya'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: {
      title: 'About | JiyaOS',
      description: 'Learn more about Jiya'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView,
    meta: {
      title: '404 Not Found | JiyaOS',
      description: 'The page you are looking for does not exist.'
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

