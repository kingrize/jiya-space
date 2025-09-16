<script setup>
import Avatar from '../ui/Avatar.vue';
import ThemeToggle from '../ui/ThemeToggle.vue';
</script>

<template>
  <header class="header-container">
    <div class="profile-section">
      <Avatar />
      <div class="status-container">
        <span class="name">Jiya</span>
        <span class="status">Currently building...</span>
      </div>
    </div>
    <ThemeToggle />
  </header>
</template>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 960px;
  margin: 0 auto;
}

.profile-section {
  display: flex;
  align-items: center;
  gap: 0.75rem; /* Creates space between avatar and status */
}

.status-container {
  display: flex;
  flex-direction: column;
}

.name {
  font-weight: 600;
  font-size: 1.1rem;
}

.status {
  font-size: 0.85rem;
  color: #666;
}
</style>