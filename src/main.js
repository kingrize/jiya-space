import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// 👇 START: Icon Library Setup
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaSun, FaMoon } from "oh-vue-icons/icons/fa";

addIcons(FaSun, FaMoon);
// 👆 END: Icon Library Setup

import './assets/main.css';

const app = createApp(App);

app.use(router);
app.component("v-icon", OhVueIcon); // <-- Daftarkan komponen ikon secara global

app.mount('#app');