/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--primary-color-base) / <alpha-value>)',
        accent: 'hsl(var(--accent-color-base) / <alpha-value>)',
        text: 'hsl(var(--text-color-base) / <alpha-value>)',
        title: 'hsl(var(--title-color-base) / <alpha-value>)',
        'eerie-black': 'hsl(var(--eerie-black-base) / <alpha-value>)',
        'dark-purple': 'hsl(var(--dark-purple-base) / <alpha-value>)',
      },
      fontFamily: {
        title: '"Orbitron", sans-serif',
        body: '"Roboto", sans-serif',
      },
    },
  },
  plugins: [],
};
