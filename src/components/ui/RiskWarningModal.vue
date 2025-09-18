<!-- File: src/components/ui/RiskWarningModal.vue -->
<!-- (FILE BARU) Komponen modal pop-up untuk peringatan risiko. -->
<script setup>
import { useRouter } from 'vue-router';

const emit = defineEmits(['accept']);
const router = useRouter();

const goBack = () => {
  router.back();
};
</script>

<template>
  <div class="modal-overlay">
    <div class="modal-window">
      <div class="modal-header">
        <v-icon name="fa-exclamation-triangle" scale="1.2" />
        <h3>Risk Warning</h3>
      </div>
      <div class="modal-body">
        <p>Using third-party mods, scripts, or modified applications may violate a game's Terms of Service and could result in an account ban.</p>
        <p><strong>Please proceed with caution and at your own risk.</strong></p>
      </div>
      <div class="modal-footer">
        <button class="btn-secondary" @click="goBack">Go Back</button>
        <button class="btn-primary" @click="emit('accept')">I Understand, Continue</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.modal-window {
  background: rgba(var(--card-bg-rgb), 0.7);
  border: 1px solid rgba(var(--border-color-rgb), 0.2);
  border-radius: 16px;
  width: 100%;
  max-width: 450px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
}

.modal-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid rgba(var(--border-color-rgb), 0.1);
  color: var(--warning-header);
}
.modal-header .v-icon { color: var(--warning-border); }
.modal-header h3 { font-size: 1.2rem; font-weight: 600; }

.modal-body {
  padding: 1.5rem;
  line-height: 1.8;
  color: var(--text-color-secondary);
}
.modal-body p { margin-bottom: 1rem; }
.modal-body strong { color: var(--text-color-primary); }

.modal-footer {
  display: flex;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: rgba(var(--card-bg-rgb), 0.3);
  border-top: 1px solid rgba(var(--border-color-rgb), 0.1);
}
.modal-footer button {
  flex-grow: 1;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-secondary {
  background-color: transparent;
  border: 1px solid var(--border-color-rgb);
  color: var(--text-color-primary);
}
.btn-secondary:hover {
  background-color: rgba(var(--border-color-rgb), 0.2);
}
.btn-primary {
  background-color: var(--accent-color);
  color: white;
}
.btn-primary:hover {
  transform: scale(1.05);
}

:root {
  --warning-border: #FBBF24;
  --warning-header: #92400E;
}
:root.dark {
  --warning-border: #FBBF24;
  --warning-header: #FEF9C3;
}
</style>
