/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Standard Government/Medical Red Palette
        rrb: {
          red: '#dc2626',     // Primary Red (Red-600)
          dark: '#991b1b',    // Darker shade for hover/headers (Red-800)
          light: '#fef2f2',   // Light red background (Red-50)
          text: '#1e293b',    // Slate 800 for text
          muted: '#64748b',   // Slate 500 for secondary text
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      },
      animation: {
        marquee: 'marquee 160s linear infinite', // Slowed down further to 160s
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
