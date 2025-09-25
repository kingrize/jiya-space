<!-- File: src/views/HomeView.vue -->
<!-- (DIPERBARUI) Menyembunyikan panel inspektur di seluler untuk pengalaman yang lebih bersih. -->
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import avatarUrl from '../assets/images/avatar.jpg';

const mantra = {
  text: "The details are not the details. They make the design.",
  author: "Charles Eames"
};

// --- Logika untuk Latar Belakang Partikel 2D ---
const canvasContainer = ref(null);
let ctx;
let particlesArray;
const mouse = { x: null, y: null, radius: 100 };

class Particle {
  constructor(x, y, directionX, directionY, size, color) {
    this.x = x; this.y = y;
    this.directionX = directionX; this.directionY = directionY;
    this.size = size; this.color = color;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
  update() {
    if (this.x > ctx.canvas.width || this.x < 0) this.directionX = -this.directionX;
    if (this.y > ctx.canvas.height || this.y < 0) this.directionY = -this.directionY;
    this.x += this.directionX;
    this.y += this.directionY;
    this.draw();
  }
}

const init = () => {
  if (!ctx) return;
  particlesArray = [];
  const numberOfParticles = (ctx.canvas.height * ctx.canvas.width) / 9000;
  for (let i = 0; i < numberOfParticles; i++) {
    const size = Math.random() * 2 + 1;
    const x = Math.random() * (ctx.canvas.width - size * 2) + size;
    const y = Math.random() * (ctx.canvas.height - size * 2) + size;
    const directionX = (Math.random() * .4) - .2;
    const directionY = (Math.random() * .4) - .2;
    const color = getComputedStyle(document.documentElement).getPropertyValue('--accent-color') || 'rgba(0, 122, 255, 0.7)';
    particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
  }
};

const connect = () => {
  let opacityValue = 1;
  const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent-color') || '#007AFF';
  for (let a = 0; a < particlesArray.length; a++) {
    for (let b = a; b < particlesArray.length; b++) {
      const distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) +
        ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
      if (distance < (ctx.canvas.width/7) * (ctx.canvas.height/7)) {
        opacityValue = 1 - (distance/20000);
        ctx.strokeStyle = `${accentColor}${Math.floor(opacityValue * 255).toString(16).padStart(2, '0')}`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
        ctx.stroke();
      }
    }
  }
};

let animationFrameId;
const animate = () => {
  if (ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
      particlesArray[i].update();
    }
    connect();
  }
  animationFrameId = requestAnimationFrame(animate);
};

onMounted(() => {
  if (!canvasContainer.value) return;
  const canvas = canvasContainer.value;
  ctx = canvas.getContext('2d');
  
  const setCanvasSize = () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    init();
  };
  setCanvasSize();

  animate();

  const onMouseMove = (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  };
  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('resize', setCanvasSize);

  onUnmounted(() => {
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('resize', setCanvasSize);
    cancelAnimationFrame(animationFrameId);
  });
});
</script>

<template>
  <div class="studio-layout">
    <!-- Panel Kiri: Artboard -->
    <div class="artboard-panel">
      <canvas ref="canvasContainer" class="artboard-canvas"></canvas>
      <div class="artboard-content fade-in-up">
        <h1 class="hero-title">A space for creation and exploration.</h1>
        <p class="hero-subtitle">Welcome to my digital studio. This is where I experiment, build, and share my passion for crafting beautiful and functional web experiences.</p>
      </div>
    </div>

    <!-- Panel Kanan: Inspector -->
    <aside class="inspector-panel">
      <!-- Kartu Profil -->
      <div class="inspector-card" v-animate-on-scroll>
        <div class="profile-header">
          <img :src="avatarUrl" alt="Jiya Avatar" class="profile-avatar" />
          <div class="profile-text">
            <h3 class="profile-name">Jiya</h3>
            <p class="profile-title">Front-End Developer</p>
          </div>
        </div>
      </div>

      <!-- Kartu Aksi Cepat -->
      <div class="inspector-card" v-animate-on-scroll style="--delay: 0.1s;">
        <h4 class="card-title">Quick Actions</h4>
        <div class="action-list">
          <router-link to="/mods" class="action-item"><v-icon name="io-game-controller" /><span>Mods</span></router-link>
          <router-link to="/sky-clock" class="action-item"><v-icon name="fa-star" /><span>Sky Clock</span></router-link>
          <router-link to="/about" class="action-item"><v-icon name="co-user" /><span>About</span></router-link>
          <router-link to="/contact" class="action-item"><v-icon name="fa-envelope" /><span>Contact</span></router-link>
        </div>
      </div>

      <!-- Kartu Prinsip Desain -->
      <div class="inspector-card" v-animate-on-scroll style="--delay: 0.2s;">
        <h4 class="card-title">Design Principle</h4>
        <blockquote class="quote">
          "{{ mantra.text }}"
          <cite>- {{ mantra.author }}</cite>
        </blockquote>
      </div>
    </aside>
  </div>
</template>

<style scoped>
.studio-layout {
  display: grid;
  grid-template-columns: 3fr 2fr;
  min-height: calc(100vh - 80px);
}

/* Panel Kiri: Artboard */
.artboard-panel {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  overflow: hidden;
}
.artboard-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.artboard-content {
  position: relative;
  z-index: 2;
  text-align: center;
}
.hero-title {
  font-size: 3rem;
  font-weight: 700;
  color: var(--text-color-primary);
  max-width: 500px;
  margin: 0 auto;
}
.hero-subtitle {
  margin-top: 1.5rem;
  font-size: 1.1rem;
  color: var(--text-color-secondary);
  max-width: 450px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.8;
}

/* Panel Kanan: Inspector */
.inspector-panel {
  background: rgba(var(--card-bg-rgb), 0.2);
  border-left: 1px solid rgba(var(--border-color-rgb), 0.1);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Kartu di dalam Inspector */
.inspector-card {
  background: rgba(var(--card-bg-rgb), 0.4);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(var(--border-color-rgb), 0.1);
  border-radius: 12px;
  padding: 1.5rem;
}
.card-title {
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--text-color-secondary);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;
}

/* Kartu Profil */
.profile-header {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.profile-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}
.profile-name {
  font-size: 1.2rem;
  font-weight: 600;
}
.profile-title {
  color: var(--text-color-secondary);
}

/* Kartu Aksi Cepat */
.action-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.action-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 8px;
  text-decoration: none;
  color: var(--text-color-primary);
  font-weight: 500;
  transition: background-color 0.2s;
}
.action-item:hover {
  background-color: rgba(var(--border-color-rgb), 0.2);
  color: var(--accent-color);
}

/* Kartu Kutipan */
.quote {
  font-style: italic;
  line-height: 1.6;
}
.quote cite {
  display: block;
  margin-top: 0.75rem;
  font-style: normal;
  font-size: 0.9rem;
  color: var(--text-color-secondary);
}

/* PERBAIKAN: Tata letak responsif */
@media (max-width: 960px) {
  .studio-layout {
    grid-template-columns: 1fr; /* Tumpuk menjadi satu kolom */
  }
  .artboard-panel {
    min-height: 70vh; /* Pastikan artboard tetap tinggi */
  }
  .inspector-panel {
    display: none; /* Sembunyikan panel inspektur di seluler */
  }
}
</style>

