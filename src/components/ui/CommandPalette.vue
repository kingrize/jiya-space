<!-- File: src/components/ui/CommandPalette.vue -->
<!-- (Tidak ada perubahan, disediakan untuk kelengkapan) -->
<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useDark } from '@vueuse/core';
import { commands as commandList } from '../../data/commands.js';

const props = defineProps({
  isOpen: Boolean,
});
const emit = defineEmits(['close']);

const router = useRouter();
const isDark = useDark();
const search = ref('');
const searchInput = ref(null);
const selectedIndex = ref(0);

const commands = ref(commandList(router));

const filteredCommands = computed(() => {
  if (!search.value) {
    selectedIndex.value = 0;
    return commands.value;
  }
  const lowerCaseSearch = search.value.toLowerCase();
  selectedIndex.value = 0;
  return commands.value.filter(cmd => 
    cmd.name.toLowerCase().includes(lowerCaseSearch) ||
    cmd.keywords.toLowerCase().includes(lowerCaseSearch)
  );
});

const executeCommand = (command) => {
  command.action();
  emit('close');
};

const handleKeydown = (e) => {
  if (!props.isOpen) return;

  if (e.key === 'ArrowDown') {
    e.preventDefault();
    selectedIndex.value = (selectedIndex.value + 1) % filteredCommands.value.length;
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    selectedIndex.value = (selectedIndex.value - 1 + filteredCommands.value.length) % filteredCommands.value.length;
  } else if (e.key === 'Enter') {
    e.preventDefault();
    if (filteredCommands.value[selectedIndex.value]) {
      executeCommand(filteredCommands.value[selectedIndex.value]);
    }
  } else if (e.key === 'Escape') {
    emit('close');
  }
};

watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    search.value = '';
    selectedIndex.value = 0;
    nextTick(() => {
      searchInput.value?.focus();
    });
  }
});

onMounted(() => window.addEventListener('keydown', handleKeydown));
onUnmounted(() => window.removeEventListener('keydown', handleKeydown));
</script>

<template>
  <Transition name="palette">
    <div v-if="isOpen" class="palette-container" @click.self="emit('close')">
      <div class="palette-modal">
        <div class="search-wrapper">
          <v-icon name="co-search" class="search-icon" />
          <input 
            ref="searchInput"
            v-model="search"
            type="text" 
            placeholder="Type a command or search..." 
            class="search-input"
            @keydown.stop
          />
        </div>
        <div class="results-list">
          <div 
            v-for="(cmd, index) in filteredCommands" 
            :key="cmd.id"
            class="result-item"
            :class="{ selected: index === selectedIndex }"
            @click="executeCommand(cmd)"
            @mouseenter="selectedIndex = index"
          >
            <v-icon :name="cmd.id === 'toggleTheme' ? (isDark ? 'fa-sun' : 'fa-moon') : cmd.icon" class="item-icon" />
            <span>{{ cmd.name }}</span>
          </div>
          <div v-if="filteredCommands.length === 0" class="no-results">
            No results found.
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
/* Style tidak berubah */
.palette-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  z-index: 100;
  display: flex;
  justify-content: center;
  padding-top: 15vh;
}
.palette-modal {
  width: 90%;
  max-width: 600px;
  background: rgba(var(--card-bg-rgb), 0.8);
  border: 1px solid rgba(var(--border-color-rgb), 0.2);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  height: min-content;
  max-height: 70vh;
  display: flex;
  flex-direction: column;
}
.search-wrapper {
  display: flex;
  align-items: center;
  padding: 0 1rem;
  border-bottom: 1px solid rgba(var(--border-color-rgb), 0.2);
}
.search-icon {
  color: var(--text-color-secondary);
  margin-right: 0.75rem;
}
.search-input {
  width: 100%;
  padding: 1rem 0;
  background: none;
  border: none;
  outline: none;
  font-size: 1.1rem;
  color: var(--text-color-primary);
}
.results-list {
  padding: 0.5rem;
  overflow-y: auto;
}
.result-item {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
}
.result-item.selected {
  background-color: rgba(var(--border-color-rgb), 0.2);
  color: var(--accent-color);
}
.item-icon {
  margin-right: 1rem;
  color: var(--text-color-secondary);
}
.result-item.selected .item-icon {
  color: var(--accent-color);
}
.no-results {
  text-align: center;
  padding: 2rem;
  color: var(--text-color-secondary);
}
.palette-enter-active, .palette-leave-active {
  transition: all 0.2s ease;
}
.palette-enter-from, .palette-leave-to {
  opacity: 0;
  transform: scale(0.98);
}
</style>

