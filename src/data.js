import artisanHome from '../images/artisan-hub.png';
import artisanGallery from '../images/artisan-hub-2.png';
import hrDashboard from '../images/hr-system.png';
import hrTeam from '../images/hr-system-2.png';

export const projects = [
  {
    id: 'artisan-hub', number: '01', category: 'COMMERCE', type: 'E-COMMERCE · VUE.JS',
    title: 'Artisan Hub — Storefront',
    description: 'An online store for artwork and crafts, made for easy browsing and joyful discovery.',
    visualClass: 'art-visual', image: artisanHome, imageAlt: 'Artisan Hub storefront screenshot', featured: true, link: '#contact'
  },
  {
    id: 'artisan-hub-artwork', number: '02', category: 'ARTWORK', type: 'E-COMMERCE · VUE.JS',
    title: 'Artisan Hub — Artwork Gallery',
    description: 'A closer look at the artwork and handcrafted pieces available in the store.',
    visualClass: 'art-visual', image: artisanGallery, imageAlt: 'Artisan Hub artwork gallery screenshot', featured: false, link: '#contact'
  },
  {
    id: 'hr-system', number: '03', category: 'PEOPLE', type: 'HR MANAGEMENT · PHP',
    title: 'HR System — Dashboard',
    description: 'A people-first tool for bringing day-to-day HR tasks into one place.',
    visualClass: 'people-visual', image: hrDashboard, imageAlt: 'Human Resource Management System dashboard screenshot', featured: true, link: '#contact'
  },
  {
    id: 'hr-system-team', number: '04', category: 'TEAM', type: 'HR MANAGEMENT · PHP',
    title: 'HR System — Team Management',
    description: 'An additional view of the employee and team management experience.',
    visualClass: 'people-visual', image: hrTeam, imageAlt: 'Human Resource Management System team view screenshot', featured: false, link: '#contact'
  }
];

export const skills = [
  { name: 'Frontend', icon: '</>', iconClass: 'icon-front', kicker: '01 / THE INTERFACE', items: 'HTML · CSS · JavaScript · Vue.js' },
  { name: 'Backend', icon: '{ }', iconClass: 'icon-back', kicker: '02 / THE ENGINE', items: 'PHP · Node.js' },
  { name: 'Database', icon: '◉', iconClass: 'icon-data', kicker: '03 / THE MEMORY', items: 'MySQL' },
  { name: 'Tools', icon: '⌘', iconClass: 'icon-tools', kicker: '04 / THE WORKBENCH', items: 'Git · GitHub · VS Code' }
];
