<!-- File: src/components/ui/ProjectCard.vue -->
<!-- (DIPERBARUI) Menambahkan v-if pada v-for untuk mencegah error jika data 'tags' tidak ada. -->
<script setup>
defineProps({
  title: String,
  description: String,
  tags: Array,
  githubUrl: String,
  liveUrl: String
});
</script>

<template>
  <div class="project-card">
    <div class="card-header">
      <h3 class="project-title">{{ title }}</h3>
      <div class="project-links">
        <a v-if="githubUrl" :href="githubUrl" target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
          <v-icon name="co-github" />
        </a>
        <a v-if="liveUrl" :href="liveUrl" target="_blank" rel="noopener noreferrer" aria-label="Live demo">
          <v-icon name="hi-external-link" />
        </a>
      </div>
    </div>
    <p class="project-description">{{ description }}</p>
    <!-- Pemeriksaan Keamanan: Hanya tampilkan bagian ini jika 'tags' ada dan tidak kosong -->
    <div v-if="tags && tags.length > 0" class="tags">
      <span v-for="tag in tags" :key="tag" class="tech-tag">{{ tag }}</span>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  background-color: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.75rem;
}

.project-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-right: 1rem;
}

.project-links {
  display: flex;
  gap: 0.75rem;
}

.project-links a {
  color: var(--text-color-secondary);
  font-size: 1.2rem;
  transition: color 0.2s;
}

.project-links a:hover {
  color: var(--accent-color);
}

.project-description {
  color: var(--text-color-secondary);
  margin-bottom: 1rem;
  flex-grow: 1; /* Makes description take available space */
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto; /* Pushes tags to the bottom */
}
</style>

