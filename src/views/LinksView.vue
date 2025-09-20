<!-- File: src/views/LinksView.vue -->
<!-- (DIPERBARUI) Dirombak total dengan desain kartu yang lebih informatif. -->
<script setup>
import { links } from '../data/links.js';
import avatarUrl from '../assets/images/avatar.jpg';
</script>

<template>
  <div class="links-container fade-in-up">
    <div class="profile-header">
      <img :src="avatarUrl" alt="Jiya Avatar" class="profile-avatar" />
      <h1 class="profile-name">Jiya</h1>
      <p class="profile-tagline">Welcome to my digital space.</p>
    </div>

    <div class="links-list">
      <a 
        v-for="link in links" 
        :key="link.id"
        :href="link.url" 
        :target="link.url.startsWith('http') ? '_blank' : '_self'"
        class="link-item"
      >
        <v-icon :name="link.icon" scale="1.8" class="link-icon" />
        <div class="link-text">
          <span class="link-title">{{ link.name }}</span>
          <span class="link-description">{{ link.description }}</span>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.links-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem 1rem;
}

.profile-header {
  text-align: center;
  margin-bottom: 3rem;
}

.profile-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--accent-color);
  margin-bottom: 1rem;
}

.profile-name {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-color-primary);
}

.profile-tagline {
  font-size: 1.1rem;
  color: var(--text-color-secondary);
}

.links-list {
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.link-item {
  background: rgba(var(--card-bg-rgb), 0.5);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(var(--border-color-rgb), 0.2);
  border-radius: 16px;
  
  padding: 1rem 1.5rem;
  
  display: flex;
  align-items: center;
  gap: 1.5rem;
  
  text-decoration: none;
  
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.link-item:hover {
  transform: scale(1.03);
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
  border-color: rgba(var(--accent-color), 0.5);
}
:root.dark .link-item:hover {
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
}

.link-icon {
  color: var(--text-color-primary);
  flex-shrink: 0;
}

.link-text {
  display: flex;
  flex-direction: column;
}

.link-title {
  color: var(--text-color-primary);
  font-weight: 600;
  font-size: 1.1rem;
}

.link-description {
  font-size: 0.9rem;
  color: var(--text-color-secondary);
}
</style>

