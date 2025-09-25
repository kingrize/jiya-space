<!-- File: src/components/ui/Dock.vue -->
<!-- (DIPERBARUI) Menghapus 'Projects' dan menambahkan 'Contact' ke dock. -->
<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const dockRef = ref(null);
const route = useRoute();

const apps = [
  { name: 'Home', icon: 'co-home', path: '/' },
  { name: 'Mods', icon: 'io-game-controller', path: '/mods' },
  { name: 'Sky Clock', icon: 'fa-star', path: '/sky-clock' },
  { name: 'Contact', icon: 'fa-envelope', path: '/contact' },
  { name: 'About', icon: 'co-user', path: '/about' },
];

const handleMouseMove = (event) => {
  if (!dockRef.value) return;
  const dockRect = dockRef.value.getBoundingClientRect();
  const mouseX = event.clientX;

  dockRef.value.querySelectorAll('.dock-item').forEach(item => {
    const itemRect = item.getBoundingClientRect();
    const itemCenter = itemRect.left + itemRect.width / 2;
    const distance = Math.abs(mouseX - itemCenter);
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
  <div class="dock-container">
    <div class="dock-inner" ref="dockRef" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
      <router-link
        v-for="app in apps"
        :key="app.name"
        :to="app.path"
        class="dock-item"
        :aria-label="app.name"
      >
        <v-icon :name="app.icon" scale="2" />
        <div class="active-indicator" v-if="route.path === app.path"></div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.dock-container {
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
  height: 60px;
}
.dock-item {
  color: var(--text-color-primary);
  transform-origin: bottom;
  will-change: transform;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-bottom: 10px;
}
.active-indicator {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--accent-color);
  position: absolute;
  bottom: 0;
}
</style>

