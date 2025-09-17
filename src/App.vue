<!-- File: src/App.vue -->
<!-- (DIPERBARUI) Semua logika Vanta.js dihapus untuk menyederhanakan komponen. -->
<script setup>
import { computed } from 'vue';
import { useHead } from '@vueuse/head';
import { useRoute } from 'vue-router';
import AppHeader from './components/layout/Header.vue';
import AppFooter from './components/layout/Footer.vue';

const route = useRoute();

useHead(computed(() => ({
  title: route.meta.title || 'Jiya.space',
  meta: [
    { name: 'description', content: route.meta.description || 'Personal space for Jiya' },
  ],
})));
</script>

<template>
  <!-- Tidak ada lagi elemen latar belakang terpisah -->
  <div class="app-wrapper">
    <app-header />
    <main>
      <router-view v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </router-view>
    </main>
    <app-footer />
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
}

/* Class .app-wrapper tidak lagi membutuhkan z-index
  karena latar belakang sekarang menjadi bagian dari body.
*/
</style>

