/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EFD958', // Lemon yellow
        'primary-dark': '#D6C14F', // Darker lemon
        secondary: '#A15FAD', // Purple
        tertiary: '#F2809F', // Pink
        'dark-purple': '#6E3C7C', // Darker purple for accents
        'light-lemon': '#F6E879', // Lighter lemon for hover states
        'light-pink': '#FFC0CB', // Light pink for accents
      },
      gradients: {
        'lemon-to-purple': 'linear-gradient(90deg, #EFD958 0%, #A15FAD 100%)',
        'purple-to-pink': 'linear-gradient(90deg, #A15FAD 0%, #F2809F 100%)',
        'lemon-to-pink': 'linear-gradient(90deg, #EFD958 0%, #F2809F 100%)',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'gradient-x': 'gradient-x 10s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
