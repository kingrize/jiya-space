<!-- File: src/views/SkyClockView.vue -->
<!-- (DIPERBARUI) Menata ulang layout untuk memisahkan event Aktif dan Mendatang. -->
<script setup>
import { computed } from 'vue';
import { useEvents } from '../composables/useEvents.js';
import SkyEventCard from '../components/ui/SkyEventCard.vue';

const { events } = useEvents();

const activeEvents = computed(() => events.value.filter(e => e.status === 'Active'));
const upcomingEvents = computed(() => events.value.filter(e => e.status === 'Upcoming'));
</script>

<template>
  <div class="page-container fade-in-up">
    <div class="page-header">
      <h1 class="page-title">Sky Clock</h1>
      <p class="page-subtitle">Real-time event tracker for Sky: Children of the Light.</p>
    </div>
    
    <div class="events-section">
      <h2 class="section-title">Active Processes</h2>
      <div v-if="activeEvents.length" class="events-grid">
        <SkyEventCard 
          v-for="event in activeEvents" 
          :key="event.id" 
          :event="event"
          v-animate-on-scroll
        />
      </div>
      <p v-else class="no-events">No events are currently active.</p>
    </div>

    <div class="events-section">
      <h2 class="section-title">Scheduled Tasks</h2>
      <div class="events-grid">
        <SkyEventCard 
          v-for="(event, index) in upcomingEvents" 
          :key="event.id" 
          :event="event"
          v-animate-on-scroll
          :style="{ '--delay': `${index * 0.1}s` }"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-header {
  text-align: center;
  margin-bottom: 3rem;
}
.page-title { font-size: 2.5rem; font-weight: 700; }
.page-subtitle { color: var(--text-color-secondary); font-size: 1.1rem; margin-top: 0.5rem; }

.events-section {
  margin-bottom: 3rem;
}
.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid rgba(var(--border-color-rgb), 0.2);
  padding-bottom: 0.75rem;
  font-family: 'Fira Code', monospace;
  color: var(--text-color-secondary);
}
.section-title::before {
  content: '~$ ';
  color: var(--accent-color);
}

.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
}
.events-grid > * {
  transition-delay: var(--delay, 0s);
}

.no-events {
  color: var(--text-color-secondary);
  text-align: center;
  padding: 2rem;
  background: rgba(var(--card-bg-rgb), 0.2);
  border-radius: 16px;
  font-family: 'Fira Code', monospace;
}
</style>

