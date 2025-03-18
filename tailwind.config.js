/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Add JSX and TSX files to the content array
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

