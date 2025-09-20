<!-- File: src/App.vue -->
<!-- (DIPERBARUI) Mengelola logika untuk menampilkan Boot Screen. -->
<script setup>
import { ref, computed, onMounted, onUnmounted, watchEffect } from 'vue';
import { useHead } from '@vueuse/head';
import { useRoute } from 'vue-router';
import AppHeader from './components/layout/Header.vue';
import AppFooter from './components/layout/Footer.vue';
import CommandPalette from './components/ui/CommandPalette.vue';
import SettingsPanel from './components/ui/SettingsPanel.vue';
import NotificationToast from './components/ui/NotificationToast.vue';
import BootScreen from './components/ui/BootScreen.vue'; // <-- Impor baru
import { useSettings } from './composables/useSettings';

const isLoading = ref(true); // <-- State baru untuk mengontrol pemuatan

onMounted(() => {
  // Simulasikan waktu "booting" selama 2.5 detik
  setTimeout(() => {
    isLoading.value = false;
  }, 2500);
});

const route = useRoute();
const isCommandPaletteOpen = ref(false);
const isSettingsPanelOpen = ref(false);
const { settings } = useSettings();

watchEffect(() => {
  document.documentElement.style.setProperty('--accent-color', settings.value.accentColor);
  document.body.classList.toggle('blobs-hidden', !settings.value.showBlobs);
  document.body.classList.toggle('grid-hidden', !settings.value.showGrid);
});

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
  <!-- Transisi untuk Boot Screen -->
  <Transition name="boot-fade">
    <BootScreen v-if="isLoading" />
  </Transition>

  <!-- Tampilkan aplikasi utama setelah loading selesai -->
  <div v-if="!isLoading" class="app-wrapper">
    <app-header @open-settings="isSettingsPanelOpen = true" />
    <main>
      <router-view v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </router-view>
    </main>
    <app-footer />
    
    <CommandPalette :is-open="isCommandPaletteOpen" @close="isCommandPaletteOpen = false" />
    <SettingsPanel :is-open="isSettingsPanelOpen" @close="isSettingsPanelOpen = false" />
    <NotificationToast />
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

