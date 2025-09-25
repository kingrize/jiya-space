// File: src/main.js
// (DIPERBARUI) Menambahkan ikon 'fa-envelope' untuk halaman kontak.

import { createApp } from 'vue';
import { createHead } from '@vueuse/head';
import App from './App.vue';
import router from './router';
import { animateOnScroll } from './directives/animateOnScroll';

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { 
  FaSun, FaMoon, CoGithub, CoInstagram, CoFacebook, FaGhost,
  HiExternalLink, CoFolder, CoUser, CoHome, CoSearch,
  MdDownload, FaTag, FaAndroid, FaShieldAlt, FaCheckCircle,
  FaExclamationTriangle, FaTimes, FaHistory, IoGameController,
  FaInfoCircle, FaTimesCircle, CoCog, FaStar,
  FaEnvelope // <-- Ikon baru ditambahkan di sini
} from "oh-vue-icons/icons";

addIcons(
  FaSun, FaMoon, CoGithub, CoInstagram, CoFacebook, FaGhost,
  HiExternalLink, CoFolder, CoUser, CoHome, CoSearch,
  MdDownload, FaTag, FaAndroid, FaShieldAlt, FaCheckCircle,
  FaExclamationTriangle, FaTimes, FaHistory, IoGameController,
  FaInfoCircle, FaTimesCircle, CoCog, FaStar,
  FaEnvelope // <-- Ikon baru didaftarkan di sini
);

import './assets/main.css';

const app = createApp(App);
const head = createHead();

app.use(router);
app.use(head);
app.component("v-icon", OhVueIcon);
app.directive('animate-on-scroll', animateOnScroll);

app.mount('#app');

