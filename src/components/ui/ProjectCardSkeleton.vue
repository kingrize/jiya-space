<!-- File: src/components/ui/ProjectCardSkeleton.vue -->
<!-- (FILE BARU) Placeholder visual untuk ProjectCard saat data sedang dimuat. -->
<template>
  <div class="project-card-skeleton">
    <div class="skeleton-line title"></div>
    <div class="skeleton-line description"></div>
    <div class="skeleton-line description short"></div>
    <div class="tags-container">
      <div class="skeleton-tag"></div>
      <div class="skeleton-tag"></div>
      <div class="skeleton-tag"></div>
    </div>
  </div>
</template>

<style scoped>
.project-card-skeleton {
  background-color: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 1.5rem;
  overflow: hidden; /* Penting untuk animasi shimmer */
}

.skeleton-line, .skeleton-tag {
  background: var(--border-color);
  border-radius: 4px;
  animation: shimmer 1.5s infinite linear;
}

.skeleton-line {
  height: 20px;
  margin-bottom: 1rem;
}

.skeleton-line.title {
  width: 60%;
  height: 24px;
}

.skeleton-line.description {
  width: 100%;
  height: 16px;
  margin-bottom: 0.75rem;
}

.skeleton-line.description.short {
  width: 80%;
}

.tags-container {
  display: flex;
  gap: 0.5rem;
  margin-top: 1.5rem;
}

.skeleton-tag {
  width: 70px;
  height: 24px;
  border-radius: 9999px;
}
</style>
