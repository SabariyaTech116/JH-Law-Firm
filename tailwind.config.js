/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-black': '#0B0B0B',
        'gold': {
          50: '#F5E6A8',
          100: '#F1E094',
          200: '#E8D066',
          300: '#DFC038',
          400: '#C9A24D',
          500: '#B08D3C',
          600: '#967A33',
          700: '#7C672A',
          800: '#625421',
          900: '#484118'
        },
        'off-white': '#E5E5E5'
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif']
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A24D, #F5E6A8, #B08D3C)'
      }
    },
  },
  plugins: [],
}