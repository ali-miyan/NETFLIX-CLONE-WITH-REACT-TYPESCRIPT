/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'regular':['regular'],
        'light':['light'],
        'medium':['medium'],
        'bold':['bold']
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('tailwind-scrollbar-hide')],
}