<!-- File: src/App.vue -->
<!-- (DIPERBARUI) Menambahkan komponen NowPlaying secara global untuk efek floating. -->
<script setup>
import { computed } from 'vue';
import { useHead } from '@vueuse/head';
import { useRoute } from 'vue-router';
import AppHeader from './components/layout/Header.vue';
import AppFooter from './components/layout/Footer.vue';
import NowPlaying from './components/ui/NowPlaying.vue'; // <-- Impor NowPlaying

const route = useRoute();

// Menggunakan data meta dari router untuk judul dinamis
useHead(computed(() => ({
  title: route.meta.title || 'Jiya.space',
  meta: [
    { name: 'description', content: route.meta.description || 'Personal space for Jiya' },
  ],
})));
</script>

<template>
  <div class="app-wrapper">
    <app-header />

    <main>
      <router-view />
    </main>

    <app-footer />

    <!-- Komponen NowPlaying ditempatkan di sini, di luar alur utama -->
    <NowPlaying />
  </div>
</template>

<style>
/* Reset CSS dasar untuk konsistensi */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

main {
  padding: 2rem;
  max-width: 960px;
  margin: 0 auto;
  min-height: calc(100vh - 150px);
  /* Menambahkan ruang di bawah agar tidak tertutup oleh floating bar */
  padding-bottom: 120px; 
}
</style>

