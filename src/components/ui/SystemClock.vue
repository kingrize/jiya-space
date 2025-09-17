<!-- File: src/components/ui/SystemClock.vue -->
<!-- (FILE BARU) Widget jam dan tanggal live. -->
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const currentTime = ref('');
const currentDate = ref('');

const updateTime = () => {
  const now = new Date();
  currentTime.value = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  currentDate.value = now.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' });
};

let intervalId = null;
onMounted(() => {
  updateTime();
  intervalId = setInterval(updateTime, 1000);
});
onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
});
</script>

<template>
  <div class="clock-card">
    <div class="time">{{ currentTime }}</div>
    <div class="date">{{ currentDate }}</div>
  </div>
</template>

<style scoped>
.clock-card {
  background: rgba(var(--card-bg-rgb), 0.4);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  border: 1px solid rgba(var(--border-color-rgb), 0.1);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 1.5rem;
}
.time {
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 1.2;
}
.date {
  font-size: 1rem;
  color: var(--text-color-secondary);
}
</style>
