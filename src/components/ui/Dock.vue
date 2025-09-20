<!-- File: src/components/ui/Dock.vue -->
<!-- (FILE BARU) Widget "Dock" interaktif ala macOS. -->
<script setup>
import { ref } from 'vue';

const dockRef = ref(null);

const apps = [
  { name: 'Home', icon: 'co-home', path: '/' },
  { name: 'Projects', icon: 'co-folder', path: '/projects' },
  { name: 'Mods', icon: 'io-game-controller', path: '/mods' },
  { name: 'About', icon: 'co-user', path: '/about' },
];

// Logika untuk efek pembesaran
const handleMouseMove = (event) => {
  if (!dockRef.value) return;
  const dockRect = dockRef.value.getBoundingClientRect();
  const mouseX = event.clientX;

  dockRef.value.querySelectorAll('.dock-item').forEach(item => {
    const itemRect = item.getBoundingClientRect();
    const itemCenter = itemRect.left + itemRect.width / 2;
    
    // Hitung jarak mouse dari tengah ikon
    const distance = Math.abs(mouseX - itemCenter);
    
    // Semakin dekat mouse, semakin besar skalanya
    const scale = Math.max(1, 2.5 - distance / 100);
    
    item.style.transform = `scale(${scale})`;
    item.style.transition = 'transform 0.1s';
  });
};

const handleMouseLeave = () => {
  if (!dockRef.value) return;
  dockRef.value.querySelectorAll('.dock-item').forEach(item => {
    item.style.transform = 'scale(1)';
  });
};
</script>

<template>
  <div class="dock-container glass-effect">
    <div class="dock-inner" ref="dockRef" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
      <router-link
        v-for="app in apps"
        :key="app.name"
        :to="app.path"
        class="dock-item"
        :aria-label="app.name"
      >
        <v-icon :name="app.icon" scale="2" />
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.dock-container {
  background: rgba(var(--card-bg-rgb), 0.4);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(var(--border-color-rgb), 0.2);
  border-radius: 20px;
  padding: 0.5rem;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dock-inner {
  display: flex;
  align-items: flex-end;
  gap: 1rem;
  padding: 0 1rem;
  height: 60px; /* Base height */
}

.dock-item {
  color: var(--text-color-primary);
  transform-origin: bottom;
  will-change: transform;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
