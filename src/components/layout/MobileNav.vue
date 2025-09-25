<!-- File: src/components/layout/MobileNav.vue -->
<!-- (DIPERBARUI) Menambahkan profil header untuk nuansa aplikasi yang lebih premium. -->
<script setup>
import Avatar from '../ui/Avatar.vue';

defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['close', 'open-settings']);

const openSettings = () => {
  emit('open-settings');
  emit('close');
};
</script>

<template>
  <div class="mobile-nav-overlay" :class="{ 'is-open': isOpen }" @click="emit('close')"></div>
  <aside class="mobile-nav-panel" :class="{ 'is-open': isOpen }">
    <div class="panel-header">
      <div class="profile-info">
        <Avatar />
        <span class="name">Jiya</span>
      </div>
    </div>
    <nav class="main-nav">
      <ul>
        <li><router-link to="/" @click="emit('close')"><v-icon name="co-home" /> Home</router-link></li>
        <li><router-link to="/mods" @click="emit('close')"><v-icon name="io-game-controller" /> Mods</router-link></li>
        <li><router-link to="/sky-clock" @click="emit('close')"><v-icon name="fa-star" /> Sky Clock</router-link></li>
        <li><router-link to="/contact" @click="emit('close')"><v-icon name="fa-envelope" /> Contact</router-link></li>
        <li><router-link to="/about" @click="emit('close')"><v-icon name="co-user" /> About</router-link></li>
      </ul>
    </nav>
    <div class="panel-footer">
      <button class="settings-link" @click="openSettings">
        <v-icon name="co-cog" />
        <span>System Preferences</span>
      </button>
    </div>
  </aside>
</template>

<style scoped>
/* Style tidak berubah, gunakan yang sudah ada */
.mobile-nav-overlay {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background-color: rgba(0, 0, 0, 0.3); backdrop-filter: blur(5px); -webkit-backdrop-filter: blur(5px);
  opacity: 0; visibility: hidden; transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 98;
}
.mobile-nav-overlay.is-open { opacity: 1; visibility: visible; }
.mobile-nav-panel {
  background: rgba(var(--card-bg-rgb), 0.7); backdrop-filter: blur(25px); -webkit-backdrop-filter: blur(25px);
  border-left: 1px solid rgba(var(--border-color-rgb), 0.1);
  position: fixed; top: 0; right: 0; width: 80%; max-width: 320px; height: 100%;
  transform: translateX(100%); transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
  z-index: 99; display: flex; flex-direction: column;
}
.mobile-nav-panel.is-open { transform: translateX(0); }

/* Header Panel Baru */
.panel-header {
  padding: 1.5rem;
  border-bottom: 1px solid rgba(var(--border-color-rgb), 0.1);
}
.profile-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.name {
  font-size: 1.2rem;
  font-weight: 600;
}

.main-nav { flex-grow: 1; padding: 1.5rem; }
ul { list-style: none; padding: 0; }
li { margin-bottom: 0.5rem; }
a {
  display: flex; align-items: center; gap: 1rem;
  padding: 0.75rem 1rem; border-radius: 8px; text-decoration: none;
  color: var(--text-color-primary); font-size: 1.1rem; font-weight: 500;
  transition: background-color 0.2s, color 0.2s;
}
a:hover, a.router-link-exact-active {
  background-color: rgba(var(--border-color-rgb), 0.2);
  color: var(--accent-color);
}
.panel-footer {
  padding: 1rem; border-top: 1px solid rgba(var(--border-color-rgb), 0.1);
}
.settings-link {
  display: flex; align-items: center; gap: 0.75rem; width: 100%;
  padding: 0.75rem 1rem; border-radius: 8px; background: none; border: none;
  font-size: 1rem; font-weight: 500; color: var(--text-color-secondary);
  cursor: pointer; transition: background-color 0.2s, color 0.2s;
}
.settings-link:hover {
  background-color: rgba(var(--border-color-rgb), 0.2);
  color: var(--text-color-primary);
}
</style>

