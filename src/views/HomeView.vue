<!-- File: src/views/HomeView.vue -->
<!-- (DIPERBARUI) Menggunakan komponen ContentCard yang sudah disederhanakan. -->
<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import ContentCard from '../components/ui/ContentCard.vue';
import avatarUrl from '../assets/images/avatar.jpg';

const contentSection = ref(null);

const scrollToContent = () => {
  if (contentSection.value) {
    contentSection.value.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
</script>

<template>
  <div class="home-view">
    <!-- Hero Section -->
    <section class="hero-section">
      <h1 class="hero-title animated-gradient fade-in-up">Jiya's Digital Space</h1>
      <p class="hero-subtitle fade-in-up" style="animation-delay: 0.2s;">
        A passionate front-end developer crafting beautiful, interactive, and user-centric web applications.
      </p>
      <button @click="scrollToContent" class="hero-cta fade-in-up" style="animation-delay: 0.4s;">
        Explore Desktop
      </button>
    </section>

    <!-- macOS-style Bento Grid -->
    <section ref="contentSection" class="bento-grid">
      <!-- Item 1: About Me (Large) -->
      <div class="bento-item about-teaser" v-animate-on-scroll>
        <router-link to="/about" class="teaser-link glass-effect">
          <div class="header-dots">
            <span></span><span></span><span></span>
          </div>
          <img :src="avatarUrl" alt="Jiya Avatar" class="teaser-avatar" />
          <div class="teaser-text">
            <h3>About Me</h3>
            <p>Discover my journey and skills.</p>
          </div>
        </router-link>
      </div>

      <!-- Item 2: Projects (Medium) -->
      <div class="bento-item projects-cta" v-animate-on-scroll style="--delay: 0.1s;">
         <router-link to="/projects" class="cta-link glass-effect">
            <div class="header-dots">
              <span></span><span></span><span></span>
            </div>
            <v-icon name="co-folder" scale="3" />
            <h3>Projects</h3>
         </router-link>
      </div>

      <!-- Item 3: Quote (Medium) -->
      <div class="bento-item quote-card" v-animate-on-scroll style="--delay: 0.2s;">
        <!-- Tidak perlu lagi wrapper .glass-effect -->
        <ContentCard title="Guiding Principle">
          <blockquote>
            "Good design is obvious. Great design is transparent."
            <cite>- Joe Sparano</cite>
          </blockquote>
        </ContentCard>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-view { font-family: 'Inter', sans-serif; }
/* Hero Section */
.hero-section {
  text-align: center;
  padding: 6rem 1rem;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  max-width: 800px;
  line-height: 1.2;
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

/* macOS Bento Grid */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, minmax(250px, auto));
  gap: 1.5rem;
  padding-top: 2rem;
}
.bento-item.about-teaser { grid-column: 1 / 2; grid-row: 1 / 3; }
.bento-item.projects-cta { grid-column: 2 / 3; grid-row: 1 / 2; }
.bento-item.quote-card { grid-column: 2 / 3; grid-row: 2 / 3; }

.bento-item > * { height: 100%; width: 100%; text-decoration: none; }

/* Efek Kaca untuk tautan, karena ContentCard sudah memiliki gayanya sendiri */
.glass-effect {
  background: rgba(var(--card-bg-rgb), 0.5);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(var(--border-color-rgb), 0.2);
  border-radius: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
}
.bento-item:hover .glass-effect {
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
  width: 12px; height: 12px; border-radius: 50%;
  background: #ff5f56;
}
.header-dots span:nth-child(2) { background: #ffbd2e; }
.header-dots span:nth-child(3) { background: #27c93f; }

/* Specific item styles */
.about-teaser .teaser-link { justify-content: center; align-items: center; text-align: center; }
.teaser-avatar { width: 120px; height: 120px; border-radius: 50%; object-fit: cover; margin-top: 2rem; margin-bottom: 1rem; }
.teaser-text h3 { font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--text-color-primary); }
.teaser-text p { color: var(--text-color-secondary); }

.projects-cta .cta-link { justify-content: center; align-items: center; color: var(--text-color-primary); }
.projects-cta .v-icon { margin-bottom: 1rem; }
.projects-cta h3 { font-size: 1.5rem; }

.quote-card blockquote { color: var(--text-color-secondary); font-size: 1.1rem; }
.quote-card cite { color: var(--text-color-primary); }

/* Responsive adjustments */
@media (max-width: 960px) {
  .bento-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
  }
  .bento-item.about-teaser,
  .bento-item.projects-cta,
  .bento-item.quote-card {
    grid-column: auto;
    grid-row: auto;
  }
}
</style>

