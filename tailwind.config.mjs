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
      },
    },
  },
  plugins: [],
};
