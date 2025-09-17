<!-- File: src/components/ui/HamburgerButton.vue -->
<!-- Komponen tombol hamburger yang akan beranimasi menjadi 'X' saat aktif. -->
<script setup>
defineProps({
  active: {
    type: Boolean,
    default: false
  }
});
const emit = defineEmits(['toggle']);
</script>

<template>
  <button
    class="hamburger-button"
    :class="{ 'is-active': active }"
    @click="emit('toggle')"
    aria-label="Toggle navigation menu"
  >
    <span class="line"></span>
    <span class="line"></span>
    <span class="line"></span>
  </button>
</template>

<style scoped>
.hamburger-button { width: 40px; height: 40px; display: flex; flex-direction: column; justify-content: space-around; padding: 8px; background: transparent; border: none; cursor: pointer; z-index: 100; }
.line { display: block; width: 100%; height: 2px; background-color: var(--text-color-primary); transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out; border-radius: 2px; }
.hamburger-button.is-active .line:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger-button.is-active .line:nth-child(2) { opacity: 0; }
.hamburger-button.is-active .line:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
</style>

