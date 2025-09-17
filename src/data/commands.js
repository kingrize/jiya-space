// File: src/data/commands.js
// (Tidak ada perubahan, disediakan untuk kelengkapan)

import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);

export const commands = (router) => [
  {
    id: 'home',
    name: 'Go to Home',
    keywords: 'home main page start',
    icon: 'co-home',
    action: () => router.push('/'),
  },
  {
    id: 'projects',
    name: 'Go to Projects',
    keywords: 'projects work portfolio case studies',
    icon: 'co-folder',
    action: () => router.push('/projects'),
  },
  {
    id: 'about',
    name: 'Go to About',
    keywords: 'about me bio contact info',
    icon: 'co-user',
    action: () => router.push('/about'),
  },
  {
    id: 'toggleTheme',
    name: 'Toggle Theme',
    keywords: 'dark light mode theme color switch',
    icon: 'fa-moon',
    action: () => toggleDark(),
  },
  {
    id: 'github',
    name: 'Open GitHub',
    keywords: 'github source code repo repository',
    icon: 'co-github',
    action: () => window.open('https://github.com/kingrize', '_blank'),
  },
  {
    id: 'instagram',
    name: 'Open Instagram',
    keywords: 'instagram social media photos',
    icon: 'co-instagram',
    action: () => window.open('https://instagram.com/arzhasnoidea', '_blank'),
  },
];

