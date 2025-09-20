<!-- File: src/views/SkyClockView.vue -->
<!-- (DIPERBARUI) Dirombak total dengan desain yang disempurnakan dan perbaikan bug responsif. -->
<script setup>
import { computed } from 'vue';
import { useEvents } from '../composables/useEvents.js';

const { events } = useEvents();

// Memisahkan event menjadi dua grup untuk tampilan yang lebih baik
const activeEvents = computed(() => events.value.filter(e => e.status === 'Active'));
const upcomingEvents = computed(() => events.value.filter(e => e.status === 'Upcoming'));
</script>

<template>
  <div class="page-container fade-in-up">
    <div class="page-header">
      <h1 class="page-title">Sky Clock</h1>
      <p class="page-subtitle">Real-time event tracker for Sky: Children of the Light.</p>
    </div>
    
    <div class="schedule-window" v-animate-on-scroll>
      <div class="window-header">JiyaOS Process Scheduler</div>
      <div class="table-container">
        <!-- Bagian Event Aktif -->
        <div class="events-section">
          <h2 class="section-title">Active Processes</h2>
          <div v-if="activeEvents.length" class="events-list">
            <div 
              v-for="event in activeEvents" 
              :key="event.id"
              class="table-row active"
              :style="{ '--event-color': event.color }"
            >
              <div class="col-icon">
                <v-icon :name="event.icon" scale="1.5" />
              </div>
              <div class="col-event">
                <span class="event-name">{{ event.name }}</span>
                <span class="event-status">Active</span>
              </div>
              <div class="col-timer">
                <span>{{ event.countdown }}</span>
              </div>
              <div class="progress-bar-container">
                <div class="progress-bar" :style="{ width: `${event.progress}%` }"></div>
              </div>
            </div>
          </div>
          <p v-else class="no-events">No events are currently active.</p>
        </div>
        
        <!-- Bagian Event Mendatang -->
        <div class="events-section">
           <h2 class="section-title">Scheduled Tasks</h2>
           <div class="events-list">
            <div 
              v-for="(event, index) in upcomingEvents" 
              :key="event.id"
              class="table-row"
              :style="{ '--delay': `${index * 0.1}s`, '--event-color': event.color }"
              v-animate-on-scroll
            >
              <div class="col-icon">
                <v-icon :name="event.icon" scale="1.5" />
              </div>
              <div class="col-event">
                <span class="event-name">{{ event.name }}</span>
                <span class="event-status">Upcoming</span>
              </div>
              <div class="col-timer">
                <span>{{ event.countdown }}</span>
              </div>
              <div class="progress-bar-container">
                <div class="progress-bar" :style="{ width: `${event.progress}%` }"></div>
              </div>
            </div>
          </div>
        </div>
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

.schedule-window {
  background: rgba(var(--card-bg-rgb), 0.4);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  border: 1px solid rgba(var(--border-color-rgb), 0.1);
  border-radius: 16px;
  overflow: hidden;
  max-width: 800px;
  margin: 0 auto;
}
.window-header {
  background-color: rgba(var(--card-bg-rgb), 0.3);
  padding: 0.5rem 1rem;
  border-bottom: 1px solid rgba(var(--border-color-rgb), 0.1);
  color: var(--text-color-secondary);
  font-family: 'Fira Code', monospace;
  font-size: 0.8rem;
  text-align: center;
}

.table-container {
  padding: 1.5rem;
}

.events-section {
  margin-bottom: 2rem;
}
.events-section:last-child {
  margin-bottom: 0;
}

.section-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  font-family: 'Fira Code', monospace;
  color: var(--text-color-secondary);
}
.section-title::before {
  content: '~$ ';
  color: var(--accent-color);
}

.events-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.table-row {
  display: grid;
  grid-template-columns: 40px 1fr auto; /* Kolom ikon lebih kecil */
  grid-template-areas:
    "icon event timer"
    "progress progress progress";
  gap: 0 1rem;
  align-items: center;
  padding: 1rem 1.25rem;
  border-radius: 12px;
  transition: background-color 0.2s, transform 0.2s;
  border: 1px solid transparent;
}
.table-row:hover {
  background-color: rgba(var(--border-color-rgb), 0.1);
  transform: scale(1.02);
}

.table-row.active {
  border-color: rgba(var(--event-color), 0.5);
  box-shadow: 0 0 20px rgba(var(--event-color), 0.1);
}

.col-icon {
  grid-area: icon;
  color: var(--event-color);
  opacity: 0.6;
  transition: opacity 0.3s, transform 0.3s;
}
.table-row.active .col-icon {
  opacity: 1;
}
.table-row:hover .col-icon {
  transform: scale(1.1);
}

.col-event {
  grid-area: event;
  line-height: 1.4;
  min-width: 0; /* Mencegah teks mendorong layout */
}
.event-name {
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--text-color-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.event-status {
  display: block;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-color-secondary);
  text-transform: capitalize;
}
.table-row.active .event-status {
  color: var(--event-color);
  font-weight: 600;
}
.table-row.active .event-status::before {
  content: '';
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--event-color);
  margin-right: 0.5rem;
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(var(--event-color), 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(var(--event-color), 0); }
  100% { box-shadow: 0 0 0 0 rgba(var(--event-color), 0); }
}

.col-timer {
  grid-area: timer;
  font-family: 'Fira Code', monospace;
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--text-color-primary);
}

.progress-bar-container {
  grid-area: progress;
  margin-top: 1rem;
  width: 100%;
  height: 6px;
  background-color: rgba(var(--border-color-rgb), 0.2);
  border-radius: 3px;
  overflow: hidden;
}
.progress-bar {
  height: 100%;
  background-color: var(--text-color-secondary);
  opacity: 0.5;
  border-radius: 3px;
  transition: width 1s linear;
}
.table-row.active .progress-bar {
  background-color: var(--event-color);
  opacity: 1;
}

.no-events {
  color: var(--text-color-secondary);
  text-align: center;
  padding: 2rem;
  background: rgba(var(--card-bg-rgb), 0.2);
  border-radius: 12px;
  font-family: 'Fira Code', monospace;
}

/* PERBAIKAN RESPONSIVITAS MOBILE */
@media (max-width: 500px) {
  .table-row {
    grid-template-columns: 40px 1fr;
    grid-template-areas:
      "icon event"
      "timer timer"
      "progress progress";
    gap: 0.5rem 1rem;
    padding: 1rem;
  }
  .col-timer {
    text-align: left;
    font-size: 1.5rem;
  }
  .progress-bar-container {
    margin-top: 0.75rem;
  }
}
</style>

