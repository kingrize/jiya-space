<!-- File: src/views/ModDetailView.vue -->
<!-- (DIPERBARUI) Menampilkan detail teknis baru dan menambahkan logika unduhan. -->
<script setup>
import { ref, computed, onUnmounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { mods } from '../data/mods.js';

const route = useRoute();
const router = useRouter();

const mod = computed(() => mods.find(m => m.slug === route.params.slug));

if (!mod.value) {
  router.replace('/404');
}

// State untuk tombol unduh
const isDownloading = ref(false);
const countdown = ref(3);
let countdownInterval = null;

const startDownload = () => {
  if (isDownloading.value) return;

  isDownloading.value = true;
  countdown.value = 3;

  countdownInterval = setInterval(() => {
    countdown.value -= 1;
    if (countdown.value === 0) {
      clearInterval(countdownInterval);
      window.location.href = mod.value.downloadUrl;
    }
  }, 1000);
};

onUnmounted(() => {
  if (countdownInterval) clearInterval(countdownInterval);
});
</script>

<template>
  <div v-if="mod" class="page-container fade-in-up">
    <div class="mod-detail-card">
      <div class="card-header">
        <img :src="mod.image" :alt="mod.title" class="header-image" />
        <div class="header-overlay">
          <h1 class="mod-title">{{ mod.title }}</h1>
          <span class="game-tag">{{ mod.game }}</span>
        </div>
      </div>
      
      <div class="card-body">
        <div class="main-content">
          <div class="section">
            <h2 class="section-title">Description</h2>
            <p>{{ mod.description }}</p>
          </div>

          <div class="section">
            <h2 class="section-title">Features</h2>
            <ul class="features-list">
              <li v-for="feature in mod.features" :key="feature">
                <v-icon name="fa-check-circle" />
                <span>{{ feature }}</span>
              </li>
            </ul>
          </div>
          
          <div v-if="mod.gallery && mod.gallery.length" class="section">
            <h2 class="section-title">Gallery</h2>
            <div class="gallery-grid">
              <img v-for="(img, index) in mod.gallery" :key="index" :src="img" :alt="`Gallery image ${index + 1}`" />
            </div>
          </div>
          
          <div class="section">
            <h2 class="section-title">Installation</h2>
            <pre class="instructions">{{ mod.instructions }}</pre>
          </div>
        </div>

        <aside class="sidebar">
          <div class="info-box">
            <h3>Details</h3>
            <p><v-icon name="fa-tag" /> <strong>Version:</strong> {{ mod.version }}</p>
            <p v-if="mod.minAndroid"><v-icon name="fa-android" /> <strong>Android:</strong> {{ mod.minAndroid }}</p>
            <p><v-icon name="fa-shield-alt" /> <strong>Root:</strong> {{ mod.requiresRoot ? 'Required' : 'Not Required' }}</p>
            
            <button @click="startDownload" class="download-button" :disabled="isDownloading">
              <v-icon v-if="!isDownloading" name="md-download" />
              <span v-if="!isDownloading">Download</span>
              <span v-else>Starting in {{ countdown }}...</span>
            </button>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Style tidak berubah, gunakan yang sudah ada */
.mod-detail-card {
  background: rgba(var(--card-bg-rgb), 0.4);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  border: 1px solid rgba(var(--border-color-rgb), 0.1);
  border-radius: 16px;
  overflow: hidden;
  margin: 2rem auto;
}
.card-header { position: relative; height: 300px; }
.header-image { width: 100%; height: 100%; object-fit: cover; }
.header-overlay { position: absolute; bottom: 0; left: 0; width: 100%; padding: 2rem; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); color: white; }
.mod-title { font-size: 2.5rem; font-weight: 700; text-shadow: 0 2px 10px rgba(0,0,0,0.5); }
.game-tag { display: inline-block; background-color: var(--accent-color); color: white; padding: 0.25rem 0.6rem; border-radius: 9999px; font-size: 0.8rem; font-weight: 500; margin-top: 0.5rem; }
.card-body { display: grid; grid-template-columns: 3fr 1fr; gap: 2rem; padding: 2rem; }
.section { margin-bottom: 2.5rem; }
.section-title { font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; border-bottom: 1px solid rgba(var(--border-color-rgb), 0.2); padding-bottom: 0.5rem; }

.features-list { list-style: none; padding: 0; }
.features-list li { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem; color: var(--text-color-secondary); }
.features-list .v-icon { color: var(--accent-color); }

.gallery-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; }
.gallery-grid img { width: 100%; border-radius: 8px; }

.instructions { background: rgba(var(--border-color-rgb), 0.1); padding: 1rem; border-radius: 8px; white-space: pre-wrap; font-family: 'Fira Code', monospace; line-height: 1.8; }

.sidebar { position: relative; }
.info-box { background: rgba(var(--border-color-rgb), 0.1); padding: 1.5rem; border-radius: 12px; position: sticky; top: 100px; }
.info-box h3 { font-size: 1.2rem; margin-bottom: 1rem; }
.info-box p { margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem; }
.download-button { display: flex; justify-content: center; align-items: center; gap: 0.5rem; width: 100%; background-color: var(--accent-color); color: white; border: none; padding: 0.75rem 1rem; border-radius: 8px; font-size: 1rem; font-weight: 600; cursor: pointer; text-decoration: none; transition: all 0.2s; }
.download-button:hover:not(:disabled) { transform: scale(1.05); }
.download-button:disabled { background-color: var(--text-color-secondary); cursor: not-allowed; }

@media (max-width: 960px) {
  .card-body { grid-template-columns: 1fr; }
  .info-box { position: static; }
}
</style>

