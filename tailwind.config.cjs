/** @type {import('tailwindcss').Config}*/
const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],

  theme: {
    extend: {
      colors: {
        '#9DC08B': '#9DC08B',
        '#E5EEDF': '#E5EEDF',
      },
      borderRadius: {
        'full': '9999px',
      },
      fontWeight: {
        'extra-bold': '800',
      },
      width: {
        '183': '183px',
      },
      height: {
        '128': '32rem',
      }
    },
  },

  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class',
};

module.exports = config;
