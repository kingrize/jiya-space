<!-- File: src/components/ui/NowPlayingWidget.vue -->
<!-- (FILE BARU) Widget ringkas untuk menampilkan status Spotify di panel inspektur. -->
<script setup>
import { ref, onMounted } from 'vue';

const song = ref(null);
const loading = ref(true);

const fetchNowPlaying = async () => {
  try {
    const response = await fetch('/.netlify/functions/get-spotify-now-playing');
    if (!response.ok) throw new Error();
    song.value = await response.json();
  } catch (error) {
    console.error('Error fetching now playing data:', error);
    song.value = { isPlaying: false };
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchNowPlaying();
  // Anda bisa menambahkan interval di sini jika ingin refresh otomatis
});
</script>

<template>
  <div class="now-playing-widget">
    <div v-if="loading" class="state-text">Loading status...</div>
    <a v-else-if="song && song.isPlaying" :href="song.songUrl" target="_blank" rel="noopener noreferrer" class="song-info">
      <img :src="song.albumImageUrl" :alt="song.album" class="album-art" />
      <div class="song-details">
        <p class="song-title">{{ song.title }}</p>
        <p class="song-artist">{{ song.artist }}</p>
      </div>
    </a>
    <div v-else class="state-text">Not currently playing.</div>
  </div>
</template>

<style scoped>
.now-playing-widget {
  min-height: 60px;
  display: flex;
  align-items: center;
}
.state-text {
  font-size: 0.9rem;
  color: var(--text-color-secondary);
}
.song-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  width: 100%;
}
.album-art {
  width: 50px;
  height: 50px;
  border-radius: 6px;
  object-fit: cover;
  flex-shrink: 0;
}
.song-details {
  min-width: 0; /* Mencegah overflow */
}
.song-title, .song-artist {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
