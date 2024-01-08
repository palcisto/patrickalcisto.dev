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
        'light-black': 'hsl(var(--light-black-base) / <alpha-value>)',
        crimson: 'hsl(var(--crimson-base) / <alpha-value>)',
        zest: 'hsl(var(--zest-base) / <alpha-value>)',
        'sherpa-blue': 'hsl(var(--sherpa-blue-base) / <alpha-value>)',
      },
      fontFamily: {
        title: '"Config Rounded", sans-serif',
        body: '"Config Rounded", sans-serif',
        smallText: '"Config Rounded Text", "Config Rounded" sans-serif',
      },
    },
  },
  plugins: [],
};
