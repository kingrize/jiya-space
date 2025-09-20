<!-- File: src/App.vue -->
<!-- (DIPERBARUI) Menambahkan container untuk notifikasi toast. -->
<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useHead } from '@vueuse/head';
import { useRoute } from 'vue-router';
import AppHeader from './components/layout/Header.vue';
import AppFooter from './components/layout/Footer.vue';
import CommandPalette from './components/ui/CommandPalette.vue';
import NotificationToast from './components/ui/NotificationToast.vue'; // <-- Impor baru

const route = useRoute();
const isCommandPaletteOpen = ref(false);

const handleGlobalKeydown = (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
    event.preventDefault();
    isCommandPaletteOpen.value = !isCommandPaletteOpen.value;
  }
};

onMounted(() => window.addEventListener('keydown', handleGlobalKeydown));
onUnmounted(() => window.removeEventListener('keydown', handleGlobalKeydown));

useHead(computed(() => ({
  title: route.meta.title || 'JiyaOS',
  meta: [ { name: 'description', content: route.meta.description || 'Personal space for Jiya' } ],
})));
</script>

<template>
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
    
    <CommandPalette :is-open="isCommandPaletteOpen" @close="isCommandPaletteOpen = false" />
    <NotificationToast /> <!-- <-- Tambahkan di sini -->
  </div>
</template>

<style>
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
.app-wrapper {
  position: relative;
  z-index: 1;
}
</style>

