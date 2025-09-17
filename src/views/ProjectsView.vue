<!-- File: src/views/ProjectsView.vue -->
<!-- Halaman ini menampilkan data proyek nyata menggunakan ProjectCard. -->
<script setup>
import { ref } from 'vue';
import ProjectCard from '../components/ui/ProjectCard.vue';

const projects = ref([
  {
    title: 'Jiya.space (This Website)',
    description: 'A personal space built to showcase my journey, thoughts, and technical skills. Fully responsive with a minimalist design and a dark mode feature.',
    stack: ['Vue.js', 'Vite', 'Vue Router', 'JavaScript'],
    githubUrl: 'https://github.com/USERNAME/jiya-space', // Ganti dengan URL repo Anda
    liveUrl: 'https://jiya.space' // Ganti dengan URL live Anda
  },
  {
    title: 'Project Example Two',
    description: 'A conceptual application for task management, designed with a focus on clean UI and intuitive user experience.',
    stack: ['React', 'Next.js', 'TailwindCSS'],
    githubUrl: '#',
    liveUrl: null
  },
  {
    title: 'Project Example Three',
    description: 'An experimental API built with Node.js and Express to serve data for a hypothetical e-commerce platform.',
    stack: ['Node.js', 'Express', 'MongoDB'],
    githubUrl: '#',
    liveUrl: null
  }
]);
</script>

<template>
  <div class="page-container fade-in-up">
    <h1 class="page-title">My Projects</h1>
    <p class="page-subtitle">A collection of things I've built and experiments I've conducted.</p>
    
    <div class="projects-grid">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="project.title"
        :project="project"
        :style="{ animationDelay: `${index * 0.1}s` }"
        class="fade-in-up"
      />
    </div>
  </div>
</template>

<style scoped>
.page-container { padding: 2rem 0; }
.page-title { font-size: 2.5rem; font-weight: 700; text-align: center; margin-bottom: 0.5rem; }
.page-subtitle { text-align: center; color: var(--text-color-secondary); font-size: 1.1rem; margin-bottom: 3rem; }
.projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; }
</style>

