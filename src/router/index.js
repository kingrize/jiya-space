// File: src/router/index.js
// (LENGKAP) Versi penuh dengan semua rute yang telah dikonfigurasi.

import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProjectsView from '../views/ProjectsView.vue';
import AboutView from '../views/AboutView.vue';
import ModsView from '../views/ModsView.vue';
import ModDetailView from '../views/ModDetailView.vue';
import SkyClockView from '../views/SkyClockView.vue';
import LinksView from '../views/LinksView.vue';
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
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView,
    meta: { 
      title: 'Projects | JiyaOS',
      description: 'A collection of projects by Jiya'
    }
  },
  {
    path: '/mods',
    name: 'mods',
    component: ModsView,
    meta: { 
      title: 'Mods | JiyaOS',
      description: 'Database of game and app modifications'
    }
  },
  {
    path: '/mods/:slug',
    name: 'mod-detail',
    component: ModDetailView,
    // Judul akan di-set secara dinamis di dalam komponen
  },
  {
    path: '/sky-clock',
    name: 'sky-clock',
    component: SkyClockView,
    meta: { 
      title: 'Sky Clock | JiyaOS',
      description: 'Real-time event tracker for Sky: Children of the Light'
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
    path: '/links',
    name: 'links',
    component: LinksView,
    meta: { 
      title: 'Links | JiyaOS',
      layout: 'clean' // Memberitahu App.vue untuk menyembunyikan header/footer
    }
  },
  // Rute 'Catch-all' harus selalu menjadi yang terakhir!
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
  routes,
  // Menggulir ke atas halaman saat navigasi
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;

