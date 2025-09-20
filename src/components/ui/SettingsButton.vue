<!-- File: src/components/ui/SettingsButton.vue -->
<!-- (FILE BARU) Tombol ikon roda gigi untuk membuka panel. -->
<script setup>
const emit = defineEmits(['open']);
</script>

<template>
  <button class="settings-button" @click="emit('open')" aria-label="Open settings">
    <v-icon name="co-cog" scale="1.2" />
  </button>
</template>

<style scoped>
.settings-button {
  background: none;
  border: none;
  color: var(--text-color-secondary);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s, transform 0.2s;
}
.settings-button:hover {
  color: var(--text-color-primary);
  transform: rotate(45deg);
}
</style>
