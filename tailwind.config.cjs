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
        bottomBarIconBgColor: '#f3f4f6',
      },
      boxShadow: {
        bottomBarShadow: '-24px 24px 64px rgba(17, 17, 17, 0.11)',
        projectCardShadow:
          '0 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2)',
      },
      dropShadow: {
        projectCardDropShadow:
          'drop-shadow(12px 12px 32px rgba(17, 17, 17, 0.11))',
      },
    },
  },
  plugins: [],
};
