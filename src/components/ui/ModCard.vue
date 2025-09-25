<template>
  <router-link :to="`/mods/${mod.slug}`" class="mod-card">
    <div class="mod-image">
      <img :src="mod.image" :alt="mod.title" />
    </div>
    <div class="mod-info">
      <h3 class="mod-title">{{ mod.title }}</h3>
      <p class="mod-description">{{ mod.description }}</p>
      <div class="mod-features">
        <span v-for="(feature, index) in mod.features" :key="index" class="feature-tag">
          {{ feature }}
        </span>
      </div>
    </div>
  </router-link>
</template>

<script setup>
defineProps({ mod: Object });
</script>

<style scoped>
.mod-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  text-decoration: none;
  color: inherit;
}
.mod-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.mod-image {
  width: 64px;
  height: 64px;
  border-radius: 10px;
  overflow: hidden;
  flex-shrink: 0;
}
.mod-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.mod-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.mod-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
}
.mod-description {
  font-size: 0.85rem;
  color: var(--text-color-secondary);
  line-height: 1.4;
  margin-bottom: 0.5rem;
}

.mod-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.feature-tag {
  font-size: 0.7rem;
  background: rgba(255, 255, 255, 0.08);
  padding: 0.2rem 0.5rem;
  border-radius: 6px;
  color: var(--text-color-secondary);
}

/* 📱 Mobile-friendly */
@media (max-width: 600px) {
  .mod-card {
    flex-direction: row;
    align-items: center;
    gap: 0.8rem;
    padding: 0.8rem;
  }

  .mod-image {
    width: 56px;
    height: 56px;
    border-radius: 8px;
  }

  .mod-title {
    font-size: 0.95rem;
  }

  .mod-description {
    font-size: 0.75rem;
  }

  .feature-tag {
    font-size: 0.65rem;
    padding: 0.15rem 0.4rem;
  }
}
</style>
