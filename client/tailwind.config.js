/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'over': 'rgba(0, 0, 0, 0.20)'
      }
    },
  },
  plugins: [],
}

