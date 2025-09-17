<!-- File: src/components/ui/NowPlaying.vue -->
<!-- (FILE BARU) Komponen untuk menampilkan lagu yang sedang diputar di Spotify. -->
<script setup>
import { ref, onMounted } from 'vue';

const song = ref(null);
const loading = ref(true);

// Fungsi untuk mengambil data dari serverless function kita
const fetchNowPlaying = async () => {
  try {
    // URL ini secara ajaib akan berfungsi baik di lokal maupun saat di-deploy
    const response = await fetch('/.netlify/functions/get-spotify-now-playing');
    if (!response.ok) {
      throw new Error(`Server responded with ${response.status}`);
    }
    const data = await response.json();
    song.value = data;
  } catch (error) {
    console.error('Error fetching now playing data:', error);
    song.value = { isPlaying: false }; // Anggap tidak ada lagu jika error
  } finally {
    loading.value = false;
  }
};

// Panggil fungsi saat komponen pertama kali dimuat
onMounted(() => {
  fetchNowPlaying();
});
</script>

<template>
  <div class="now-playing-container">
    <div v-if="loading" class="loading-state">
      <p>Fetching my current vibe...</p>
    </div>
    
    <div v-else-if="song && song.isPlaying" class="song-info">
      <a :href="song.songUrl" target="_blank" rel="noopener noreferrer" class="song-link">
        <img :src="song.albumImageUrl" :alt="song.album" class="album-art" />
        <div class="song-details">
          <p class="song-title">{{ song.title }}</p>
          <p class="song-artist">{{ song.artist }}</p>
        </div>
      </a>
    </div>

    <div v-else class="not-playing-state">
      <p>Not currently playing. Probably coding.</p>
    </div>
  </div>
</template>

<style scoped>
.now-playing-container {
  min-height: 64px;
  display: flex;
  align-items: center;
}

.loading-state, .not-playing-state {
  color: var(--text-color-secondary);
}

.song-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: inherit;
  width: 100%;
  transition: transform 0.2s;
}

.song-link:hover {
  transform: scale(1.02);
}

.album-art {
  width: 64px;
  height: 64px;
  border-radius: 8px;
  object-fit: cover;
}

.song-details {
  display: flex;
  flex-direction: column;
}

.song-title {
  font-weight: 600;
  color: var(--text-color-primary);
}

.song-artist {
  font-size: 0.9rem;
  color: var(--text-color-secondary);
}
</style>
