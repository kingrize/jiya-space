<!-- File: src/components/layout/Header.vue -->
<!-- Header sekarang memiliki navigasi desktop dan seluler yang fungsional. -->
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';
import Avatar from '../ui/Avatar.vue';
import ThemeToggle from '../ui/ThemeToggle.vue';
import HamburgerButton from '../ui/HamburgerButton.vue';
import MobileNav from './MobileNav.vue';

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);
const handleScroll = () => { isScrolled.value = window.scrollY > 0; };
const toggleMobileMenu = () => { isMobileMenuOpen.value = !isMobileMenuOpen.value; };
onMounted(() => { window.addEventListener('scroll', handleScroll); });
onUnmounted(() => { window.removeEventListener('scroll', handleScroll); });
</script>

<template>
  <header class="header-container" :class="{ 'scrolled': isScrolled }">
    <div class="profile-section">
      <router-link to="/" class="profile-link">
        <Avatar />
        <div class="status-container">
          <span class="name">Jiya</span>
          <span class="status">Currently building...</span>
        </div>
      </router-link>
    </div>

    <nav class="desktop-nav">
      <router-link to="/">Home</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/about">About</router-link>
      <ThemeToggle />
    </nav>

    <div class="mobile-nav-toggle">
      <HamburgerButton :active="isMobileMenuOpen" @toggle="toggleMobileMenu" />
    </div>
  </header>
  <MobileNav :is-open="isMobileMenuOpen" @close="toggleMobileMenu" />
</template>

<style scoped>
.header-container { position: sticky; top: 0; z-index: 10; display: flex; justify-content: space-between; align-items: center; padding: 1rem 2rem; max-width: 960px; margin: 0 auto; width: 100%; transition: background-color 0.3s ease, border-bottom-color 0.3s ease; border-bottom: 1px solid transparent; }
.header-container.scrolled { background-color: var(--header-bg); border-bottom-color: var(--border-color); -webkit-backdrop-filter: blur(8px); backdrop-filter: blur(8px); }
.profile-section { display: flex; align-items: center; gap: 0.75rem; }
.profile-link { display: flex; align-items: center; gap: 0.75rem; text-decoration: none; }
.status-container { display: flex; flex-direction: column; }
.name { font-weight: 600; font-size: 1.1rem; color: var(--text-color-primary); }
.status { font-size: 0.85rem; color: var(--text-color-secondary); }
.desktop-nav { display: flex; align-items: center; gap: 1.5rem; }
.desktop-nav a { text-decoration: none; color: var(--text-color-secondary); font-weight: 500; transition: color 0.2s; }
.desktop-nav a:hover { color: var(--text-color-primary); }
.desktop-nav a.router-link-exact-active { color: var(--accent-color); font-weight: 600; }
.mobile-nav-toggle { display: none; }
@media (max-width: 768px) {
  .header-container { padding: 1rem; }
  .desktop-nav { display: none; }
  .mobile-nav-toggle { display: block; }
}
</style>

