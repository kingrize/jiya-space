<script setup>
import ThemeToggle from '../ui/ThemeToggle.vue';

defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['close']);
</script>

<template>
  <div class="mobile-nav-overlay" :class="{ 'is-open': isOpen }" @click="emit('close')"></div>

  <aside class="mobile-nav-panel" :class="{ 'is-open': isOpen }">
    <nav>
      <ul>
        <li><router-link to="/" @click="emit('close')">Home</router-link></li>
        <li><router-link to="/projects" @click="emit('close')">Projects</router-link></li>
        <li><router-link to="/about" @click="emit('close')">About</router-link></li>
      </ul>
    </nav>
    <div class="bottom-action">
      <ThemeToggle />
    </div>
  </aside>
</template>

<style scoped>
.mobile-nav-overlay {
  position: fixed; /* Kunci agar menjadi overlay */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 98;
}

.mobile-nav-overlay.is-open {
  opacity: 1;
  visibility: visible;
}

.mobile-nav-panel {
  position: fixed; /* Kunci agar menjadi overlay dan bisa 'slide' */
  top: 0;
  right: 0;
  width: 80%;
  max-width: 300px;
  height: 100%;
  background-color: var(--card-bg);
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  transform: translateX(100%);
  transition: transform 0.3s ease;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 6rem 2rem 2rem;
}

.mobile-nav-panel.is-open {
  transform: translateX(0);
}

ul {
  list-style: none;
}

li {
  margin-bottom: 2rem;
}

a {
  text-decoration: none;
  color: var(--text-color-primary);
  font-size: 1.5rem;
  font-weight: 600;
}

.bottom-action {
  display: flex;
  justify-content: center;
}
</style>