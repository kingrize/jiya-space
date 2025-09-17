<!-- File: src/views/AboutView.vue -->
<!-- (DIPERBARUI) Dirombak total dengan layout multi-kartu yang dinamis. -->
<script setup>
import avatarUrl from '../assets/images/avatar.jpg';
</script>

<template>
  <div class="page-container fade-in-up">
    <div class="about-grid">
      <!-- Profile Card -->
      <div class="bento-item profile-card" v-animate-on-scroll>
        <div class="window-header">jiya@space:~$ whoami</div>
        <div class="profile-content">
          <img :src="avatarUrl" alt="Jiya Avatar" class="profile-avatar" />
          <h1 class="name">Jiya</h1>
          <p class="tagline">Front-End Developer & UI/UX Enthusiast</p>
        </div>
      </div>

      <!-- Bio Card -->
      <div class="bento-item bio-card" v-animate-on-scroll style="--delay: 0.1s;">
        <div class="window-header">/etc/bio.txt</div>
        <div class="bio-content">
          <p>
            I'm a passionate front-end developer dedicated to building beautiful, intuitive, and high-performance web applications. My journey into the world of code began with a fascination for how elegant design and powerful technology could intersect to create amazing user experiences.
          </p>
          <p>
            This personal space, "JiyaOS", is my digital playground—a place to experiment with new technologies, showcase my work, and share a little bit about myself.
          </p>
        </div>
      </div>

      <!-- Skills Card -->
      <div class="bento-item skills-card" v-animate-on-scroll style="--delay: 0.2s;">
        <div class="window-header">/usr/bin/skills</div>
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

      <!-- Connect Card -->
      <div class="bento-item connect-card" v-animate-on-scroll style="--delay: 0.3s;">
        <div class="window-header">/var/log/socials</div>
        <div class="social-links">
          <a href="https://github.com/kingrize" target="_blank" rel="noopener noreferrer">
            <v-icon name="co-github" scale="1.5"/> GitHub
          </a>
          <a href="https://instagram.com/arzhasnoidea" target="_blank" rel="noopener noreferrer">
            <v-icon name="co-instagram" scale="1.5"/> Instagram
          </a>
          <a href="https://facebook.com/shallwelife" target="_blank" rel="noopener noreferrer">
            <v-icon name="co-facebook" scale="1.5"/> Facebook
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 1.5rem;
  max-width: 960px;
  margin: 2rem auto;
}

.bento-item {
  background: rgba(var(--card-bg-rgb), 0.4);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  border: 1px solid rgba(var(--border-color-rgb), 0.1);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.bento-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
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

/* Item placements */
.profile-card { grid-column: 1 / 2; grid-row: 1 / 3; }
.bio-card { grid-column: 2 / 4; grid-row: 1 / 2; }
.skills-card { grid-column: 2 / 4; grid-row: 2 / 3; }
.connect-card { grid-column: 1 / 4; grid-row: 3 / 4; }

/* Profile Card */
.profile-content {
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}
.profile-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--accent-color);
  margin-bottom: 1rem;
}
.name {
  font-size: 2rem;
  font-weight: 700;
}
.tagline {
  color: var(--text-color-secondary);
  font-size: 1rem;
}

/* Bio Card */
.bio-content {
  padding: 1.5rem;
  line-height: 1.8;
  color: var(--text-color-secondary);
}
.bio-content p { margin-bottom: 1rem; }

/* Skills Card */
.skills-grid {
  padding: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-content: center;
  flex-grow: 1;
}
.skill-tag {
  background: rgba(var(--border-color-rgb), 0.2);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 500;
}

/* Connect Card */
.connect-card { padding: 1.5rem; }
.social-links {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-grow: 1;
  flex-wrap: wrap;
  gap: 1rem;
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

/* Responsive */
@media (max-width: 960px) {
  .about-grid { grid-template-columns: 1fr; }
  .profile-card, .bio-card, .skills-card, .connect-card {
    grid-column: auto;
    grid-row: auto;
  }
}
</style>

