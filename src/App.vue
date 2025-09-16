<script setup>
import AppHeader from './components/layout/Header.vue';
import AppFooter from './components/layout/Footer.vue';
</script>

<template>
  <app-header />

  <main>
    <router-view /> </main>

  <app-footer />
</template>

<style>
/* Reset CSS dasar untuk konsistensi */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

main {
  padding: 2rem;
  min-height: calc(100vh - 150px);
  max-width: 960px; /* Batasi lebar konten agar nyaman dibaca */
  margin: 0 auto; /* Posisikan konten di tengah */
}
</style>