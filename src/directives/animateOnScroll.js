// File: src/directives/animateOnScroll.js
// (FILE BARU) Logika untuk mendeteksi kapan elemen masuk ke layar.

// Membuat satu 'pengamat' untuk efisiensi
const observer = new IntersectionObserver((entries) => {
  // Loop melalui setiap elemen yang diamati
  entries.forEach((entry) => {
    // Jika elemen sekarang terlihat di layar
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target); // Berhenti mengamati setelah animasi berjalan
    }
  });
}, {
  threshold: 0.1, // Picu saat 10% dari elemen terlihat
});

// Mengekspor directive kita
export const animateOnScroll = {
  // Hook ini dipanggil saat elemen dipasang ke DOM
  mounted(el) {
    // Menambahkan kelas awal untuk keadaan 'sebelum' animasi
    el.classList.add('scroll-animate');
    // Mulai mengamati elemen ini
    observer.observe(el);
  },
  // Hook ini dipanggil saat elemen dilepas dari DOM
  unmounted(el) {
    // Berhenti mengamati untuk membersihkan
    observer.unobserve(el);
  }
};
