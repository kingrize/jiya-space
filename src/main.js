// File: src/main.js
// (DIPERBARUI) Mendaftarkan ikon baru untuk Command Palette.

import { createApp } from 'vue';
import { createHead } from '@vueuse/head';
import App from './App.vue';
import router from './router';
import { animateOnScroll } from './directives/animateOnScroll';

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { 
  FaSun, FaMoon, CoGithub,
  CoInstagram, CoFacebook, FaGhost,
  HiExternalLink, CoFolder,
  CoSearch, CoHome, CoUser // <-- Tambahkan ikon baru
} from "oh-vue-icons/icons";

addIcons(
  FaSun, FaMoon, CoGithub,
  CoInstagram, CoFacebook, FaGhost,
  HiExternalLink, CoFolder,
  CoSearch, CoHome, CoUser // <-- Tambahkan ikon baru
);

import './assets/main.css';

const app = createApp(App);
const head = createHead();

app.use(router);
app.use(head);
app.component("v-icon", OhVueIcon);
app.directive('animate-on-scroll', animateOnScroll);

app.mount('#app');

