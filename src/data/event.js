// File: src/data/events.js
// (DIPERBARUI) Menggunakan data yang lebih akurat dari file Anda.

export const events = [
  { 
    id: 'geyser', 
    name: 'Geyser', 
    period: 120, // dalam menit
    offset: 5,   // dalam menit
    duration: 10,// dalam menit
    color: '#3498db' 
  },
  { 
    id: 'grandma', 
    name: "Grandma's Dinner", 
    period: 120, 
    offset: 35, 
    duration: 10, 
    color: '#e67e22' 
  },
  { 
    id: 'turtle', 
    name: 'Turtle', 
    period: 120, 
    offset: 50, 
    duration: 10, 
    color: '#2ecc71' 
  },
  // Contoh event harian dari file Anda
  // {
  //   id: 'skater',
  //   name: 'Dreams Skater',
  //   period: 120,
  //   offset: 60,
  //   duration: 10,
  //   days: [5, 6, 0], // Jumat, Sabtu, Minggu (0 adalah Minggu di JS)
  //   color: '#9b59b6',
  // },
];

