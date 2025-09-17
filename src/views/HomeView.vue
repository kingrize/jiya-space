<!-- File: src/views/HomeView.vue -->
<!-- (DIPERBARUI) Dirombak total dengan widget sistem yang dinamis. -->
<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import SystemInfo from '../components/ui/SystemInfo.vue';
import SystemClock from '../components/ui/SystemClock.vue';

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
      <h1 class="hero-title animated-gradient fade-in-up">JiyaOS</h1>
      <p class="hero-subtitle fade-in-up" style="animation-delay: 0.2s;">
        A personal desktop experience by a passionate front-end developer.
      </p>
      <button @click="scrollToContent" class="hero-cta fade-in-up" style="animation-delay: 0.4s;">
        Explore Desktop
      </button>
    </section>

    <!-- Redesigned Bento Grid as a Desktop -->
    <section ref="contentSection" class="bento-grid">
      <!-- Item 1: System Info -->
      <div class="bento-item system-info" v-animate-on-scroll>
        <SystemInfo />
      </div>

      <!-- Item 2: System Clock -->
      <div class="bento-item system-clock" v-animate-on-scroll style="--delay: 0.1s;">
        <SystemClock />
      </div>

      <!-- Item 3: File Explorer (Navigation) -->
      <div class="bento-item file-explorer" v-animate-on-scroll style="--delay: 0.2s;">
        <div class="window-header">/home/jiya/</div>
        <div class="file-list">
          <router-link to="/projects" class="file-item">
            <v-icon name="co-folder" scale="1.5" />
            <span>Projects</span>
          </router-link>
          <router-link to="/about" class="file-item">
            <v-icon name="co-user" scale="1.5" />
            <span>About</span>
          </router-link>
          <a href="https://github.com/kingrize" target="_blank" class="file-item">
            <v-icon name="co-github" scale="1.5" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Hero Section styles (tidak berubah) */
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

/* Redesigned Bento Grid */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(220px, auto);
  gap: 1.5rem;
  padding-top: 2rem;
}

.bento-item > * {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.bento-item:hover > * {
  transform: translateY(-8px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

/* Item placements */
.bento-item.system-info { grid-column: 1 / 3; grid-row: 1 / 2; }
.bento-item.system-clock { grid-column: 3 / 4; grid-row: 1 / 2; }
.bento-item.file-explorer { grid-column: 1 / 4; grid-row: 2 / 3; }

/* File Explorer Card */
.file-explorer {
  background: rgba(var(--card-bg-rgb), 0.4);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  border: 1px solid rgba(var(--border-color-rgb), 0.1);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.window-header {
  background-color: rgba(var(--card-bg-rgb), 0.3);
  padding: 0.5rem 1rem;
  border-bottom: 1px solid rgba(var(--border-color-rgb), 0.1);
  color: var(--text-color-secondary);
  font-family: 'Fira Code', monospace;
  font-size: 0.8rem;
  text-align: center;
}
.file-list {
  padding: 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  align-items: center;
  flex-grow: 1;
}
.file-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: var(--text-color-primary);
  padding: 1rem;
  border-radius: 12px;
  transition: background-color 0.2s;
}
.file-item:hover {
  background-color: rgba(var(--border-color-rgb), 0.2);
}
.file-item span {
  font-weight: 500;
}

/* Responsive adjustments */
@media (max-width: 960px) {
  .bento-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
  }
  .bento-item.system-info, .bento-item.system-clock, .bento-item.file-explorer {
    grid-column: auto;
    grid-row: auto;
  }
}
</style>

