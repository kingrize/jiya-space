<!-- File: src/views/ProjectsView.vue -->
<!-- (FILE BARU) Halaman Proyek yang bersih dan bebas bug. -->
<script setup>
import ProjectCard from '../components/ui/ProjectCard.vue';
import { projects } from '../data/projects.js';
</script>

<template>
  <div class="page-container fade-in-up">
    <div class="page-header">
      <h1 class="page-title">Projects</h1>
    <p class="page-subtitle">A collection of things I've built and experimented with in JiyaOS.</p>
    </div>
    
    <div class="projects-grid">
      <ProjectCard 
        v-for="(project, index) in projects" 
        :key="project.id"
        :title="project.title"
        :description="project.description"
        :tags="project.tags"
        :github-url="project.githubUrl"
        :live-url="project.liveUrl"
        v-animate-on-scroll
        :style="{ '--delay': `${index * 0.1}s` }"
      />
    </div>
  </div>
</template>

<style scoped>
.page-header {
  text-align: center;
  margin-bottom: 3rem;
}
.page-title {
  font-size: 2.5rem;
  font-weight: 700;
}
.page-subtitle {
  color: var(--text-color-secondary);
  font-size: 1.1rem;
  margin-top: 0.5rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
}

.projects-grid > * {
  transition-delay: var(--delay, 0s);
}
</style>

