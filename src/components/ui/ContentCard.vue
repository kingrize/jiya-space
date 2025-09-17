<!-- File: src/components/ui/ContentCard.vue -->
<!-- (DIPERBARUI) Mengintegrasikan efek "frosted glass" langsung ke dalam komponen. -->
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
    <div class="header-dots">
      <span></span><span></span><span></span>
    </div>
    <h3 class="card-title">{{ title }}</h3>
    <div class="card-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
/* Efek "Frosted Glass" sekarang menjadi bagian dari komponen ini */
.content-card {
  background: rgba(var(--card-bg-rgb), 0.5);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(var(--border-color-rgb), 0.2);
  border-radius: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative; /* Diperlukan untuk header dots & title */
}

.content-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.header-dots {
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: flex;
  gap: 0.5rem;
}

.header-dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #ff5f56;
}

.header-dots span:nth-child(2) { background: #ffbd2e; }
.header-dots span:nth-child(3) { background: #27c93f; }

.card-title {
  text-align: center;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--text-color-secondary);
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(var(--border-color-rgb), 0.2);
  padding-top: 2rem; /* Memberi ruang di bawah header dots */
}

.card-content {
  padding: 0 1.5rem 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>

