/** @type {import('tailwindcss').Config}*/
const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],

  theme: {
    extend: {
      colors: {
        '#D24646': '#D24646',
      },
      borderRadius: {
        'full': '9999px',
      },
      fontWeight: {
        semibold: '600',
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
