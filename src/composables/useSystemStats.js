// File: src/composables/useSystemStats.js
// (FILE BARU) Otak untuk menghasilkan data statistik sistem palsu yang dinamis.

import { ref, onMounted, onUnmounted } from 'vue';

export function useSystemStats() {
  const cpuUsage = ref(0);
  const memUsage = ref(0);
  let intervalId = null;

  // Fungsi untuk menghasilkan nilai acak yang halus
  const smoothRandom = (currentValue, min, max, factor) => {
    const randomChange = (Math.random() - 0.5) * factor;
    let newValue = currentValue + randomChange;
    newValue = Math.max(min, Math.min(max, newValue)); // Batasi nilai
    return newValue;
  };

  const updateStats = () => {
    cpuUsage.value = smoothRandom(cpuUsage.value, 5, 30, 5);
    memUsage.value = smoothRandom(memUsage.value, 40, 60, 2);
  };

  onMounted(() => {
    updateStats(); // Panggil sekali di awal
    intervalId = setInterval(updateStats, 2000); // Update setiap 2 detik
  });

  onUnmounted(() => {
    if (intervalId) clearInterval(intervalId);
  });

  return { cpuUsage, memUsage };
}
