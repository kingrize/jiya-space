<!-- File: src/components/layout/Header.vue -->
<!-- (DIPERBARUI) Mengintegrasikan logika Now Playing dan status acak. -->
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Avatar from '../ui/Avatar.vue';
import ThemeToggle from '../ui/ThemeToggle.vue';
import HamburgerButton from '../ui/HamburgerButton.vue';
import MobileNav from './MobileNav.vue';

// State untuk menu mobile
const isMobileMenuOpen = ref(false);

// State untuk data Spotify dan status
const song = ref(null);
const status = ref('Loading status...');
let intervalId = null;

// Daftar status acak jika tidak ada musik yang diputar
const randomStatuses = [
  'Crafting new ideas.',
  'Exploring the web.',
  'Probably drinking coffee.',
  'Building digital things.',
  'Thinking about design.',
];

// Fungsi untuk mengambil data dari serverless function kita
const fetchNowPlaying = async () => {
  try {
    const response = await fetch('/.netlify/functions/get-spotify-now-playing');
    if (!response.ok) throw new Error();
    
    const data = await response.json();
    song.value = data;

    // Jika tidak ada lagu yang diputar, pilih status acak
    if (!data.isPlaying) {
      status.value = randomStatuses[Math.floor(Math.random() * randomStatuses.length)];
    }
  } catch (error) {
    console.error('Error fetching now playing data:', error);
    song.value = { isPlaying: false };
    status.value = randomStatuses[Math.floor(Math.random() * randomStatuses.length)];
  }
};

// Panggil fungsi saat komponen dimuat dan set interval untuk refresh
onMounted(() => {
  fetchNowPlaying();
  intervalId = setInterval(fetchNowPlaying, 30000); // Refresh setiap 30 detik
});

// Hentikan interval saat komponen dihancurkan untuk mencegah memory leak
onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>

<template>
  <header class="header-container">
    <div class="header-content">
      <div class="profile-section">
        <Avatar />
        <div class="status-container">
          <span class="name">Jiya</span>
          <!-- Tampilan status dinamis -->
          <div class="status">
            <template v-if="song && song.isPlaying">
              <span>🎵 {{ song.title }} - {{ song.artist }}</span>
            </template>
            <template v-else>
              <span>{{ status }}</span>
            </template>
          </div>
        </div>
      </div>

      <!-- Navigasi Desktop -->
      <nav class="desktop-nav">
        <router-link to="/">Home</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/about">About</router-link>
        <ThemeToggle />
      </nav>

      <!-- Tombol untuk Navigasi Mobile -->
      <div class="mobile-nav-toggle">
        <HamburgerButton :is-open="isMobileMenuOpen" @toggle="isMobileMenuOpen = !isMobileMenuOpen" />
      </div>
    </div>

    <!-- Panel Navigasi Mobile -->
    <MobileNav :is-open="isMobileMenuOpen" @close="isMobileMenuOpen = false" />
  </header>
</template>

<style scoped>
/* Style tidak berubah, gunakan yang sudah ada */
.header-container {
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 50;
  transition: background-color 0.3s, border-bottom-color 0.3s;
}

.header-container.scrolled {
  background-color: var(--header-bg);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-color);
}

.header-content {
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.profile-section {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  overflow: hidden;
}

.status-container {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.name {
  font-weight: 600;
  font-size: 1.1rem;
}

.status {
  font-size: 0.85rem;
  color: var(--text-color-secondary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.desktop-nav {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.desktop-nav a {
  text-decoration: none;
  color: var(--text-color-secondary);
  font-weight: 500;
  transition: color 0.2s;
}

.desktop-nav a:hover,
.desktop-nav a.router-link-exact-active {
  color: var(--text-color-primary);
}

.mobile-nav-toggle {
  display: none;
}

@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }
  .mobile-nav-toggle {
    display: block;
  }
  .header-container {
    padding: 1rem;
  }
}
</style>

