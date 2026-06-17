/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        cream: {
          DEFAULT: '#f5f0eb',
          50: '#faf8f5',
          100: '#f5f0eb',
          200: '#ebe3d9',
          300: '#ddd0c0',
        },
        charcoal: {
          DEFAULT: '#0a0a0a',
          50: '#1a1a1a',
          100: '#141414',
          200: '#111111',
          300: '#0a0a0a',
        },
        copper: {
          DEFAULT: '#c87941',
          light: '#d4956a',
          dark: '#a86530',
        },
        border: {
          dark: '#1a1a1a',
          light: '#2d2d2d',
          cream: '#e0d6ca',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
