<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="footer-container">
    <p>&copy; {{ currentYear }} Jiya. All rights reserved.</p>
  </footer>
</template>

<style scoped>
.footer-container {
  text-align: center;
  padding: 2rem 0;
  color: #888;
  font-size: 0.9rem;
}
</style>