// File: src/composables/useNotifications.js
// (FILE BARU) Otak dari sistem notifikasi global kita.

import { ref } from 'vue';

const notification = ref(null);

export function useNotifications() {
  const showNotification = (config) => {
    notification.value = {
      id: Date.now(), // ID unik untuk setiap notifikasi
      type: config.type || 'info', // 'info', 'warning', 'success', 'error'
      title: config.title,
      message: config.message,
      duration: config.duration || 5000, // Durasi dalam milidetik
    };
  };

  const hideNotification = () => {
    notification.value = null;
  };

  return {
    notification,
    showNotification,
    hideNotification,
  };
}

