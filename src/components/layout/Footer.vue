<!-- File: src/components/layout/Footer.vue -->
<!-- (DIPERBARUI) Menambahkan tautan sosial dan menyempurnakan layout. -->
<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="footer-container">
    <div class="footer-content">
      <div class="copyright-info">
        <span>&copy; {{ currentYear }} Jiya.space</span>
        <span class="separator">|</span>
        <span>Crafted with Vue.js</span>
      </div>
      <div class="social-links-footer">
        <a href="https://github.com/kingrize" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="GitHub">
          <v-icon name="co-github" />
        </a>
        <a href="https://instagram.com/arzhasnoidea" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Instagram">
          <v-icon name="co-instagram" />
        </a>
        <a href="https://facebook.com/shallwelife" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Facebook">
          <v-icon name="co-facebook-f" />
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-container {
  border-top: 1px solid var(--border-color);
  padding: 2rem;
}

.footer-content {
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.copyright-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-color-secondary);
  font-size: 0.9rem;
}

.separator {
  display: inline-block;
}

.social-links-footer {
  display: flex;
  gap: 1.5rem;
}

.social-icon {
  color: var(--text-color-secondary);
  transition: color 0.2s ease-in-out, transform 0.2s ease-in-out;
}

.social-icon:hover {
  color: var(--accent-color);
  transform: translateY(-2px);
}

/* Penyesuaian untuk layar seluler */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 1.5rem;
  }

  .separator {
    display: none;
  }

  .copyright-info {
    flex-direction: column;
    gap: 0.25rem;
    order: 2; /* Pindahkan hak cipta ke bawah ikon sosial di seluler */
  }

  .social-links-footer {
    order: 1;
  }
}
</style>

