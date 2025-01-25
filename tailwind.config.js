/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#A1DFF7', // Lightest
          DEFAULT: '#0096DB', // Base Primary
          dark: '#005E8A', // Darkest
        },
        secondary: {
          light: '#4AB3E8',
          DEFAULT: '#007AB8',
        },
      },
    },
  },
  plugins: [],
}

