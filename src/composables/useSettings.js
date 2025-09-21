// File: src/composables/useSettings.js
// (DIPERBARUI) Menambahkan pengaturan baru untuk jejak mouse.

import { useStorage } from '@vueuse/core';

const settings = useStorage('jiyaos-settings', {
  showBlobs: true,
  showGrid: true,
  accentColor: '#007AFF',
  enableMouseTrail: false, // <-- Fitur baru, mati secara default
});

const accentColors = [
  { name: 'Jiya Blue', value: '#007AFF' },
  { name: 'Sakura Pink', value: '#FF6B81' },
  { name: 'Matcha Green', value: '#2ECC71' },
  { name: 'Royal Purple', value: '#9B59B6' },
  { name: 'Sunset Orange', value: '#E67E22' },
];

export function useSettings() {
  const setAccentColor = (color) => {
    settings.value.accentColor = color;
  };

  return {
    settings,
    accentColors,
    setAccentColor,
  };
}

