<!-- File: src/components/layout/Header.vue -->
<!-- (DIPERBARUI) Dirombak total dengan desain "Application Menubar" yang baru. -->
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Avatar from '../ui/Avatar.vue';
import SettingsButton from '../ui/SettingsButton.vue';
import HamburgerButton from '../ui/HamburgerButton.vue';
import MobileNav from './MobileNav.vue';

const emit = defineEmits(['open-settings']);
const isMobileMenuOpen = ref(false);
const scrolled = ref(false);

const handleScroll = () => { scrolled.value = window.scrollY > 10; };
const song = ref(null);
const status = ref('Loading status...');
let intervalId = null;
const randomStatuses = [
  'Crafting new ideas.', 'Exploring the web.', 'Probably drinking coffee.',
  'Building digital things.', 'Thinking about design.',
];
const fetchNowPlaying = async () => {
  try {
    const response = await fetch('/.netlify/functions/get-spotify-now-playing');
    if (!response.ok) throw new Error();
    const data = await response.json();
    song.value = data;
    if (!data.isPlaying) {
      status.value = randomStatuses[Math.floor(Math.random() * randomStatuses.length)];
    }
  } catch (error) {
    console.error('Error fetching now playing data:', error);
    song.value = { isPlaying: false };
    status.value = randomStatuses[Math.floor(Math.random() * randomStatuses.length)];
  }
};
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  fetchNowPlaying();
  intervalId = setInterval(fetchNowPlaying, 30000);
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  if (intervalId) { clearInterval(intervalId); }
});
</script>

<template>
  <header class="header-container" :class="{ scrolled: scrolled }">
    <div class="header-content">
      <router-link to="/" class="logo-section">
        <v-icon name="co-command" />
        <span>JiyaOS</span>
      </router-link>

      <nav class="desktop-nav">
        <router-link to="/">Home</router-link>
        <router-link to="/mods">Mods</router-link>
        <router-link to="/sky-clock">Sky Clock</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>

      <div class="controls-section">
        <SettingsButton @open="emit('open-settings')" />
        <div class="profile-info">
          <span class="name">Jiya</span>
          <div class="status">
            <template v-if="song && song.isPlaying">
              <span>🎵 Now Playing...</span>
            </template>
            <template v-else>
              <span>{{ status }}</span>
            </template>
          </div>
        </div>
        <Avatar />
      </div>

      <div class="mobile-nav-toggle">
        <HamburgerButton :active="isMobileMenuOpen" @toggle="isMobileMenuOpen = !isMobileMenuOpen" />
      </div>
    </div>
  </header>
  <MobileNav 
    :is-open="isMobileMenuOpen" 
    @close="isMobileMenuOpen = false" 
    @open-settings="emit('open-settings')" 
  />
</template>

<style scoped>
.header-container {
  padding: 0.75rem 2rem; /* Padding disesuaikan */
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: var(--header-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(var(--border-color-rgb), 0.1);
}
.header-content {
  max-width: 1200px; /* Lebar maksimal diperbesar */
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  color: var(--text-color-primary);
}

.desktop-nav {
  display: flex;
  align-items: center;
  gap: 2.5rem;
}
.desktop-nav a {
  text-decoration: none;
  color: var(--text-color-secondary);
  font-weight: 500;
  transition: color 0.2s;
  position: relative;
}
.desktop-nav a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--accent-color);
  transform: scaleX(0);
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}
.desktop-nav a:hover, .desktop-nav a.router-link-exact-active {
  color: var(--text-color-primary);
}
.desktop-nav a.router-link-exact-active::after {
  transform: scaleX(1);
}

.controls-section {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.profile-info {
  text-align: right;
}
.name {
  font-weight: 600;
  font-size: 1rem;
}
.status {
  font-size: 0.8rem;
  color: var(--text-color-secondary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 150px;
}

.mobile-nav-toggle { display: none; }
@media (max-width: 960px) {
  .desktop-nav, .controls-section {
    display: none;
  }
  .mobile-nav-toggle {
    display: block;
  }
}
</style>

