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
      <slot></slot> <!-- Konten apapun bisa masuk di sini -->
    </div>
  </div>
</template>

<style scoped>
.content-card {
  background-color: var(--card-bg, #f9f9f9); /* Fallback color */
  border: 1px solid var(--border-color, #e0e0e0);
  border-radius: 12px;
  padding: 1.5rem;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.content-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

h3 {
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--border-color, #e0e0e0);
  padding-bottom: 0.75rem;
}
</style>