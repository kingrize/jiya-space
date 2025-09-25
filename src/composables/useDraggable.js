// File: src/composables/useDraggable.js
// (FILE BARU) "Otak" untuk membuat jendela-jendela di desktop bisa digeser.

import { ref, onMounted, onUnmounted } from 'vue';

export function useDraggable(elementRef) {
  const position = ref({ x: 0, y: 0 });
  const isDragging = ref(false);
  let offset = { x: 0, y: 0 };

  const onMouseDown = (e) => {
    isDragging.value = true;
    const element = elementRef.value;
    if (element) {
      offset.x = e.clientX - element.offsetLeft;
      offset.y = e.clientY - element.offsetTop;
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    }
  };

  const onMouseMove = (e) => {
    if (!isDragging.value) return;
    position.value.x = e.clientX - offset.x;
    position.value.y = e.clientY - offset.y;
  };

  const onMouseUp = () => {
    isDragging.value = false;
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
  };
  
  // Membersihkan event listener saat komponen dilepas
  onUnmounted(() => {
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
  });

  return {
    position,
    onMouseDown,
  };
}
