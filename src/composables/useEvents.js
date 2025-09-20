// File: src/composables/useEvents.js
// (DIPERBARUI) Menghapus event yang sudah tidak ada sesuai permintaan.

import { ref, onMounted, onUnmounted, computed } from 'vue';

// PERBAIKAN: Hanya event yang relevan yang disimpan.
const eventData = [
  { 
    id: 'geyser', 
    name: 'Geyser', 
    period: 120,
    offset: 5,
    duration: 10,
    color: '#3498db',
    icon: 'wi-hot'
  },
  { 
    id: 'grandma', 
    name: "Grandma", 
    period: 120, 
    offset: 35, 
    duration: 10, 
    color: '#e67e22',
    icon: 'fa-utensils'
  },
  { 
    id: 'turtle', 
    name: 'Turtle', 
    period: 120, 
    offset: 50, 
    duration: 10, 
    color: '#2ecc71',
    icon: 'gi-turtle'
  },
];

export function useEvents() {
  const currentTime = ref(new Date());
  let timerInterval = null;

  onMounted(() => {
    timerInterval = setInterval(() => {
      currentTime.value = new Date();
    }, 1000);
  });

  onUnmounted(() => {
    clearInterval(timerInterval);
  });

  const getSkyTime = (date) => {
    const utc = date.getTime() + (date.getTimezoneOffset() * 60000);
    return new Date(utc - (3600000 * 7)); // UTC-7 for Sky Time
  };

  const formatTime = (seconds) => {
    if (seconds < 0) seconds = 0;
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const processedEvents = computed(() => {
    const now = getSkyTime(currentTime.value);
    const dayOfWeek = now.getDay(); // Sunday = 0, Monday = 1, ...
    const minutesToday = now.getHours() * 60 + now.getMinutes();

    return eventData
      .filter(event => !event.days || event.days.includes(dayOfWeek))
      .map(event => {
        const totalMinutesInCycle = event.period;
        const minutesIntoCurrentCycle = (minutesToday - event.offset + totalMinutesInCycle) % totalMinutesInCycle;
        const minutesUntilNext = totalMinutesInCycle - minutesIntoCurrentCycle;
        const secondsUntilNext = (minutesUntilNext * 60) - now.getSeconds();
        const isActive = minutesUntilNext > (totalMinutesInCycle - event.duration);

        let status, countdown, progress;

        if (isActive) {
          status = 'Active';
          const secondsIntoActive = (minutesIntoCurrentCycle - (totalMinutesInCycle - event.duration)) * 60 + now.getSeconds();
          const secondsRemaining = (event.duration * 60) - secondsIntoActive;
          countdown = formatTime(secondsRemaining);
          progress = (secondsIntoActive / (event.duration * 60)) * 100;
        } else {
          status = 'Upcoming';
          countdown = formatTime(secondsUntilNext);
          progress = 0;
        }

        return { ...event, status, countdown, progress };
      })
      .sort((a, b) => {
        if (a.status === 'Active' && b.status !== 'Active') return -1;
        if (a.status !== 'Active' && b.status === 'Active') return 1;
        return a.countdown.localeCompare(b.countdown);
      });
  });

  return {
    events: processedEvents,
  };
}

