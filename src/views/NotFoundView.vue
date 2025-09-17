<!-- File: src/views/NotFoundView.vue -->
<!-- (FILE BARU) Halaman kustom untuk menangani URL yang tidak ditemukan. -->
<template>
  <div class="not-found-container fade-in-up">
    <div class="icon-wrapper">
      <v-icon name="fa-ghost" scale="4" />
    </div>
    <h1 class="title">404 - Page Not Found</h1>
    <p class="subtitle">Oops! The page you're looking for doesn't exist. It might have been moved or deleted.</p>
    <router-link to="/" class="home-button">Go Back Home</router-link>
  </div>
</template>

<style scoped>
.not-found-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 60vh;
  padding: 2rem;
}

.icon-wrapper {
  color: var(--accent-color);
  margin-bottom: 2rem;
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.subtitle {
  color: var(--text-color-secondary);
  font-size: 1.1rem;
  max-width: 400px;
  margin-bottom: 2.5rem;
}

.home-button {
  background-color: var(--accent-color);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
}

.home-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 122, 255, 0.3);
}
</style>
