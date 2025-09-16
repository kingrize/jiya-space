<!-- File: src/components/ui/ThemeToggle.vue -->
<!-- Komponen tombol untuk mengganti antara light dan dark mode. -->
<script setup>
import { useDark, useToggle } from '@vueuse/core';

// useDark() secara otomatis mendeteksi preferensi OS,
// menyimpan pilihan pengguna, dan menambah/menghapus kelas '.dark' pada <html>.
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <button @click="toggleDark()" class="theme-toggle-button" aria-label="Toggle theme">
    <!-- Menampilkan ikon yang berbeda berdasarkan tema saat ini. -->
    <v-icon v-if="isDark" name="fa-sun" />
    <v-icon v-else name="fa-moon" />
  </button>
</template>

<style scoped>
.theme-toggle-button {
  background-color: transparent;
  border: 1px solid var(--border-color);
  color: var(--text-color-primary);
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

