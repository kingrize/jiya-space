<!-- File: src/views/AboutView.vue -->
<!-- (DIPERBARUI) Menggunakan path relatif untuk impor gambar avatar. -->
<script setup>
// Menggunakan path relatif untuk memastikan file ditemukan.
// Dari 'src/views', kita naik satu level ('..') ke 'src', lalu masuk ke 'assets'.
import avatarUrl from '../assets/images/avatar.jpg';
</script>

<template>
  <div class="page-container fade-in-up">
    <h1 class="page-title">About Me</h1>
    <p class="page-subtitle">A little bit about my journey and passions.</p>
    
    <div class="about-content">
      <div class="profile-picture-container">
        <!-- Menggunakan variabel avatarUrl yang sudah diimpor -->
        <img :src="avatarUrl" alt="Jiya's profile picture" class="profile-picture">
      </div>
      <div class="bio-text">
        <h2>Hello, I'm Jiya.</h2>
        <p>
          I am a passionate front-end developer with a love for creating clean, intuitive, and performant web experiences. My journey into web development started with a simple curiosity about how websites work, and it has since grown into a full-fledged passion for building things for the web.
        </p>
        <p>
          I specialize in the modern JavaScript ecosystem, with a strong focus on frameworks like Vue.js. I believe that good design is not just about aesthetics, but also about creating a seamless and enjoyable experience for the end-user.
        </p>

        <div class="social-links">
          <h3>Connect with me:</h3>
          <div class="links-container">
            <a href="https://github.com/kingrize" target="_blank" rel="noopener noreferrer" class="social-link">
              <v-icon name="co-github" scale="1.1" />
              <span>GitHub</span>
            </a>
            <a href="https://instagram.com/arzhasnoidea" target="_blank" rel="noopener noreferrer" class="social-link">
              <v-icon name="co-instagram" scale="1.1" />
              <span>Instagram</span>
            </a>
            <a href="https://facebook.com/shallwelife" target="_blank" rel="noopener noreferrer" class="social-link">
              <v-icon name="co-facebook-f" scale="1.1" />
              <span>Facebook</span>
            </a>
          </div>
        </div>

        <div class="skills-section">
          <h3>Core Skills:</h3>
          <div class="skills-tags">
            <span class="tech-tag">JavaScript (ES6+)</span>
            <span class="tech-tag">Vue.js</span>
            <span class="tech-tag">HTML5 & CSS3</span>
            <span class="tech-tag">Responsive Design</span>
            <span class="tech-tag">Git & GitHub</span>
            <span class="tech-tag">UI/UX Principles</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  padding: 2rem 0;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.5rem;
}

.page-subtitle {
  text-align: center;
  color: var(--text-color-secondary);
  font-size: 1.1rem;
  margin-bottom: 3rem;
}

.about-content {
  display: flex;
  gap: 3rem;
  align-items: flex-start;
  background-color: var(--card-bg);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
}

.profile-picture-container {
  flex-shrink: 0;
}

.profile-picture {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--border-color);
}

.bio-text h2 {
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.bio-text p {
  margin-bottom: 1rem;
  line-height: 1.7;
}

.social-links {
  margin-top: 2rem;
}

.social-links h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-color-secondary);
}

.links-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: var(--text-color-secondary);
  transition: color 0.2s;
  font-weight: 500;
}

.social-link:hover {
  color: var(--accent-color);
}

.skills-section {
  margin-top: 2rem;
}

.skills-section h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-color-secondary);
}

.skills-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

/* Penyesuaian untuk layar seluler */
@media (max-width: 768px) {
  .about-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2rem;
  }
  .links-container {
    justify-content: center;
  }
}
</style>

