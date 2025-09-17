<!-- File: src/components/layout/Footer.vue -->
<!-- (DIPERBARUI) Dirombak total untuk mengintegrasikan widget NowPlaying. -->
<script setup>
import { computed } from 'vue';
import NowPlaying from '../ui/NowPlaying.vue';

const currentYear = computed(() => new Date().getFullYear());
</script>

<template>
  <footer class="footer-container">
    <div class="footer-content">
      <!-- Bagian Kiri: Widget Spotify -->
      <div class="now-playing-section">
        <NowPlaying />
      </div>

      <!-- Bagian Kanan: Hak Cipta & Tautan Sosial -->
      <div class="footer-links">
        <div class="social-links">
          <a href="https://github.com/kingrize" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <v-icon name="co-github" scale="1.2" />
          </a>
          <a href="https://instagram.com/arzhasnoidea" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <v-icon name="co-instagram" scale="1.2" />
          </a>
          <a href="https://facebook.com/shallwelife" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <v-icon name="co-facebook" scale="1.2" />
          </a>
        </div>
        <p class="copyright">&copy; {{ currentYear }} Jiya. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-container {
  padding: 2rem;
  border-top: 1px solid var(--border-color);
  margin-top: 4rem;
}

.footer-content {
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.now-playing-section {
  flex: 1;
}

.footer-links {
  text-align: right;
  flex-shrink: 0;
}

.social-links {
  display: flex;
  gap: 1.5rem;
  justify-content: flex-end;
  margin-bottom: 0.5rem;
}

.social-links a {
  color: var(--text-color-secondary);
  transition: color 0.2s, transform 0.2s;
}

.social-links a:hover {
  color: var(--text-color-primary);
  transform: scale(1.1);
}

.copyright {
  font-size: 0.9rem;
  color: var(--text-color-secondary);
}

/* Penyesuaian untuk layar seluler */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }

  .footer-links {
    text-align: left;
    width: 100%;
  }

  .social-links {
    justify-content: flex-start;
  }
}
</style>

