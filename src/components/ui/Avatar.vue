<!-- File: src/components/ui/Avatar.vue -->
<!-- (DIPERBARUI) Dirombak total dengan desain "status ring" dan perbaikan bug hover. -->
<script setup>
import avatarUrl from '../../assets/images/avatar.jpg';
</script>

<template>
  <div class="avatar-container">
    <img :src="avatarUrl" alt="User Avatar" class="avatar-image">
    <div class="status-ring"></div>
  </div>
</template>

<style scoped>
.avatar-container {
  position: relative;
  width: 44px; /* Sedikit lebih besar dari gambar untuk memberi ruang pada ring */
  height: 44px;
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.avatar-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(var(--border-color-rgb), 0.5);
  /* Ditempatkan di tengah container */
  position: absolute;
  top: 2px;
  left: 2px;
  z-index: 2; /* Memastikan gambar di atas ring */
}

.status-ring {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid transparent;
  transition: border-color 0.3s ease;
  z-index: 1;
}

.avatar-container:hover {
  transform: scale(1.1);
}

.avatar-container:hover .status-ring {
  border-color: var(--accent-color);
  /* Memicu animasi denyut saat di-hover */
  animation: pulse 2s infinite;
}

/* Animasi denyut untuk status ring */
@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(var(--accent-color-rgb), 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(var(--accent-color-rgb), 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(var(--accent-color-rgb), 0);
  }
}
</style>

