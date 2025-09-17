<!-- File: src/components/ui/ProjectCard.vue -->
<!-- (FILE BARU) Didesain ulang dengan gaya "JiyaOS" yang konsisten. -->
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
    <div class="window-header">{{ title }}</div>
    <div class="card-content">
      <p class="description">{{ description }}</p>
      <div v-if="tags && tags.length" class="tags">
        <span v-for="tag in tags" :key="tag" class="tech-tag">{{ tag }}</span>
      </div>
    </div>
    <div class="card-footer">
      <a v-if="githubUrl" :href="githubUrl" target="_blank" rel="noopener noreferrer" class="link-icon" aria-label="GitHub Repository">
        <v-icon name="co-github" scale="1.2" />
      </a>
      <a v-if="liveUrl" :href="liveUrl" target="_blank" rel="noopener noreferrer" class="link-icon" aria-label="Live Demo">
        <v-icon name="hi-external-link" scale="1.2" />
      </a>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  background: rgba(var(--card-bg-rgb), 0.4);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  border: 1px solid rgba(var(--border-color-rgb), 0.1);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  overflow: hidden;
}
.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.window-header {
  background-color: rgba(var(--card-bg-rgb), 0.3);
  padding: 0.5rem 1rem;
  border-bottom: 1px solid rgba(var(--border-color-rgb), 0.1);
  color: var(--text-color-secondary);
  font-family: 'Fira Code', monospace;
  font-size: 0.8rem;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-content {
  padding: 1.5rem;
  flex-grow: 1;
}

.description {
  color: var(--text-color-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.card-footer {
  border-top: 1px solid rgba(var(--border-color-rgb), 0.2);
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: flex-end;
  gap: 1.5rem;
}

.link-icon {
  color: var(--text-color-secondary);
  transition: color 0.2s;
}

.link-icon:hover {
  color: var(--text-color-primary);
}
</style>

