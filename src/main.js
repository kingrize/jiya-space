// File: src/main.js
// (DIPERBARUI) Menambahkan ikon baru untuk tumpukan teknologi.

import { createApp } from 'vue';
import { createHead } from '@vueuse/head';
import App from './App.vue';
import router from './router';
import { animateOnScroll } from './directives/animateOnScroll';

// Icon Library Setup
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { 
  FaSun, FaMoon, CoGithub, HiExternalLink,
  CoInstagram, CoFacebook, FaGhost,
  SiVuedotjs, SiVite, SiJavascript, SiCss3 // <-- TAMBAHKAN INI
} from "oh-vue-icons/icons";

addIcons(
  FaSun, FaMoon, CoGithub, HiExternalLink,
  CoInstagram, CoFacebook, FaGhost,
  SiVuedotjs, SiVite, SiJavascript, SiCss3 // <-- TAMBAHKAN INI
);

import './assets/main.css';

const app = createApp(App);
const head = createHead();

app.use(router);
app.use(head);
app.component("v-icon", OhVueIcon);
app.directive('animate-on-scroll', animateOnScroll);

app.mount('#app');

