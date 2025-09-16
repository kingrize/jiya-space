<script setup>
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <button @click="toggleDark()" class="theme-toggle-button" aria-label="Toggle theme">
    <v-icon v-if="isDark" name="fa-sun" />
    <v-icon v-else name="fa-moon" />
  </button>
</template>

<style scoped>
.theme-toggle-button {
  background-color: transparent;
  border: 1px solid #ccc; /* Nanti kita sesuaikan dengan variabel warna */
  color: var(--text-color-primary); /* Agar warna ikon ikut berubah */
  padding: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  transition: background-color 0.2s, border-color 0.2s;
}

.theme-toggle-button:hover {
  background-color: rgba(128, 128, 128, 0.1);
}
</style>