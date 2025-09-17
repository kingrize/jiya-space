// File: src/App.vue
// (DIPERBARUI) Menggunakan useHead untuk mengatur judul dan meta tag secara dinamis.

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useHead } from '@vueuse/head';

import AppHeader from './components/layout/Header.vue';
import AppFooter from './components/layout/Footer.vue';

const route = useRoute();
const siteTitle = 'Jiya.space';

// Membuat judul halaman menjadi dinamis
const pageTitle = computed(() => {
  return route.meta.title ? `${route.meta.title} | ${siteTitle}` : siteTitle;
});

// Membuat deskripsi meta menjadi dinamis
const pageDescription = computed(() => {
  return route.meta.description || 'A personal space on the web.';
});

// Menggunakan useHead untuk menerapkan perubahan ke <head> dokumen
useHead({
  title: pageTitle,
  meta: [
    {
      name: 'description',
      content: pageDescription,
    },
  ],
});
</script>

<template>
  <div class="site-wrapper">
    <AppHeader />
    <main>
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
.site-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1;
  padding: 2rem;
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
}
</style>

