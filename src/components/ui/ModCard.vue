<!-- File: src/components/ui/ModCard.vue -->
<!-- (DIPERBARUI) Didesain ulang untuk menyertakan ringkasan deskripsi yang selalu terlihat. -->
<script setup>
defineProps({
  mod: Object,
});
</script>

<template>
  <router-link :to="`/mods/${mod.slug}`" class="mod-card">
    <div class="card-image-container">
      <img :src="mod.image" :alt="mod.title" class="card-image" />
    </div>
    <div class="card-content">
      <div>
        <span class="category-tag">{{ mod.category }}</span>
        <h3 class="title">{{ mod.title }}</h3>
        <!-- Deskripsi ditambahkan di sini -->
        <p class="summary">{{ mod.summary }}</p>
      </div>
      <div class="card-footer">
        <span class="version">v{{ mod.version }}</span>
        <span class="cta-text">View Details <span class="arrow">→</span></span>
      </div>
    </div>
  </router-link>
</template>

<style scoped>
.mod-card {
  /* Mengadopsi gaya "frosted glass" JiyaOS */
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

.card-image-container {
  height: 200px;
  overflow: hidden; /* Memastikan gambar tidak keluar dari radius */
}
.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}
.mod-card:hover .card-image {
  transform: scale(1.05);
}

.card-content {
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Mendorong footer ke bawah */
}

.category-tag {
  display: inline-block;
  background-color: var(--accent-color);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.title {
  font-size: 1.35rem;
  font-weight: 600;
  line-height: 1.3;
}

/* Gaya baru untuk ringkasan */
.summary {
  font-size: 0.9rem;
  color: var(--text-color-secondary);
  line-height: 1.5;
  margin-top: 0.75rem;
  
  /* Trik untuk membatasi teks hingga 3 baris */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}

.card-footer {
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(var(--border-color-rgb), 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  color: var(--text-color-secondary);
  opacity: 1; 
}

.version {
  font-family: 'Fira Code', monospace;
}
.cta-text {
  font-weight: 500;
  color: var(--accent-color);
}
.arrow {
  display: inline-block;
  transition: transform 0.2s ease;
}
.mod-card:hover .arrow {
  transform: translateX(4px);
}
</style>

