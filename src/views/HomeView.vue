<!-- File: src/views/HomeView.vue -->
<!-- (DIPERBARUI) Menambahkan seksi showcase khusus untuk "Now Playing" dan memperbaiki tag penutup. -->
<script setup>
import ContentCard from '../components/ui/ContentCard.vue';
import NowPlaying from '../components/ui/NowPlaying.vue';
</script>

<template>
  <div class="home-view">
    <!-- Hero Section -->
    <section class="hero-section">
      <h1 class="hero-title fade-in-up">A Creative Mind's Digital Playground.</h1>
      <p class="hero-subtitle fade-in-up" style="animation-delay: 0.2s;">
        Curated thoughts, favorite melodies, and snapshots of inspiration. Welcome to my personal realm.
      </p>
      <button class="hero-cta fade-in-up" style="animation-delay: 0.4s;">Explore More</button>
    </section>

    <!-- Now Playing Showcase Section -->
    <section class="now-playing-showcase fade-in-up" style="animation-delay: 0.6s;">
      <h2 class="section-title">Current Vibe</h2>
      <NowPlaying />
    </section>

    <!-- Content Grid -->
    <section class="content-grid">
      <ContentCard title="Favorite Quote" class="fade-in-up" style="animation-delay: 0.8s;">
        <blockquote>
          "The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with."
          <cite>- Paul Rand</cite>
        </blockquote>
      </ContentCard>
      
      <ContentCard title="Current Tech Stack" class="fade-in-up" style="animation-delay: 1s;">
         <p>Building this space with Vue.js, Vite, and a lot of coffee.</p>
      </ContentCard>
    </section>
  </div>
</template>

<style scoped>
/* Style tidak berubah, gunakan yang sudah ada */
.hero-section {
  text-align: center;
  padding: 4rem 1rem;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 700;
}

.hero-subtitle {
  margin-top: 1rem;
  font-size: 1.1rem;
  color: var(--text-color-secondary);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-cta {
  margin-top: 2rem;
  background-color: var(--accent-color);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.hero-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 122, 255, 0.3);
}

/* BAGIAN BARU: Style untuk showcase "Now Playing" */
.now-playing-showcase {
  background-color: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 2rem;
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-title {
  color: var(--text-color-secondary);
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 1.5rem;
}

.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
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
</style>

