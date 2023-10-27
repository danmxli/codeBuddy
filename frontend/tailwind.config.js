import scrollbarHide from 'tailwind-scrollbar-hide';
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '128': '512px',
        '150': '600px'
      },
      width: {
        '128': '512px',
        '150': '600px'
      }
    },
  },
  plugins: [
    scrollbarHide
  ],
}

