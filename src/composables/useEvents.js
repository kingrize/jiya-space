// File: src/composables/useEvents.js
// (DIPERBARUI) Logika dikembalikan ke versi akurat untuk tata letak kartu.

import { ref, onMounted, onUnmounted, computed } from 'vue';

// Data event diadaptasi dari file SkyClockPage.vue Anda
const eventData = [
  { 
    id: 'geyser', 
    name: 'Geyser', 
    period: 120, // dalam menit
    offset: 5,   // dalam menit
    duration: 10,// dalam menit
    color: '#3498db' 
  },
  { 
    id: 'grandma', 
    name: "Grandma's Dinner", 
    period: 120, 
    offset: 35, 
    duration: 10, 
    color: '#e67e22' 
  },
  { 
    id: 'turtle', 
    name: 'Turtle', 
    period: 120, 
    offset: 50, 
    duration: 10, 
    color: '#2ecc71' 
  },
  { 
    id: 'sanctuary', 
    name: 'Sanctuary Geyser', 
    period: 120, 
    offset: 0, 
    duration: 15, 
    color: '#8e44ad' 
  },
  { 
    id: 'brooks', 
    name: 'Wind Paths Race', 
    period: 120, 
    offset: 30, 
    duration: 15, 
    color: '#1abc9c' 
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
          const minutesSinceEnd = minutesIntoCurrentCycle;
          progress = (minutesSinceEnd / (totalMinutesInCycle - event.duration)) * 100;
        }

        return { ...event, status, countdown, progress };
      })
      .sort((a, b) => {
        // Urutkan yang aktif ke atas, lalu berdasarkan waktu terdekat
        if (a.status === 'Active' && b.status !== 'Active') return -1;
        if (a.status !== 'Active' && b.status === 'Active') return 1;
        return a.countdown.localeCompare(b.countdown);
      });
  });

  return {
    events: processedEvents,
  };
}

