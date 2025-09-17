<!-- File: src/views/AboutView.vue -->
<!-- (DIPERBARUI) Mengganti placeholder dengan konten bio yang terstruktur. -->
<template>
  <div class="page-container fade-in-up">
    <h1 class="page-title">About Me</h1>
    <p class="page-subtitle">A little bit about my journey and passions.</p>
    
    <div class="about-content">
      <div class="profile-picture-container">
        <!-- Anda bisa mengganti URL ini dengan foto Anda sendiri -->
        <img src="https://i.pravatar.cc/150" alt="Jiya's profile picture" class="profile-picture">
      </div>
      <div class="bio-text">
        <h2>Hello, I'm Jiya.</h2>
        <p>
          I am a passionate front-end developer with a love for creating clean, intuitive, and performant web experiences. My journey into web development started with a simple curiosity about how websites work, and it has since grown into a full-fledged passion for building things for the web.
        </p>
        <p>
          I specialize in the modern JavaScript ecosystem, with a strong focus on frameworks like Vue.js. I believe that good design is not just about aesthetics, but also about creating a seamless and enjoyable experience for the end-user.
        </p>
        <div class="skills-section">
          <h3>Core Skills:</h3>
          <div class="skills-tags">
            <!-- Kita menggunakan kembali style .tech-tag dari main.css -->
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
}
</style>

