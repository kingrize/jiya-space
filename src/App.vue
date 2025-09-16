<!-- File: src/App.vue -->
<!-- Sedikit penyesuaian pada padding 'main' untuk memberi ruang bagi header sticky. -->
<script setup>
import AppHeader from './components/layout/Header.vue';
import AppFooter from './components/layout/Footer.vue';
</script>

<template>
  <app-header />

  <main>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>

  <app-footer />
</template>

<style>
main {
  /* Padding atas dikurangi karena header sudah tidak mendorong konten secara fisik. */
  /* Kita hanya perlu padding untuk spasi visual awal. */
  padding: 2rem;
  max-width: 960px;
  margin: 0 auto;
  min-height: calc(100vh - 150px);
}

/* Style untuk transisi antar halaman */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

