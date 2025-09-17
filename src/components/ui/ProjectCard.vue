<!-- File: src/components/ui/ProjectCardSkeleton.vue -->
<!-- (DIPERBARUI) Mengadopsi gaya "frosted glass" dan animasi shimmer yang lebih baik. -->
<template>
  <div class="project-card-skeleton">
    <div class="header-dots">
      <span></span><span></span><span></span>
    </div>
    <div class="card-content">
      <div class="skeleton-line title"></div>
      <div class="skeleton-line description"></div>
      <div class="skeleton-line description short"></div>
      <div class="tags-container">
        <div class="skeleton-tag"></div>
        <div class="skeleton-tag"></div>
        <div class="skeleton-tag"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card-skeleton {
  background: rgba(var(--card-bg-rgb), 0.4);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  border: 1px solid rgba(var(--border-color-rgb), 0.1);
  border-radius: 20px;
  overflow: hidden;
  position: relative;
}

.header-dots {
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: flex;
  gap: 0.5rem;
}
.header-dots span {
  width: 12px; height: 12px; border-radius: 50%;
  background: rgba(var(--border-color-rgb), 0.5);
}

.card-content {
  padding: 3.5rem 1.5rem 1.5rem;
}

.skeleton-line, .skeleton-tag {
  background: linear-gradient(
    90deg,
    rgba(var(--border-color-rgb), 0.2) 25%,
    rgba(var(--border-color-rgb), 0.5) 50%,
    rgba(var(--border-color-rgb), 0.2) 75%
  );
  background-size: 200% 100%;
  border-radius: 8px;
  animation: shimmer 1.5s infinite;
}

.skeleton-line {
  height: 20px;
  margin-bottom: 1rem;
}

.skeleton-line.title {
  width: 60%;
  height: 28px;
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
  height: 28px;
  border-radius: 9999px;
}
</style>

