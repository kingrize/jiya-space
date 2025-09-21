// File: src/composables/useMouseTrail.js
// (FILE BARU) Otak dari fitur jejak partikel mouse.

import { onMounted, onUnmounted } from 'vue';
import { useSettings } from './useSettings.js';

export function useMouseTrail() {
  const { settings } = useSettings();

  const handleMouseMove = (e) => {
    // Hanya jalankan jika fitur diaktifkan
    if (!settings.value.enableMouseTrail) return;

    const trail = document.createElement('div');
    trail.className = 'mouse-trail';
    document.body.appendChild(trail);

    trail.style.left = `${e.clientX}px`;
    trail.style.top = `${e.clientY}px`;
    
    // Hapus elemen setelah animasi selesai
    setTimeout(() => {
      trail.remove();
    }, 1000); // Durasi harus cocok dengan animasi di CSS
  };

  onMounted(() => {
    window.addEventListener('mousemove', handleMouseMove);
  });

  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove);
  });
}
