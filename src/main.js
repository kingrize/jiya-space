import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // <-- Impor router kita

import './assets/main.css'; // <-- Kita akan buat file ini

const app = createApp(App);

app.use(router); // <-- Gunakan router di aplikasi

app.mount('#app');