// File: src/main.js
// Ini adalah file JavaScript utama yang menginisialisasi aplikasi Vue.

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Setup Pustaka Ikon (oh-vue-icons)
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaSun, FaMoon } from "oh-vue-icons/icons/fa";
import { CoGithub, HiExternalLink } from "oh-vue-icons/icons";

// Daftarkan semua ikon yang kita butuhkan secara global.
addIcons(FaSun, FaMoon, CoGithub, HiExternalLink);

// Impor Style Global
import './assets/main.css';

// Buat instance aplikasi Vue.
const app = createApp(App);

// Gunakan router untuk manajemen halaman.
app.use(router);

// Daftarkan komponen ikon secara global agar bisa dipakai di mana saja.
app.component("v-icon", OhVueIcon);

// "Pasang" aplikasi Vue ke elemen #app di index.html.
app.mount('#app');

