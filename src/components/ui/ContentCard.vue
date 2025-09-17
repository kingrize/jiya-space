<!-- File: src/components/ui/ContentCard.vue -->
<!-- (DIPERBARUI) Menambahkan efek 'glow' saat hover. -->
<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="content-card">
    <h3>{{ title }}</h3>
    <div class="card-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.content-card {
  background-color: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 1.5rem;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
}

.content-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 25px rgba(0, 122, 255, 0.1); /* Efek 'glow' */
}

h3 {
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: var(--text-color-secondary);
}
</style>

