/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-logo-color': '#00b1ef',
        'my-second-color': '#0ed199',
      }
    },
  },
  plugins: [],
}

