<!-- File: src/views/ModsView.vue -->
<!-- (DIPERBARUI) Menambahkan UI dan logika untuk sistem filter. -->
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

    <!-- Filter Buttons -->
    <div class="filter-container">
      <button 
        v-for="category in categories" 
        :key="category"
        :class="{ active: activeFilter === category }"
        @click="activeFilter = category"
      >
        {{ category }}
      </button>
    </div>
    
    <!-- Animated Grid -->
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

/* Filter Container */
.filter-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}
.filter-container button {
  background: rgba(var(--card-bg-rgb), 0.4);
  border: 1px solid rgba(var(--border-color-rgb), 0.1);
  color: var(--text-color-secondary);
  padding: 0.5rem 1.25rem;
  border-radius: 9999px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}
.filter-container button:hover {
  background: rgba(var(--border-color-rgb), 0.2);
  color: var(--text-color-primary);
}
.filter-container button.active {
  background: var(--accent-color);
  color: white;
  border-color: var(--accent-color);
}

.mods-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
}

/* Transition for filtering */
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
}
</style>

