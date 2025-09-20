<!-- File: src/components/ui/SkyEventCard.vue -->
<!-- (DIPERBARUI) Dirombak total dengan desain "System Process" yang baru. -->
<script setup>
const props = defineProps({
  event: Object,
});
</script>

<template>
  <div class="process-card" :class="{ active: event.status === 'Active' }" :style="{'--event-color': event.color}">
    <div class="card-background-icon">
      <v-icon :name="event.icon" scale="5" />
    </div>
    <div class="card-content">
      <div class="header">
        <h4 class="title">{{ event.name }}</h4>
        <span class="status">{{ event.status }}</span>
      </div>
      <div class="countdown">{{ event.countdown }}</div>
      <div class="progress-bar-container">
        <div class="progress-bar" :style="{ width: `${event.progress}%` }"></div>
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
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
}
.process-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  border-color: rgba(var(--border-color-rgb), 0.3);
}

.card-background-icon {
  position: absolute;
  bottom: -20px;
  right: -20px;
  font-size: 100px;
  color: var(--event-color);
  opacity: 0.05;
  transition: transform 0.4s ease;
}
.process-card:hover .card-background-icon {
  transform: scale(1.2) rotate(-15deg);
}

.card-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.5rem;
}

.title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-color-primary);
}

.status {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--text-color-secondary);
  text-transform: uppercase;
}
.process-card.active .status {
  color: var(--event-color);
}

.countdown {
  font-size: 2.5rem;
  font-weight: 500;
  font-family: 'Fira Code', monospace;
  color: var(--text-color-primary);
  margin-bottom: auto; /* Mendorong progress bar ke bawah */
  padding: 1rem 0;
}

.progress-bar-container {
  width: 100%;
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

