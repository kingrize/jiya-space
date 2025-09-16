// File: src/router/index.js
// File ini mendefinisikan semua "halaman" atau "rute" aplikasi.

import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

// Array yang berisi daftar semua rute.
const routes = [
  {
    path: '/', // URL di browser
    name: 'home', // Nama rute
    component: HomeView // Komponen Vue yang akan ditampilkan
  },
  // Halaman baru di masa depan bisa ditambahkan di sini.
];

// Buat instance router.
const router = createRouter({
  history: createWebHistory(), // Menggunakan mode history HTML5 untuk URL yang bersih.
  routes
});

export default router;

