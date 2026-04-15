/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'roxo-profundo': '#3d1a5c',
        'roxo-claro': '#6b3fa0',
        'verde-esmeralda': '#1a7c6b',
        'verde-claro': '#2ba896',
        'dourado': '#d4af37',
        'dourado-claro': '#e8c547',
      },
    },
  },
  plugins: [],
}
