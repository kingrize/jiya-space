<!-- File: src/components/ui/NowPlaying.vue -->
<!-- (DIPERBARUI) Diubah total menjadi floating bar. -->
<script setup>
import { ref, onMounted } from 'vue';

const song = ref(null);
const loading = ref(true);

const fetchNowPlaying = async () => {
  try {
    const response = await fetch('/.netlify/functions/get-spotify-now-playing');
    if (!response.ok) throw new Error(`Server responded with ${response.status}`);
    const data = await response.json();
    song.value = data;
  } catch (error) {
    console.error('Error fetching now playing data:', error);
    song.value = { isPlaying: false };
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchNowPlaying();
});
</script>

<template>
  <div class="floating-bar-container fade-in-up" v-if="!loading && song && song.isPlaying">
    <a :href="song.songUrl" target="_blank" rel="noopener noreferrer" class="song-link">
      <img :src="song.albumImageUrl" :alt="song.album" class="album-art" />
      <div class="song-details">
        <p class="now-playing-label">Now Playing</p>
        <p class="song-title" :title="song.title">{{ song.title }}</p>
        <p class="song-artist" :title="song.artist">{{ song.artist }}</p>
      </div>
    </a>
  </div>
</template>

<style scoped>
.floating-bar-container {
  position: fixed;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  
  width: calc(100% - 3rem);
  max-width: 400px;

  background-color: rgba(var(--card-bg-rgb, 255, 255, 255), 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  
  border: 1px solid var(--border-color);
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  
  padding: 0.75rem;
  overflow: hidden;
}

.song-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: inherit;
}

.album-art {
  width: 56px;
  height: 56px;
  border-radius: 8px;
  object-fit: cover;
  flex-shrink: 0;
}

.song-details {
  display: flex;
  flex-direction: column;
  overflow: hidden; /* Mencegah teks keluar dari bar */
}

.now-playing-label {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--text-color-secondary);
}

.song-title, .song-artist {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; /* Menambahkan '...' jika teks terlalu panjang */
}

.song-title {
  font-weight: 600;
  color: var(--text-color-primary);
}

.song-artist {
  font-size: 0.9rem;
  color: var(--text-color-secondary);
}

/* Penyesuaian untuk light/dark mode background */
:root {
  --card-bg-rgb: 255, 255, 255;
}
:root.dark {
  --card-bg-rgb: 31, 41, 55;
}
</style>

