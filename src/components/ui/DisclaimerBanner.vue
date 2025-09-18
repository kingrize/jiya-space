<!-- File: src/components/ui/DisclaimerBanner.vue -->
<!-- (DIPERBARUI) Dirombak total dengan layout Flexbox yang lebih kuat dan teks yang disederhanakan. -->
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
      <p>Using mods or scripts may violate a game's Terms of Service and could result in an account ban. Please use these files at your own risk.</p>
    </div>
    <button @click="isVisible = false" class="close-button" aria-label="Close warning">
      <v-icon name="fa-times" />
    </button>
  </div>
</template>

<style scoped>
.disclaimer-banner {
  background-color: var(--warning-bg);
  border: 1px solid var(--warning-border);
  color: var(--warning-text);
  border-radius: 12px;
  padding: 1rem 1.5rem;
  margin-bottom: 2rem;
  
  /* PERBAIKAN: Menggunakan Flexbox dengan properti yang benar */
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

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
  margin-top: 0.25rem;
  color: var(--warning-border);
}

.text-wrapper {
  flex: 1; /* Memungkinkan elemen ini untuk membesar */
  min-width: 0; /* Trik klasik untuk mencegah overflow teks di Flexbox */
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

