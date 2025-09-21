// File: src/data/mods.js
// (DIPERBARUI) Menambahkan riwayat versi lama ('olderVersions').

export const mods = [
  {
    id: 1,
    slug: 'realistic-sky-mod',
    title: 'Realistic Sky Mod',
    game: 'The Sims 4',
    version: '2.1.0',
    image: 'https://placehold.co/600x400/86A8E7/white?text=Realistic+Sky',
    summary: 'A complete overhaul of the sky textures and lighting to bring stunning realism to your game.',
    description: 'This mod replaces the default cartoonish sky with high-resolution textures, dynamic clouds, and realistic sun/moon cycles. Experience breathtaking sunsets and immersive weather like never before.',
    category: 'Game Mod',
    requiresRoot: false,
    minAndroid: null,
    features: [ 'HD Sky Textures', 'Dynamic Cloud System', 'Enhanced Lighting', 'Realistic Sun & Moon' ],
    gallery: [ 'https://placehold.co/600x300/e2ece9/333?text=Screenshot+1', 'https://placehold.co/600x300/fddde6/333?text=Screenshot+2' ],
    downloadUrl: '#',
    instructions: '1. Download the file.\n2. Unzip the package.\n3. Place the .package file into your The Sims 4/Mods folder.',
    lastUpdated: '2025-09-18',
    downloads: 12530,
    // <-- Properti baru untuk versi lama
    olderVersions: [
      { version: '2.0.0', date: '2025-08-15', url: '#' },
      { version: '1.5.0', date: '2025-07-21', url: '#' },
    ]
  },
  {
    id: 2,
    slug: 'spotify-premium-lite',
    title: 'Spotify Premium Lite',
    game: 'Spotify',
    version: '8.9.2',
    image: 'https://placehold.co/600x400/1DB954/white?text=Spotify+Lite',
    summary: 'Unlocks several premium features for the official Spotify app without requiring a subscription.',
    category: 'App Mod',
    requiresRoot: true,
    minAndroid: '7.0+',
    features: [ 'Ad-Free Listening', 'Unlimited Skips', 'High-Quality Streaming Unlocked' ],
    gallery: [],
    downloadUrl: '#',
    instructions: '1. Uninstall official Spotify app.\n2. Download and install the provided APK.\n3. Login with your account.',
    lastUpdated: '2025-09-15',
    downloads: 48201,
    olderVersions: [
      { version: '8.9.0', date: '2025-09-01', url: '#' },
      { version: '8.8.5', date: '2025-08-12', url: '#' },
    ]
  },
  {
    id: 3,
    slug: 'game-guardian-god-mode-script',
    title: 'Universal God Mode Script',
    game: 'Game Guardian',
    version: '3.2.1',
    image: 'https://placehold.co/600x400/4A148C/white?text=Lua+Script',
    summary: 'A powerful Lua script for Game Guardian that enables god mode in many popular offline games.',
    category: 'Script',
    requiresRoot: true,
    minAndroid: '5.0+',
    features: [ 'Invincibility (God Mode)', 'One-Hit Kill', 'Freeze Enemy AI' ],
    gallery: [],
    downloadUrl: '#',
    instructions: '1. Make sure Game Guardian is installed on a rooted device.\n2. Run the script from within Game Guardian while the target game is active.',
    lastUpdated: '2025-08-29',
    downloads: 9875,
    olderVersions: [] // Contoh mod tanpa versi lama
  }
];

