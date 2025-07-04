/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        founder: ['Founder', 'sans-serif'],
        neue: ['Neue', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

