// File: src/router/index.js
// (DIPERBARUI) Menambahkan rute statis dan dinamis untuk Mods.

import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProjectsView from '../views/ProjectsView.vue';
import AboutView from '../views/AboutView.vue';
import ModsView from '../views/ModsView.vue'; // <-- Impor baru
import ModDetailView from '../views/ModDetailView.vue'; // <-- Impor baru
import NotFoundView from '../views/NotFoundView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Home | JiyaOS' }
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView,
    meta: { title: 'Projects | JiyaOS' }
  },
  { // <-- Rute baru untuk galeri mod
    path: '/mods',
    name: 'mods',
    component: ModsView,
    meta: { title: 'Mods | JiyaOS' }
  },
  { // <-- Rute DINAMIS baru untuk detail setiap mod
    path: '/mods/:slug', // ':slug' adalah parameter dinamis
    name: 'mod-detail',
    component: ModDetailView,
    // Judul akan di-set secara dinamis di dalam komponen
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: { title: 'About | JiyaOS' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView,
    meta: { title: '404 Not Found | JiyaOS' }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

