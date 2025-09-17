// File: src/router/index.js
// (DIPERBARUI) Menambahkan rute 'catch-all' untuk halaman 404.

import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProjectsView from '../views/ProjectsView.vue';
import AboutView from '../views/AboutView.vue';
import NotFoundView from '../views/NotFoundView.vue'; // <-- Impor halaman 404

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Home | Jiya.space',
      description: 'Personal space for Jiya'
    }
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView,
    meta: {
      title: 'Projects | Jiya.space',
      description: 'A collection of projects by Jiya'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: {
      title: 'About | Jiya.space',
      description: 'Learn more about Jiya'
    }
  },
  // Rute 'Catch-all' harus selalu menjadi yang terakhir!
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView,
    meta: {
      title: '404 Not Found | Jiya.space',
      description: 'The page you are looking for does not exist.'
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

