<!-- File: src/views/ModDetailView.vue -->
<!-- (DIPERBARUI) Dirombak total dengan desain "Inspector Panel" yang baru. -->
<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { mods } from '../data/mods.js';
import { useNotifications } from '../composables/useNotifications.js';

const route = useRoute();
const router = useRouter();
const { showNotification } = useNotifications();

const mod = computed(() => mods.find(m => m.slug === route.params.slug));

if (!mod.value) {
  router.replace('/404');
}

// State baru untuk mengontrol tab yang aktif
const activeTab = ref('details'); // 'details', 'changelog', 'gallery'

onMounted(() => {
  const isRisky = mod.value.category === 'Game Mod' || mod.value.category === 'Script';
  if (isRisky) {
    showNotification({
      type: 'warning',
      title: 'Risk Warning',
      message: 'Using mods or scripts can result in an account ban. Please proceed at your own risk.',
      duration: 10000
    });
  }
});

const formattedDate = (dateString) => {
  if (!dateString) return '';
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  });
};

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
      setTimeout(() => isDownloading.value = false, 2000);
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
              <li v-for="feature in mod.features" :key="feature"><v-icon name="fa-check-circle" /><span>{{ feature }}</span></li>
            </ul>
          </div>
          
          <div class="section">
            <h2 class="section-title">Installation</h2>
            <pre class="instructions">{{ mod.instructions }}</pre>
          </div>

          <div class="section">
            <h2 class="section-title">Discussion</h2>
            <div class="discussion-placeholder">
              <p>Comments and discussions are coming soon to JiyaOS.</p>
              <span>For now, feel free to reach out via my social media links in the footer.</span>
            </div>
          </div>
        </div>

        <aside class="sidebar">
          <div class="info-box">
            <div class="window-header">/var/log/details</div>
            <div class="tab-navigation">
              <button :class="{ active: activeTab === 'details' }" @click="activeTab = 'details'">Details</button>
              <button v-if="mod.olderVersions && mod.olderVersions.length > 0" :class="{ active: activeTab === 'changelog' }" @click="activeTab = 'changelog'">Changelog</button>
              <button v-if="mod.gallery && mod.gallery.length > 0" :class="{ active: activeTab === 'gallery' }" @click="activeTab = 'gallery'">Gallery</button>
            </div>

            <div class="tab-content">
              <!-- Details Tab -->
              <div v-if="activeTab === 'details'" class="tab-pane">
                <div class="details-group">
                  <h4 class="details-group-title">File Info</h4>
                  <div class="info-item"><span class="label">Version</span><span class="value">{{ mod.version }}</span></div>
                  <div class="info-item"><span class="label">Last Updated</span><span class="value">{{ formattedDate(mod.lastUpdated) }}</span></div>
                   <div class="info-item"><span class="label">Downloads</span><span class="value">{{ mod.downloads.toLocaleString() }}</span></div>
                </div>
                <div class="details-group">
                  <h4 class="details-group-title">Requirements</h4>
                  <div v-if="mod.minAndroid" class="info-item"><span class="label">Android</span><span class="value">{{ mod.minAndroid }}</span></div>
                  <div class="info-item"><span class="label">Root</span><span class="value">{{ mod.requiresRoot ? 'Required' : 'Not Required' }}</span></div>
                </div>
              </div>

              <!-- Changelog Tab -->
              <div v-if="activeTab === 'changelog'" class="tab-pane">
                <div class="version-history-list">
                  <div class="version-item" v-for="version in mod.olderVersions" :key="version.version">
                    <div class="version-info">
                      <span class="version-number">v{{ version.version }}</span>
                      <span class="version-date">{{ formattedDate(version.date) }}</span>
                    </div>
                    <a :href="version.url" class="version-download" target="_blank" rel="noopener noreferrer" aria-label="Download this version">
                      <v-icon name="md-download" />
                    </a>
                  </div>
                </div>
              </div>

              <!-- Gallery Tab -->
              <div v-if="activeTab === 'gallery'" class="tab-pane gallery-pane">
                <img v-for="(img, index) in mod.gallery" :key="index" :src="img" :alt="`Gallery image ${index + 1}`" />
              </div>
            </div>
            
            <div class="info-footer">
              <button @click="startDownload" class="download-button" :disabled="isDownloading">
                <span v-if="!isDownloading">Download Current (v{{ mod.version }})</span>
                <span v-else>Starting in {{ countdown }}...</span>
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Style tidak berubah, gunakan yang sudah ada */
.mod-detail-card { background: rgba(var(--card-bg-rgb), 0.4); backdrop-filter: blur(25px); -webkit-backdrop-filter: blur(25px); border: 1px solid rgba(var(--border-color-rgb), 0.1); border-radius: 16px; overflow: hidden; margin: 2rem auto; }
.card-header { position: relative; height: 300px; }
.header-image { width: 100%; height: 100%; object-fit: cover; }
.header-overlay { position: absolute; bottom: 0; left: 0; width: 100%; padding: 2rem; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); color: white; }
.mod-title { font-size: 2.5rem; font-weight: 700; text-shadow: 0 2px 10px rgba(0,0,0,0.5); }
.game-tag { display: inline-block; background-color: var(--accent-color); color: white; padding: 0.25rem 0.6rem; border-radius: 9999px; font-size: 0.8rem; font-weight: 500; margin-top: 0.5rem; }
.card-body {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 300px; /* Sidebar sedikit lebih lebar */
  grid-template-areas: "main sidebar";
  gap: 2rem;
  padding: 2rem;
}
.main-content { grid-area: main; }
.sidebar { grid-area: sidebar; }
.section { margin-bottom: 2.5rem; }
.section:last-child { margin-bottom: 0; }
.section-title { font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; border-bottom: 1px solid rgba(var(--border-color-rgb), 0.2); padding-bottom: 0.5rem; }
.features-list { list-style: none; padding: 0; }
.features-list li { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem; color: var(--text-color-secondary); }
.features-list .v-icon { color: var(--accent-color); }
.instructions { background: rgba(var(--border-color-rgb), 0.1); padding: 1rem; border-radius: 8px; white-space: pre-wrap; font-family: 'Fira Code', monospace; line-height: 1.8; }
.discussion-placeholder { background: rgba(var(--border-color-rgb), 0.1); padding: 2rem; border-radius: 12px; text-align: center; border: 1px dashed rgba(var(--border-color-rgb), 0.3); }
.discussion-placeholder p { font-weight: 500; margin-bottom: 0.5rem; }
.discussion-placeholder span { font-size: 0.9rem; color: var(--text-color-secondary); }

/* PERUBAHAN: Didesain ulang total */
.info-box {
  background: rgba(var(--card-bg-rgb), 0.2);
  border: 1px solid rgba(var(--border-color-rgb), 0.1);
  border-radius: 16px;
  position: sticky;
  top: 100px;
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
  flex-shrink: 0;
}
.tab-navigation {
  display: flex;
  padding: 0.5rem;
  border-bottom: 1px solid rgba(var(--border-color-rgb), 0.1);
  background-color: rgba(var(--card-bg-rgb), 0.2);
}
.tab-navigation button {
  flex: 1;
  background: none;
  border: none;
  color: var(--text-color-secondary);
  padding: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}
.tab-navigation button.active {
  background: rgba(var(--card-bg-rgb), 0.5);
  color: var(--text-color-primary);
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}
.tab-content {
  padding: 1.5rem;
  flex-grow: 1;
}
.details-group { margin-bottom: 1.5rem; }
.details-group:last-child { margin-bottom: 0; }
.details-group-title { font-size: 0.8rem; font-weight: 500; color: var(--text-color-secondary); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 0.75rem; }
.info-item { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; font-size: 0.9rem; }
.info-item .label { color: var(--text-color-secondary); }
.info-item .value { font-weight: 500; color: var(--text-color-primary); font-family: 'Fira Code', monospace; }

.version-history-list { display: flex; flex-direction: column; gap: 0.5rem; }
.version-item {
  display: grid; grid-template-columns: 1fr auto; gap: 1rem;
  align-items: center; background: rgba(var(--border-color-rgb), 0.1); padding: 0.5rem 0.75rem; border-radius: 6px; font-size: 0.9rem;
}
.version-info { display: flex; flex-direction: column; line-height: 1.3; }
.version-number { font-family: 'Fira Code', monospace; font-weight: 500; }
.version-date { font-size: 0.8rem; color: var(--text-color-secondary); }
.version-download { color: var(--text-color-secondary); transition: color 0.2s; }
.version-download:hover { color: var(--accent-color); }

.gallery-pane { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; }
.gallery-pane img { width: 100%; border-radius: 8px; }

.info-footer {
  margin-top: auto; /* Mendorong ke bawah */
  padding: 1rem;
  border-top: 1px solid rgba(var(--border-color-rgb), 0.1);
  background-color: rgba(var(--card-bg-rgb), 0.2);
}
.download-button { display: flex; justify-content: center; align-items: center; gap: 0.5rem; width: 100%; background-color: var(--accent-color); color: white; border: none; padding: 0.75rem 1rem; border-radius: 8px; font-size: 1rem; font-weight: 600; cursor: pointer; text-decoration: none; transition: all 0.2s; }
.download-button:hover:not(:disabled) { transform: scale(1.05); }
.download-button:disabled { background-color: var(--text-color-secondary); cursor: not-allowed; }

@media (max-width: 960px) {
  .card-body {
    grid-template-columns: 1fr;
    grid-template-areas: "main" "sidebar";
  }
  .sidebar { width: 100%; }
  .info-box { position: static; }
}
</style>

