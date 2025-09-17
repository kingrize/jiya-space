<!-- File: src/views/ProjectsView.vue -->
<!-- (DIPERBARUI) Menampilkan skeleton loader saat data dimuat. -->
<script setup>
import { ref, onMounted } from 'vue';
import ProjectCard from '../components/ui/ProjectCard.vue';
import ProjectCardSkeleton from '../components/ui/ProjectCardSkeleton.vue';
import { projects } from '../data/projects.js';

const loading = ref(true);
const projectData = ref([]);

onMounted(() => {
  // Simulasikan pemuatan data dari API dengan jeda 1 detik
  setTimeout(() => {
    projectData.value = projects;
    loading.value = false;
  }, 1000); // 1000ms = 1 detik
});
</script>

<template>
  <div class="page-container fade-in-up">
    <h1 class="page-title">My Projects</h1>
    <p class="page-subtitle">A collection of things I've built and experimented with.</p>
    
    <!-- Tampilkan skeleton loader saat loading -->
    <div v-if="loading" class="projects-grid">
      <ProjectCardSkeleton v-for="n in 3" :key="n" />
    </div>

    <!-- Tampilkan data proyek setelah selesai dimuat -->
    <div v-else class="projects-grid">
      <ProjectCard 
        v-for="project in projectData" 
        :key="project.id"
        :title="project.title"
        :description="project.description"
        :tags="project.tags"
        :github-url="project.githubUrl"
        :live-url="project.liveUrl"
      />
    </div>
  </div>
</template>

<style scoped>
/* Style tidak berubah, gunakan yang sudah ada */
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
</style>

