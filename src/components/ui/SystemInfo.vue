<!-- File: src/components/ui/SystemInfo.vue -->
<!-- (FILE BARU) Widget "neofetch" untuk menampilkan info sistem. -->
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useDark } from '@vueuse/core';

const isDark = useDark();
const uptime = ref('0s');
let startTime = Date.now();
let intervalId = null;

const updateUptime = () => {
  const now = Date.now();
  const diffSeconds = Math.round((now - startTime) / 1000);
  const hours = Math.floor(diffSeconds / 3600);
  const minutes = Math.floor((diffSeconds % 3600) / 60);
  const seconds = diffSeconds % 60;
  
  let uptimeString = '';
  if (hours > 0) uptimeString += `${hours}h `;
  if (minutes > 0) uptimeString += `${minutes}m `;
  uptimeString += `${seconds}s`;
  
  uptime.value = uptimeString;
};

onMounted(() => {
  startTime = Date.now();
  intervalId = setInterval(updateUptime, 1000);
});

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
});
</script>

<template>
  <div class="system-info-card">
    <div class="window-header">jiya@space:~$ neofetch</div>
    <div class="window-body">
      <div class="ascii-art">
        <pre>
    .-.
   (o o)
   | O \
    \   \
    `~~~'
        </pre>
      </div>
      <div class="info-lines">
        <p><span class="label">User</span>: Jiya</p>
        <p><span class="label">OS</span>: JiyaOS x86_64</p>
        <p><span class="label">Uptime</span>: {{ uptime }}</p>
        <p><span class="label">Theme</span>: {{ isDark ? 'Dark' : 'Light' }}</p>
        <p><span class="label">Shell</span>: bash 5.1</p>
        <p><span class="label">Editor</span>: VSCode</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.system-info-card {
  background: rgba(var(--card-bg-rgb), 0.4);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  border: 1px solid rgba(var(--border-color-rgb), 0.1);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
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
.window-body {
  padding: 1.5rem;
  display: flex;
  gap: 1.5rem;
  align-items: center;
  flex-grow: 1;
}
.ascii-art pre {
  color: var(--accent-color);
  font-size: 1.5rem;
  line-height: 1.1;
  font-family: monospace;
}
.info-lines {
  font-family: 'Fira Code', monospace;
  line-height: 2;
  font-size: 0.9rem;
}
.info-lines .label {
  color: var(--text-color-secondary);
  width: 80px;
  display: inline-block;
}
</style>
