/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: "#BEA6E8",
        // primary: "#ed2f55",
        primary: "#ffe613",
        bgDark: "#080808",
        border: "#1A1A1A",
        textDark: "#080808",
        textMid: "#6F6F6F",
        textLight: "#CBCBCB"
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        alfa: ['Alfa Slab One', 'cursive'],
      },
    },
  },
  plugins: [],
}