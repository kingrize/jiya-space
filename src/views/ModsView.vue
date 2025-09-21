<!-- File: src/views/ModsView.vue -->
<!-- (DIPERBARUI) Dirombak total dengan filter "Tabs" dan layout yang disempurnakan. -->
<script setup>
import { ref, computed } from 'vue';
import ModCard from '../components/ui/ModCard.vue';
import { mods } from '../data/mods.js';

const categories = ['All', 'Game Mod', 'App Mod', 'Script'];
const activeFilter = ref('All');

const filteredMods = computed(() => {
  if (activeFilter.value === 'All') {
    return mods;
  }
  return mods.filter(mod => mod.category === activeFilter.value);
});
</script>

<template>
  <div class="page-container fade-in-up">
    <div class="page-header">
      <h1 class="page-title">Mod Database</h1>
      <p class="page-subtitle">Welcome to the central repository for all my game modifications.</p>
    </div>

    <!-- Filter "Tabs" Baru -->
    <div class="filter-tabs" v-animate-on-scroll>
      <button 
        v-for="category in categories" 
        :key="category"
        :class="{ active: activeFilter === category }"
        @click="activeFilter = category"
      >
        <span>{{ category }}</span>
      </button>
    </div>
    
    <TransitionGroup name="list" tag="div" class="mods-grid">
      <ModCard 
        v-for="(mod, index) in filteredMods" 
        :key="mod.id"
        :mod="mod"
        v-animate-on-scroll
        :style="{ '--delay': `${index * 0.1}s` }"
      />
    </TransitionGroup>
  </div>
</template>

<style scoped>
.page-header {
  text-align: center;
  margin-bottom: 3rem;
}
.page-title { font-size: 2.5rem; font-weight: 700; }
.page-subtitle { color: var(--text-color-secondary); font-size: 1.1rem; margin-top: 0.5rem; }

/* Filter "Tabs" Baru */
.filter-tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  border-bottom: 1px solid rgba(var(--border-color-rgb), 0.2);
}
.filter-tabs button {
  background: transparent;
  border: none;
  color: var(--text-color-secondary);
  padding: 1rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;
}
.filter-tabs button::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--accent-color);
  transform: scaleX(0);
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}
.filter-tabs button:hover,
.filter-tabs button.active {
  color: var(--text-color-primary);
}
.filter-tabs button.active::after {
  transform: scaleX(1);
}

.mods-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
  position: relative; /* Diperlukan untuk transisi */
}

/* Transisi untuk pemfilteran */
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(30px);
}
.list-leave-active {
  position: absolute;
  z-index: -1;
}
</style>

