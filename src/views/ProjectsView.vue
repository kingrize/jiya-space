<!-- File: src/views/ProjectsView.vue -->
<!-- (DIPERBARUI) Memastikan v-if sudah ada di level atas. -->
<script setup>
import ProjectCard from '../components/ui/ProjectCard.vue';
import { projects } from '../data/projects.js';
</script>

<template>
  <div class="page-container fade-in-up">
    <h1 class="page-title">My Projects</h1>
    <p class="page-subtitle">A collection of things I've built and experimented with.</p>
    
    <div v-if="projects && projects.length > 0" class="projects-grid">
      <ProjectCard 
        v-for="project in projects" 
        :key="project.id"
        :title="project.title"
        :description="project.description"
        :tags="project.tags"
        :github-url="project.githubUrl"
        :live-url="project.liveUrl"
      />
    </div>

    <div v-else class="no-projects-message">
      <p>There seems to be an issue loading the projects. Please check the data source.</p>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  padding: 2rem 0;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.5rem;
}

.page-subtitle {
  text-align: center;
  color: var(--text-color-secondary);
  font-size: 1.1rem;
  margin-bottom: 3rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.no-projects-message {
  text-align: center;
  color: var(--text-color-secondary);
  padding: 3rem;
  background-color: var(--card-bg);
  border: 1px dashed var(--border-color);
  border-radius: 12px;
}
</style>

