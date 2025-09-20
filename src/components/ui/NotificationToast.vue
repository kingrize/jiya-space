<!-- File: src/components/ui/NotificationToast.vue -->
<!-- (FILE BARU) Komponen visual untuk notifikasi "toast". -->
<script setup>
import { watch } from 'vue';
import { useNotifications } from '../../composables/useNotifications.js';

const { notification, hideNotification } = useNotifications();
let timeoutId = null;

watch(notification, (newVal) => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  if (newVal && newVal.duration) {
    timeoutId = setTimeout(() => {
      hideNotification();
    }, newVal.duration);
  }
});

const iconMap = {
  warning: 'fa-exclamation-triangle',
  info: 'fa-info-circle',
  success: 'fa-check-circle',
  error: 'fa-times-circle',
};
</script>

<template>
  <Transition name="toast">
    <div v-if="notification" :class="['toast-container', notification.type]">
      <div class="icon-wrapper">
        <v-icon :name="iconMap[notification.type]" scale="1.5" />
      </div>
      <div class="text-wrapper">
        <h4>{{ notification.title }}</h4>
        <p>{{ notification.message }}</p>
      </div>
      <button @click="hideNotification" class="close-button" aria-label="Close notification">
        <v-icon name="fa-times" />
      </button>
    </div>
  </Transition>
</template>

<style scoped>
.toast-container {
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 200;
  
  width: 90%;
  max-width: 400px;
  
  background: rgba(var(--card-bg-rgb), 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(var(--border-color-rgb), 0.2);
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.15);
  
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 1.5rem;
  
  color: var(--text-color-primary);
}

.toast-container.warning { border-left: 4px solid var(--warning-border); }
.toast-container.warning .icon-wrapper { color: var(--warning-border); }

.icon-wrapper { flex-shrink: 0; margin-top: 0.25rem; }
.text-wrapper { flex-grow: 1; min-width: 0; }
.text-wrapper h4 { font-weight: 600; margin-bottom: 0.25rem; }
.text-wrapper p { font-size: 0.9rem; line-height: 1.6; color: var(--text-color-secondary); }

.close-button {
  background: none;
  border: none;
  color: var(--text-color-secondary);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background-color 0.2s;
}
.close-button:hover { background: rgba(var(--border-color-rgb), 0.2); }

.toast-enter-active, .toast-leave-active {
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}
.toast-enter-from, .toast-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(0.95);
}

:root { --warning-border: #FBBF24; }
:root.dark { --warning-border: #FBBF24; }
</style>

