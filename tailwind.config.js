/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Refined lavender palette
        lavender: {
          50: '#FAF8FF',
          100: '#F4F0FF',
          200: '#E7DCFE',
          300: '#D3C1FD',
          400: '#B699FB',
          500: '#976EF7',
          600: '#7B45EE',
          700: '#622BD7',
          800: '#4A1CA8',
          900: '#321074',
          950: '#1F084B',
        },
        // Deep Navy & Slate Dark Theme Palette
        navy: {
          50: '#F0F4FA',
          100: '#E1E9F4',
          200: '#C3D3E9',
          300: '#96B3DA',
          400: '#638DC8',
          500: '#3D6AB5',
          600: '#2E5094',
          700: '#233C73',
          800: '#1B2C55',
          850: '#142142',
          900: '#0E172E',
          950: '#090F1F',
        },
        // Subtle blue accents
        skyaccent: {
          DEFAULT: '#38BDF8',
          light: '#7DD3FC',
          dark: '#0284C7',
          glow: 'rgba(56, 189, 248, 0.18)',
        },
        // Direct theme mapping
        darkbg: {
          DEFAULT: '#0A0F1D',      // Deep navy background
          surface: '#0F182E',      // Navy surface
          card: '#14213D',         // Navy card
          border: '#1F3158',       // Refined navy border
          hover: '#1B2C50',        // Navy card hover
          subtle: '#0D1426',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'soft-purple': '0 4px 20px -2px rgba(123, 69, 238, 0.12)',
        'soft-navy': '0 4px 24px -2px rgba(10, 15, 29, 0.25)',
        'glow-blue': '0 0 25px -4px rgba(56, 189, 248, 0.22)',
        'glow-purple': '0 0 25px -5px rgba(123, 69, 238, 0.28)',
        'glass': '0 8px 32px 0 rgba(14, 23, 46, 0.12)',
        'card-lift': '0 12px 30px -4px rgba(15, 24, 46, 0.18), 0 4px 12px -2px rgba(56, 189, 248, 0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-up': 'slideUp 0.4s ease-out forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.02)' },
        }
      }
    },
  },
  plugins: [],
}
