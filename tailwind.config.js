/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-magic': '#8B5CF6',
        'green-emerald': '#10B981',
        'gold-alchemist': '#D4AF37',
        'light-peace': '#FAFAF8',
        'cream-soft': '#F5F3F0',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
