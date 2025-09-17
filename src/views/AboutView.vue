<!-- File: src/views/AboutView.vue -->
<!-- (DIPERBARUI) Dirombak total menjadi satu jendela profil "neofetch" yang lebih padat. -->
<script setup>
import avatarUrl from '../assets/images/avatar.jpg';
</script>

<template>
  <div class="page-container fade-in-up">
    <div class="profile-window" v-animate-on-scroll>
      <div class="window-header">jiya@space:~$ neofetch --full</div>
      <div class="window-body">
        <div class="profile-main">
          <img :src="avatarUrl" alt="Jiya Avatar" class="profile-avatar" />
          <div class="profile-info">
            <p><span class="label">User</span>: Jiya</p>
            <p><span class="label">Status</span>: Front-End Developer</p>
            <p><span class="label">OS</span>: JiyaOS x86_64</p>
            <p><span class="label">Shell</span>: bash 5.1.16</p>
            <p><span class="label">Editor</span>: VSCode</p>
          </div>
        </div>

        <div class="section">
          <h2 class="section-title">/etc/bio.txt</h2>
          <p class="bio-text">
            I'm a passionate developer dedicated to building beautiful, intuitive, and high-performance web applications. This personal space, "JiyaOS", is my digital playground—a place to experiment, showcase my work, and share a little bit about myself.
          </p>
        </div>

        <div class="section">
          <h2 class="section-title">/usr/bin/skills</h2>
          <div class="skills-grid">
            <span class="skill-tag">Vue.js</span>
            <span class="skill-tag">JavaScript (ES6+)</span>
            <span class="skill-tag">Vite</span>
            <span class="skill-tag">HTML5 & CSS3</span>
            <span class="skill-tag">Responsive Design</span>
            <span class="skill-tag">Git & GitHub</span>
            <span class="skill-tag">Figma</span>
            <span class="skill-tag">REST APIs</span>
          </div>
        </div>
        
        <div class="section">
          <h2 class="section-title">/var/log/socials</h2>
          <div class="social-links">
            <a href="https://github.com/kingrize" target="_blank" rel="noopener noreferrer">
              <v-icon name="co-github" scale="1.2"/> GitHub
            </a>
            <a href="https://instagram.com/arzhasnoidea" target="_blank" rel="noopener noreferrer">
              <v-icon name="co-instagram" scale="1.2"/> Instagram
            </a>
            <a href="https://facebook.com/shallwelife" target="_blank" rel="noopener noreferrer">
              <v-icon name="co-facebook" scale="1.2"/> Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-window {
  background: rgba(var(--card-bg-rgb), 0.5);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  border: 1px solid rgba(var(--border-color-rgb), 0.1);
  border-radius: 16px;
  max-width: 800px;
  margin: 2rem auto;
  overflow: hidden;
}

.window-header {
  background-color: rgba(var(--card-bg-rgb), 0.3);
  padding: 0.5rem 1rem;
  border-bottom: 1px solid rgba(var(--border-color-rgb), 0.1);
  color: var(--text-color-secondary);
  font-family: 'Fira Code', monospace;
  font-size: 0.8rem;
  text-align: center;
}

.window-body {
  padding: 2rem;
}

.profile-main {
  display: flex;
  align-items: center;
  gap: 2rem;
  border-bottom: 1px solid rgba(var(--border-color-rgb), 0.1);
  padding-bottom: 2rem;
  margin-bottom: 2rem;
}

.profile-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--accent-color);
}

.profile-info {
  font-family: 'Fira Code', monospace;
  line-height: 2;
  font-size: 1rem;
}

.profile-info .label {
  color: var(--text-color-secondary);
  width: 80px;
  display: inline-block;
}

.section {
  margin-bottom: 2rem;
}
.section:last-child {
  margin-bottom: 0;
}

.section-title {
  font-family: 'Fira Code', monospace;
  color: var(--accent-color);
  margin-bottom: 1rem;
  font-size: 1rem;
}

.bio-text {
  color: var(--text-color-secondary);
  line-height: 1.8;
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}
.skill-tag {
  background: rgba(var(--border-color-rgb), 0.2);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 500;
}

.social-links {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}
.social-links a {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: var(--text-color-secondary);
  transition: color 0.2s;
  font-size: 1.1rem;
}
.social-links a:hover {
  color: var(--accent-color);
}

@media (max-width: 768px) {
  .profile-main {
    flex-direction: column;
    text-align: center;
  }
  .profile-info .label {
    width: auto;
    margin-right: 0.5rem;
  }
  .window-body {
    padding: 1.5rem;
  }
}
</style>

