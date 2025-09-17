<!-- File: src/components/ui/Avatar.vue -->
<!-- Komponen kecil yang dapat dipakai ulang hanya untuk menampilkan avatar. -->
<script setup>
const avatarUrl = 'https://i.pravatar.cc/40';
</script>

<template>
  <img :src="avatarUrl" alt="User Avatar" class="avatar-image">
</template>

<style scoped>
.avatar-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--border-color);
}
</style>

