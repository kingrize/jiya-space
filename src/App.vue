<!-- File: src/App.vue -->
<!-- Ini adalah komponen induk yang membungkus seluruh aplikasi. -->
<!-- Header, Footer, dan konten halaman utama ditampilkan di sini. -->
<script setup>
import AppHeader from './components/layout/Header.vue';
import AppFooter from './components/layout/Footer.vue';
</script>

<template>
  <app-header />

  <main>
    <!-- router-view adalah tempat komponen halaman (misal: HomeView) akan dirender. -->
    <!-- Tag <transition> memberikan efek fade saat berpindah halaman. -->
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
  padding: 2rem;
  max-width: 960px; /* Membatasi lebar konten agar mudah dibaca */
  margin: 0 auto; /* Memposisikan konten di tengah */
  min-height: calc(100vh - 150px); /* Mendorong footer ke bawah */
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

