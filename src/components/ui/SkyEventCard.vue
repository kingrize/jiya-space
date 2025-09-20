<!-- File: src/components/ui/SkyEventCard.vue -->
<!-- (DIPERBARUI) Dirombak total dengan desain "System Process" yang lebih dinamis. -->
<script setup>
const props = defineProps({
  event: Object,
});
</script>

<template>
  <div class="process-card" :class="{ active: event.status === 'Active' }">
    <div class="window-header">
      <span>process_id: {{ event.id }}</span>
    </div>
    <div class="card-body">
      <div class="status-indicator" :style="{ backgroundColor: event.color }">
        {{ event.status }}
      </div>
      <h3 class="title">{{ event.name }}</h3>
      <p class="countdown">{{ event.countdown }}</p>
      <div class="progress-bar-container">
        <div class="progress-bar" :style="{ width: `${event.progress}%`, backgroundColor: event.color }"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.process-card {
  background: rgba(var(--card-bg-rgb), 0.4);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  border: 1px solid rgba(var(--border-color-rgb), 0.1);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
}
.process-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}
:root.dark .process-card:hover {
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.window-header {
  background-color: rgba(var(--card-bg-rgb), 0.3);
  padding: 0.5rem 1rem;
  border-bottom: 1px solid rgba(var(--border-color-rgb), 0.1);
  color: var(--text-color-secondary);
  font-family: 'Fira Code', monospace;
  font-size: 0.8rem;
}

.card-body {
  padding: 1.5rem;
  text-align: center;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.status-indicator {
  font-size: 0.8rem;
  font-weight: 700;
  color: white;
  background-color: var(--text-color-secondary);
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  text-transform: uppercase;
  margin-bottom: 1rem;
}
.process-card.active .status-indicator {
  background-color: var(--event-color);
}

.title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.countdown {
  font-size: 2.5rem;
  font-weight: 500;
  font-family: 'Fira Code', monospace;
  color: var(--text-color-primary);
  margin-bottom: 1.5rem;
}

.progress-bar-container {
  width: 100%;
  max-width: 200px;
  height: 8px;
  background-color: rgba(var(--border-color-rgb), 0.3);
  border-radius: 4px;
  overflow: hidden;
}
.progress-bar {
  height: 100%;
  background-color: var(--text-color-secondary);
  border-radius: 4px;
  transition: width 1s linear;
}
.process-card.active .progress-bar {
  background-color: var(--event-color);
}
</style>

