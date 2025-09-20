<!-- File: src/components/ui/BootScreen.vue -->
<!-- (DIPERBARUI) Mengganti ASCII art dengan gambar GIF. -->
<script setup>
// Impor file GIF Anda dari folder assets
import loadingGif from '../../assets/images/loading.gif';
</script>

<template>
  <div class="boot-screen">
    <div class="boot-content">
      <!-- Menggunakan tag <img> untuk menampilkan GIF -->
      <img :src="loadingGif" alt="JiyaOS is booting..." class="boot-gif" />
      <p class="boot-text">JiyaOS is booting<span class="dots"><span>.</span><span>.</span><span>.</span></span></p>
    </div>
  </div>
</template>

<style scoped>
.boot-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--background-color);
  color: var(--text-color-primary);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Fira Code', monospace;
}

.boot-content {
  text-align: center;
}

/* Style baru untuk GIF */
.boot-gif {
  width: 150px; /* Anda bisa sesuaikan ukurannya */
  height: 150px;
  margin-bottom: 2rem;
}

.boot-text {
  font-size: 1.2rem;
  color: var(--text-color-secondary);
}

/* Animasi titik-titik (tidak berubah) */
.dots span {
  animation: blink 1.4s infinite both;
}
.dots span:nth-child(2) {
  animation-delay: 0.2s;
}
.dots span:nth-child(3) {
  animation-delay: 0.4s;
}
@keyframes blink {
  0% { opacity: 0.2; }
  20% { opacity: 1; }
  100% { opacity: 0.2; }
}
</style>

