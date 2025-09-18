<!-- File: src/components/ui/DisclaimerBanner.vue -->
<!-- (DIPERBARUI) Desain dirombak dengan warna baru dan perbaikan bug responsif. -->
<script setup>
import { ref } from 'vue';

const isVisible = ref(true);
</script>

<template>
  <div v-if="isVisible" class="disclaimer-banner">
    <div class="icon-wrapper">
      <v-icon name="fa-exclamation-triangle" scale="1.5" />
    </div>
    <div class="text-wrapper">
      <h4>Risk Warning</h4>
      <p>Please be aware that using third-party mods, scripts, or modified applications can potentially violate a game's Terms of Service. This may result in temporary or permanent suspension of your account. Use at your own risk. The developer is not responsible for any consequences that may arise from the use of these files.</p>
    </div>
    <button @click="isVisible = false" class="close-button" aria-label="Close warning">
      <v-icon name="fa-times" />
    </button>
  </div>
</template>

<style scoped>
.disclaimer-banner {
  /* Palet warna baru yang lebih lembut */
  background-color: var(--warning-bg);
  border: 1px solid var(--warning-border);
  color: var(--warning-text);
  
  border-radius: 12px;
  padding: 1rem 1.5rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

/* Variabel warna untuk Light & Dark mode */
:root {
  --warning-bg: #FFFBEB;
  --warning-border: #FBBF24;
  --warning-text: #B45309;
  --warning-header: #92400E;
}
:root.dark {
  --warning-bg: #4A3A1A;
  --warning-border: #FBBF24;
  --warning-text: #FEF3C7;
  --warning-header: #FEF9C3;
}

.icon-wrapper {
  flex-shrink: 0;
  margin-top: 0.25rem; /* Menyelaraskan ikon dengan teks */
  color: var(--warning-border);
}

/* PERBAIKAN BUG: Memastikan wrapper teks bisa melebar */
.text-wrapper {
  flex-grow: 1;
  min-width: 0; /* Mencegah overflow pada flex item */
}

.text-wrapper h4 {
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: var(--warning-header);
}

.text-wrapper p {
  font-size: 0.9rem;
  line-height: 1.6;
}

.close-button {
  background: none;
  border: none;
  color: var(--warning-text);
  cursor: pointer;
  margin-left: auto;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
  flex-shrink: 0;
}
.close-button:hover {
  background: rgba(0, 0, 0, 0.1);
}
:root.dark .close-button:hover {
  background: rgba(255, 255, 255, 0.1);
}
</style>

