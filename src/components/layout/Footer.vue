<!-- File: src/components/layout/Footer.vue -->
<!-- (DIPERBARUI) Disederhanakan, tombol settings sudah dihapus permanen. -->
<script setup>
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());
</script>

<template>
  <footer class="footer-container">
    <div class="footer-content">
      <p class="copyright">&copy; {{ currentYear }} Jiya. All rights reserved.</p>
      <div class="social-links">
        <a href="https://github.com/kingrize" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><v-icon name="co-github" scale="1.2" /></a>
        <a href="https://instagram.com/arzhasnoidea" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><v-icon name="co-instagram" scale="1.2" /></a>
        <a href="https://facebook.com/shallwelife" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><v-icon name="co-facebook" scale="1.2" /></a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Style tidak berubah */
.footer-container {
  padding: 1.5rem 2rem;
  border-top: 1px solid rgba(var(--border-color-rgb), 0.1);
  margin-top: 4rem;
}
.footer-content {
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.copyright {
  font-size: 0.9rem;
  color: var(--text-color-secondary);
}
.social-links {
  display: flex;
  gap: 1.5rem;
}
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
}
</style>

 