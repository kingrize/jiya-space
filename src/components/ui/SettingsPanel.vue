<!-- File: src/components/ui/SettingsPanel.vue -->
<!-- (DIPERBARUI) Menambahkan toggle untuk fitur eksperimental. -->
<script setup>
import { useSettings } from '../../composables/useSettings.js';
import { useDark, useToggle } from '@vueuse/core';

defineProps({
  isOpen: Boolean,
});
const emit = defineEmits(['close']);

const { settings, accentColors, setAccentColor } = useSettings();
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <Transition name="palette">
    <div v-if="isOpen" class="palette-container" @click.self="emit('close')">
      <div class="palette-modal">
        <div class="panel-header">
          <h3>System Preferences</h3>
          <button @click="emit('close')" class="close-button" aria-label="Close settings">
            <v-icon name="fa-times" />
          </button>
        </div>
        <div class="panel-body">
          <div class="setting-group">
            <h4>Appearance</h4>
            <div class="setting-item">
              <label for="darkMode">Dark Mode</label>
              <input type="checkbox" id="darkMode" :checked="isDark" @change="toggleDark()" />
            </div>
            <div class="setting-item">
              <label for="accentColor">Accent Color</label>
              <div class="color-swatches">
                <button
                  v-for="color in accentColors"
                  :key="color.value"
                  class="color-swatch"
                  :style="{ backgroundColor: color.value }"
                  :class="{ active: settings.accentColor === color.value }"
                  @click="setAccentColor(color.value)"
                  :aria-label="color.name"
                ></button>
              </div>
            </div>
          </div>
          <div class="setting-group">
            <h4>Background Effects</h4>
            <div class="setting-item">
              <label for="showBlobs">Animated Blobs</label>
              <input type="checkbox" id="showBlobs" v-model="settings.showBlobs" />
            </div>
            <div class="setting-item">
              <label for="showGrid">Subtle Grid</label>
              <input type="checkbox" id="showGrid" v-model="settings.showGrid" />
            </div>
          </div>
          <!-- Grup baru untuk fitur "fun" -->
          <div class="setting-group">
            <h4>Experimental</h4>
            <div class="setting-item">
              <label for="mouseTrail">Cursor Particle Trail</label>
              <input type="checkbox" id="mouseTrail" v-model="settings.enableMouseTrail" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
/* Style tidak berubah, gunakan yang sudah ada */
.palette-container {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
.palette-modal {
  width: 90%;
  max-width: 500px;
  background: rgba(var(--card-bg-rgb), 0.7);
  border: 1px solid rgba(var(--border-color-rgb), 0.2);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  overflow: hidden;
}
.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid rgba(var(--border-color-rgb), 0.1);
}
.panel-header h3 { font-size: 1.1rem; font-weight: 600; }
.close-button { background: none; border: none; color: var(--text-color-secondary); cursor: pointer; padding: 0.5rem; }
.panel-body { padding: 1.5rem; }
.setting-group { margin-bottom: 2rem; }
.setting-group:last-child { margin-bottom: 0; }
.setting-group h4 {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-color-secondary);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;
}
.setting-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}
.setting-item label { font-weight: 500; }
input[type="checkbox"] {
  appearance: none;
  width: 40px;
  height: 22px;
  background-color: rgba(var(--border-color-rgb), 0.5);
  border-radius: 11px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.2s;
}
input[type="checkbox"]::before {
  content: '';
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: white;
  top: 2px;
  left: 2px;
  transition: transform 0.2s ease;
}
input[type="checkbox"]:checked { background-color: var(--accent-color); }
input[type="checkbox"]:checked::before { transform: translateX(18px); }
.color-swatches { display: flex; gap: 1rem; flex-wrap: wrap; }
.color-swatch {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid transparent;
  cursor: pointer;
  transition: transform 0.2s, border-color 0.2s;
}
.color-swatch:hover { transform: scale(1.1); }
.color-swatch.active { border-color: var(--accent-color); }
.palette-enter-active, .palette-leave-active { transition: all 0.2s ease; }
.palette-enter-from, .palette-leave-to { opacity: 0; transform: scale(0.98) translateY(10px); }
.palette-container { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); z-index: 100; display: flex; justify-content: center; align-items: center; padding: 1rem; }
.palette-modal { width: 90%; max-width: 500px; background: rgba(var(--card-bg-rgb), 0.7); border: 1px solid rgba(var(--border-color-rgb), 0.2); border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); overflow: hidden; }
.panel-header { display: flex; justify-content: space-between; align-items: center; padding: 1rem 1.5rem; border-bottom: 1px solid rgba(var(--border-color-rgb), 0.1); }
.panel-header h3 { font-size: 1.1rem; font-weight: 600; }
.close-button { background: none; border: none; color: var(--text-color-secondary); cursor: pointer; padding: 0.5rem; }
.panel-body { padding: 1.5rem; }
.setting-group { margin-bottom: 2rem; }
.setting-group:last-child { margin-bottom: 0; }
.setting-group h4 { font-size: 0.9rem; font-weight: 500; color: var(--text-color-secondary); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 1rem; }
.setting-item { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; }
.setting-item:last-child { margin-bottom: 0; }
.setting-item label { font-weight: 500; }
input[type="checkbox"] { appearance: none; width: 40px; height: 22px; background-color: rgba(var(--border-color-rgb), 0.5); border-radius: 11px; position: relative; cursor: pointer; transition: background-color 0.2s; }
input[type="checkbox"]::before { content: ''; position: absolute; width: 18px; height: 18px; border-radius: 50%; background-color: white; top: 2px; left: 2px; transition: transform 0.2s ease; }
input[type="checkbox"]:checked { background-color: var(--accent-color); }
input[type="checkbox"]:checked::before { transform: translateX(18px); }
.color-swatches { display: flex; gap: 1rem; flex-wrap: wrap; }
.color-swatch { width: 32px; height: 32px; border-radius: 50%; border: 2px solid transparent; cursor: pointer; transition: transform 0.2s, border-color 0.2s; }
.color-swatch:hover { transform: scale(1.1); }
.color-swatch.active { border-color: var(--accent-color); }
.palette-enter-active, .palette-leave-active { transition: all 0.2s ease; }
.palette-enter-from, .palette-leave-to { opacity: 0; transform: scale(0.98) translateY(10px); }
</style>