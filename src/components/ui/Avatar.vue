<!-- File: src/components/ui/Avatar.vue -->
<!-- (DIPERBAIKI) Dikembalikan ke kode aslinya yang benar. -->
<script setup>
// Menggunakan path relatif yang sudah terbukti berfungsi
import avatarUrl from '../../assets/images/avatar.jpg';
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
  border: 2px solid rgba(var(--border-color-rgb), 0.5);
}
</style>

