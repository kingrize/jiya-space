<!-- File: src/components/ui/ContentCard.vue -->
<!-- Komponen kartu yang fleksibel dan dapat dipakai ulang untuk menampilkan konten. -->
<script setup>
// 'defineProps' mendefinisikan properti yang bisa diterima komponen ini dari induknya.
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
      <!-- '<slot>' adalah placeholder di mana konten dari induk akan disisipkan. -->
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
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
}

.content-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
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

