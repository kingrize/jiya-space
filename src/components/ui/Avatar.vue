<script setup>
// In the future, we can make the image URL a prop
const avatarUrl = 'https://i.pravatar.cc/40'; // A cool placeholder avatar service
</script>

<template>
  <img :src="avatarUrl" alt="User Avatar" class="avatar-image">
</template>

<style scoped>
.avatar-image {
  width: 40px;
  height: 40px;
  border-radius: 50%; /* Makes it a circle */
  object-fit: cover; /* Ensures the image covers the area without distortion */
  border: 2px solid #ddd;
}
</style>