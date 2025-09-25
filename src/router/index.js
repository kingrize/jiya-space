// File: src/router/index.js
// (DIPERBARUI) Rute '/projects' dihapus dan '/contact' ditambahkan.

import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ContactView from '../views/ContactView.vue';
import AboutView from '../views/AboutView.vue';
import ModsView from '../views/ModsView.vue';
import ModDetailView from '../views/ModDetailView.vue';
import SkyClockView from '../views/SkyClockView.vue';
import LinksView from '../views/LinksView.vue';
import NotFoundView from '../views/NotFoundView.vue';

const routes = [
  {
    path: '/', name: 'home', component: HomeView,
    meta: { title: 'Home | JiyaOS' }
  },
  {
    path: '/mods', name: 'mods', component: ModsView,
    meta: { title: 'Mods | JiyaOS' }
  },
  {
    path: '/mods/:slug', name: 'mod-detail', component: ModDetailView,
  },
  {
    path: '/sky-clock', name: 'sky-clock', component: SkyClockView,
    meta: { title: 'Sky Clock | JiyaOS' }
  },
  {
    path: '/contact', name: 'contact', component: ContactView,
    meta: { title: 'Contact | JiyaOS' }
  },
  {
    path: '/about', name: 'about', component: AboutView,
    meta: { title: 'About | JiyaOS' }
  },
  {
    path: '/links', name: 'links', component: LinksView,
    meta: { title: 'Links | JiyaOS', layout: 'clean' }
  },
  {
    path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView,
    meta: { title: '404 Not Found | JiyaOS' }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
});

export default router;

