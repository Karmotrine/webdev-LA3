<<<<<<< HEAD
=======
/** @type {import('tailwindcss').Config}*/
>>>>>>> f89dd98242dd49ca8d9328c5b2f67eaa1c1f3297
const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],

<<<<<<< HEAD
  plugins: [
    require('flowbite/plugin')
  ],

  darkMode: 'class',
  
  theme: {
    extend: {
    }
  }
};

module.exports = config;
=======
  theme: {
    extend: {},
  },

  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class',
};

module.exports = config;
>>>>>>> f89dd98242dd49ca8d9328c5b2f67eaa1c1f3297
