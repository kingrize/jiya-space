<!-- File: src/components/ui/ProjectCard.vue -->
<!-- Komponen kartu yang dapat dipakai ulang untuk menampilkan detail sebuah proyek. -->
<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="project-card">
    <div class="card-header">
      <h3 class="project-title">{{ project.title }}</h3>
      <div class="project-links">
        <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
          <v-icon name="co-github" scale="1.2" />
        </a>
        <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
          <v-icon name="hi-external-link" scale="1.2" />
        </a>
      </div>
    </div>
    <p class="project-description">{{ project.description }}</p>
    <div class="project-stack">
      <span v-for="tech in project.stack" :key="tech" class="tech-tag">
        {{ tech }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.project-card { background-color: var(--card-bg); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem; transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out; }
.project-card:hover { transform: translateY(-5px); box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); }
.card-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; }
.project-title { font-size: 1.25rem; font-weight: 600; color: var(--text-color-primary); }
.project-links { display: flex; gap: 1rem; }
.project-links a { color: var(--text-color-secondary); transition: color 0.2s; }
.project-links a:hover { color: var(--accent-color); }
.project-description { color: var(--text-color-secondary); flex-grow: 1; }
.project-stack { display: flex; flex-wrap: wrap; gap: 0.5rem; }
</style>

