/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-dark': '#1a0b2e',
        'purple-light': '#2d1b4e',
      },
    },
  },
  plugins: [],
}

