// File: src/main.js
// (DIPERBARUI) Mendaftarkan ikon baru untuk halaman 404.

import { createApp } from 'vue';
import { createHead } from '@vueuse/head';
import App from './App.vue';
import router from './router';

// Icon Library Setup
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { 
  FaSun, 
  FaMoon, 
  CoGithub, 
  HiExternalLink,
  CoInstagram,
  CoFacebook,
  FaGhost // <-- TAMBAHKAN INI
} from "oh-vue-icons/icons";

// Daftarkan semua ikon yang kita butuhkan secara global
addIcons(
  FaSun, 
  FaMoon, 
  CoGithub, 
  HiExternalLink,
  CoInstagram,
  CoFacebook,
  FaGhost // <-- TAMBAHKAN INI
);

import './assets/main.css';

const app = createApp(App);
const head = createHead();

app.use(router);
app.use(head);
app.component("v-icon", OhVueIcon);

app.mount('#app');
