/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        spaceGrotesk: ['Space Grotesk', 'sans-serif'],
        yellowTail: ['Yellowtail', 'cursive'],
      },
      colors: {
        blue: '#188aec',
        fontColor: '#4b5563',
      },
    },
  },
  plugins: [],
};
