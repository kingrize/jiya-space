<!-- File: src/components/layout/MobileNav.vue -->
<!-- (DIPERBARUI) Dirombak total dengan desain "JiyaOS" dan tautan Proyek ditambahkan kembali. -->
<script setup>
import ThemeToggle from '../ui/ThemeToggle.vue';

defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['close']);
</script>

<template>
  <!-- Overlay gelap di belakang panel -->
  <div class="mobile-nav-overlay" :class="{ 'is-open': isOpen }" @click="emit('close')"></div>

  <!-- Panel navigasi itu sendiri -->
  <aside class="mobile-nav-panel" :class="{ 'is-open': isOpen }">
    <div class="panel-header">
      <span class="panel-title">JiyaOS</span>
    </div>
    <nav class="main-nav">
      <ul>
        <li><router-link to="/" @click="emit('close')"><v-icon name="co-home" /> Home</router-link></li>
        <!-- Tautan Proyek ditambahkan kembali di sini -->
        <li><router-link to="/projects" @click="emit('close')"><v-icon name="co-folder" /> Projects</router-link></li>
        <li><router-link to="/about" @click="emit('close')"><v-icon name="co-user" /> About</router-link></li>
      </ul>
    </nav>
    <div class="panel-footer">
      <ThemeToggle />
    </div>
  </aside>
</template>

<style scoped>
.mobile-nav-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 98;
}

.mobile-nav-overlay.is-open {
  opacity: 1;
  visibility: visible;
}

.mobile-nav-panel {
  /* Efek Kaca Buram (Frosted Glass) */
  background: rgba(var(--card-bg-rgb), 0.7);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  border-left: 1px solid rgba(var(--border-color-rgb), 0.1);

  position: fixed;
  top: 0;
  right: 0;
  width: 80%;
  max-width: 320px;
  height: 100%;
  
  transform: translateX(100%);
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1); /* Transisi lebih halus */
  z-index: 99;
  
  display: flex;
  flex-direction: column;
}

.mobile-nav-panel.is-open {
  transform: translateX(0);
}

.panel-header {
  padding: 1rem 1.5rem;
  border-bottom: 1px solid rgba(var(--border-color-rgb), 0.1);
}

.panel-title {
  font-weight: 600;
  color: var(--text-color-secondary);
}

.main-nav {
  flex-grow: 1;
  padding: 2rem 1.5rem;
}

ul {
  list-style: none;
}

li {
  margin-bottom: 0.5rem;
}

a {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  color: var(--text-color-primary);
  font-size: 1.1rem;
  font-weight: 500;
  transition: background-color 0.2s, color 0.2s;
}

a:hover, a.router-link-exact-active {
  background-color: rgba(var(--border-color-rgb), 0.2);
  color: var(--accent-color);
}

.panel-footer {
  padding: 1.5rem;
  border-top: 1px solid rgba(var(--border-color-rgb), 0.1);
  display: flex;
  justify-content: center;
}
</style>

