<!-- File: src/components/ui/Avatar.vue -->
<!-- (DIPERBARUI) Menggunakan path relatif sebagai alternatif. -->
<script setup>
// Ganti path '@' dengan path relatif.
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
  border: 2px solid var(--border-color);
}
</style>

