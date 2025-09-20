// File: src/router/index.js
// (DIPERBARUI) Menambahkan rute untuk halaman Linktree.

import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProjectsView from '../views/ProjectsView.vue';
import AboutView from '../views/AboutView.vue';
import ModsView from '../views/ModsView.vue';
import ModDetailView from '../views/ModDetailView.vue';
import LinksView from '../views/LinksView.vue'; // <-- Impor baru
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
  {
    path: '/mods',
    name: 'mods',
    component: ModsView,
    meta: { title: 'Mods | JiyaOS' }
  },
  {
    path: '/mods/:slug',
    name: 'mod-detail',
    component: ModDetailView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: { title: 'About | JiyaOS' }
  },
  { // <-- Rute baru untuk Linktree
    path: '/links',
    name: 'links',
    component: LinksView,
    meta: { 
      title: 'Links | JiyaOS',
      layout: 'clean' // Memberitahu App.vue untuk menyembunyikan header/footer
    }
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

