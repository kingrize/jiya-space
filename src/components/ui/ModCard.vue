<!-- File: src/components/ui/ModCard.vue -->
<!-- (FILE BARU) Komponen kartu untuk ditampilkan di galeri mod. -->
<script setup>
defineProps({
  mod: Object,
});
</script>

<template>
  <router-link :to="`/mods/${mod.slug}`" class="mod-card">
    <img :src="mod.image" :alt="mod.title" class="card-image" />
    <div class="card-content">
      <span class="game-tag">{{ mod.game }}</span>
      <h3 class="title">{{ mod.title }}</h3>
      <p class="summary">{{ mod.summary }}</p>
    </div>
    <div class="card-footer">
      <span>View Details →</span>
    </div>
  </router-link>
</template>

<style scoped>
.mod-card {
  background: rgba(var(--card-bg-rgb), 0.4);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  border: 1px solid rgba(var(--border-color-rgb), 0.1);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: var(--text-color-primary);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.mod-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.card-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.card-content {
  padding: 1.5rem;
  flex-grow: 1;
}

.game-tag {
  display: inline-block;
  background-color: var(--accent-color);
  color: white;
  padding: 0.25rem 0.6rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.summary {
  color: var(--text-color-secondary);
  line-height: 1.6;
}

.card-footer {
  border-top: 1px solid rgba(var(--border-color-rgb), 0.2);
  padding: 1rem 1.5rem;
  text-align: right;
  font-weight: 500;
  color: var(--accent-color);
}
</style>
