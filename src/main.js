// File: src/main.js
// (DIPERBARUI) Mendaftarkan library @vueuse/head.

import { createApp } from 'vue';
import { createHead } from '@vueuse/head'; // <-- 1. Impor createHead
import App from './App.vue';
import router from './router';

// Icon Library Setup
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaSun, FaMoon, FaInstagram, FaFacebookF } from "oh-vue-icons/icons/fa";
import { CoGithub } from "oh-vue-icons/icons/co";
import { HiExternalLink } from "oh-vue-icons/icons/hi";

addIcons(FaSun, FaMoon, CoGithub, HiExternalLink, FaInstagram, FaFacebookF);

import './assets/main.css';

const app = createApp(App);
const head = createHead(); // <-- 2. Buat instance head

app.use(router);
app.use(head); // <-- 3. Gunakan head di aplikasi
app.component("v-icon", OhVueIcon);

app.mount('#app');

