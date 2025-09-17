<!-- File: src/views/HomeView.vue -->
<!-- (DIPERBARUI) Mengganti animasi statis dengan directive scroll. -->
<script setup>
import { ref } from 'vue';
import ContentCard from '../components/ui/ContentCard.vue';

const contentSection = ref(null);

const scrollToContent = () => {
  if (contentSection.value) {
    contentSection.value.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <div class="home-view">
    <!-- Hero Section tetap menggunakan animasi on-load -->
    <section class="hero-section">
      <h1 class="hero-title animated-gradient fade-in-up">A Creative Mind's Digital Playground.</h1>
      <p class="hero-subtitle fade-in-up" style="animation-delay: 0.2s;">
        Curated thoughts, favorite melodies, and snapshots of inspiration. Welcome to my personal realm.
      </p>
      <button @click="scrollToContent" class="hero-cta fade-in-up" style="animation-delay: 0.4s;">
        Explore More
      </button>
    </section>

    <!-- Content Grid sekarang menggunakan animasi on-scroll -->
    <section ref="contentSection" class="content-grid">
      <ContentCard title="Favorite Quote" v-animate-on-scroll>
        <blockquote>
          "The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with."
          <cite>- Paul Rand</cite>
        </blockquote>
      </ContentCard>
      
      <ContentCard title="Current Tech Stack" v-animate-on-scroll>
         <p>Building this space with Vue.js, Vite, and a lot of coffee.</p>
      </ContentCard>
    </section>
  </div>
</template>

<style scoped>
/* Style tidak berubah, gunakan yang sudah ada */
.hero-section {
  text-align: center;
  padding: 6rem 1rem;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  max-width: 700px;
}

.animated-gradient {
  background: linear-gradient(90deg, var(--accent-color), var(--text-color-primary), var(--text-color-primary), var(--accent-color));
  background-size: 300% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-animation 10s ease infinite;
}

@keyframes gradient-animation {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.hero-subtitle {
  margin-top: 1.5rem;
  font-size: 1.2rem;
  color: var(--text-color-secondary);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-cta {
  margin-top: 2.5rem;
  background-color: var(--accent-color);
  color: white;
  border: none;
  padding: 0.85rem 1.75rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.hero-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(0, 122, 255, 0.3);
}

.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  padding-top: 2rem;
}

blockquote {
  font-style: italic;
  color: var(--text-color-secondary);
}

cite {
  display: block;
  margin-top: 0.5rem;
  font-style: normal;
  font-weight: 500;
  color: var(--text-color-primary);
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
}
</style>

