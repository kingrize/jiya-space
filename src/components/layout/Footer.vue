<!-- File: src/components/layout/Footer.vue -->
<!-- (DIPERBARUI) Menambahkan tombol pengaturan baru. -->
<script setup>
import { computed } from 'vue';
import SettingsButton from '../ui/SettingsButton.vue';

const emit = defineEmits(['open-settings']);
const currentYear = computed(() => new Date().getFullYear());
</script>

<template>
  <footer class="footer-container">
    <div class="footer-content">
      <div class="left-section">
        <SettingsButton @open="emit('open-settings')" />
      </div>
      <div class="center-section">
        <p class="copyright">&copy; {{ currentYear }} Jiya. All rights reserved.</p>
      </div>
      <div class="right-section social-links">
        <a href="https://github.com/kingrize" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><v-icon name="co-github" scale="1.2" /></a>
        <a href="https://instagram.com/arzhasnoidea" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><v-icon name="co-instagram" scale="1.2" /></a>
        <a href="https://facebook.com/shallwelife" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><v-icon name="co-facebook" scale="1.2" /></a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-container {
  padding: 1.5rem 2rem;
  border-top: 1px solid rgba(var(--border-color-rgb), 0.1);
}
.footer-content {
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.left-section, .right-section { flex: 1; }
.right-section { display: flex; justify-content: flex-end; }
.center-section { text-align: center; }
.copyright { font-size: 0.9rem; color: var(--text-color-secondary); }
.social-links { display: flex; gap: 1.5rem; }
.social-links a {
  color: var(--text-color-secondary);
  transition: color 0.2s, transform 0.2s;
}
.social-links a:hover {
  color: var(--text-color-primary);
  transform: scale(1.1);
}
@media (max-width: 768px) {
  .footer-content { flex-direction: column-reverse; gap: 1.5rem; }
  .right-section { justify-content: center; }
}
</style>

