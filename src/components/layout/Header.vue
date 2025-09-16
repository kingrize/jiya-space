<!-- File: src/components/layout/Header.vue -->
<!-- Komponen header yang sekarang memiliki fungsionalitas sticky dan efek visual saat scroll. -->
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Avatar from '../ui/Avatar.vue';
import ThemeToggle from '../ui/ThemeToggle.vue';

// Membuat variabel reaktif untuk melacak status scroll.
const isScrolled = ref(false);

// Fungsi yang akan dipanggil setiap kali pengguna menggulir halaman.
const handleScroll = () => {
  // Jika posisi scroll vertikal (window.scrollY) lebih besar dari 0,
  // set isScrolled menjadi true. Jika tidak, set menjadi false.
  isScrolled.value = window.scrollY > 0;
};

// onMounted adalah hook yang berjalan setelah komponen terpasang di DOM.
onMounted(() => {
  // Kita "mendengarkan" event scroll pada window.
  window.addEventListener('scroll', handleScroll);
});

// onUnmounted berjalan tepat sebelum komponen dihancurkan.
onUnmounted(() => {
  // Penting untuk membersihkan event listener untuk menghindari memory leak.
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <!-- Kita binding class 'scrolled' secara dinamis. -->
  <!-- Class ini akan ditambahkan hanya jika isScrolled bernilai true. -->
  <header class="header-container" :class="{ 'scrolled': isScrolled }">
    <div class="profile-section">
      <Avatar />
      <div class="status-container">
        <span class="name">Jiya</span>
        <span class="status">Currently building...</span>
      </div>
    </div>
    <ThemeToggle />
  </header>
</template>

<style scoped>
.header-container {
  /* Membuat header "lengket" di bagian atas viewport. */
  position: sticky;
  top: 0;
  z-index: 10; /* Memastikan header selalu di atas konten lain. */

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 960px;
  margin: 0 auto;
  width: 100%;

  /* Transisi untuk perubahan background dan border. */
  transition: background-color 0.3s ease, border-bottom-color 0.3s ease;
  border-bottom: 1px solid transparent; /* Border awal transparan. */
}

/* Style ini hanya akan diterapkan ketika header memiliki class 'scrolled'. */
.header-container.scrolled {
  background-color: var(--header-bg);
  border-bottom-color: var(--border-color);

  /* Efek blur pada latar belakang di belakang header. */
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
}

.profile-section {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.status-container {
  display: flex;
  flex-direction: column;
}

.name {
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--text-color-primary);
}

.status {
  font-size: 0.85rem;
  color: var(--text-color-secondary);
}
</style>

