<!-- File: src/views/ContactView.vue -->
<!-- (FILE BARU) Halaman kontak baru yang didesain seperti aplikasi "Mail". -->
<script setup>
import { ref } from 'vue';
import { useNotifications } from '../composables/useNotifications.js';

const { showNotification } = useNotifications();
const isSending = ref(false);

const handleSubmit = () => {
  // Logika pengiriman form Netlify akan berjalan secara otomatis.
  // Di sini kita hanya memberikan umpan balik kepada pengguna.
  isSending.value = true;
  setTimeout(() => {
    showNotification({
      type: 'success', // Tipe notifikasi baru
      title: 'Message Sent!',
      message: 'Thank you for reaching out. I will get back to you soon.',
      duration: 5000,
    });
    isSending.value = false;
    // Anda bisa mengosongkan form di sini jika perlu
  }, 1500);
};
</script>

<template>
  <div class="page-container fade-in-up">
    <div class="mail-window" v-animate-on-scroll>
      <div class="window-header">New Message</div>
      <form 
        name="contact" 
        method="POST" 
        data-netlify="true" 
        data-netlify-honeypot="bot-field"
        @submit.prevent="handleSubmit"
        class="mail-form"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p class="hidden"><label>Don’t fill this out if you’re human: <input name="bot-field" /></label></p>
        
        <div class="form-field">
          <label for="name">From:</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />
        </div>
        <div class="form-field">
          <label for="email">Reply-To:</label>
          <input type="email" id="email" name="email" placeholder="your.email@example.com" required />
        </div>
        <div class="form-field">
          <label for="subject">Subject:</label>
          <input type="text" id="subject" name="subject" placeholder="Let's build something amazing" required />
        </div>
        <div class="form-field message">
          <label for="message">Message:</label>
          <textarea id="message" name="message" rows="8" placeholder="Hello Jiya," required></textarea>
        </div>
        <div class="form-footer">
          <button type="submit" class="send-button" :disabled="isSending">
            <span v-if="!isSending">Send Message</span>
            <span v-else>Sending...</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.mail-window {
  background: rgba(var(--card-bg-rgb), 0.4);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  border: 1px solid rgba(var(--border-color-rgb), 0.1);
  border-radius: 16px;
  overflow: hidden;
  max-width: 800px;
  margin: 2rem auto;
}
.window-header {
  background-color: rgba(var(--card-bg-rgb), 0.3);
  padding: 0.5rem 1rem;
  border-bottom: 1px solid rgba(var(--border-color-rgb), 0.1);
  color: var(--text-color-secondary);
  font-family: 'Fira Code', monospace;
  font-size: 0.8rem;
  text-align: center;
}
.mail-form {
  padding: 2rem;
}
.form-field {
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid rgba(var(--border-color-rgb), 0.1);
  padding: 1rem 0;
}
.form-field.message {
  align-items: flex-start;
}
.form-field label {
  color: var(--text-color-secondary);
  width: 80px;
  text-align: right;
  font-weight: 500;
}
.form-field input, .form-field textarea {
  flex-grow: 1;
  background: none;
  border: none;
  outline: none;
  color: var(--text-color-primary);
  font-family: inherit;
  font-size: 1rem;
}
.form-field textarea {
  resize: vertical;
}
.form-footer {
  padding-top: 2rem;
  display: flex;
  justify-content: flex-end;
}
.send-button {
  background-color: var(--accent-color);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}
.send-button:hover:not(:disabled) {
  transform: scale(1.05);
}
.send-button:disabled {
  background-color: var(--text-color-secondary);
  cursor: not-allowed;
}
.hidden { display: none; }
</style>
