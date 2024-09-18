import type { Config } from 'tailwindcss'
import { colors } from './tailwind.colors'

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      ...colors,
      primary: '#2D3134', // Deep Slate
      secondary: '#5B5F62', // Charcoal
      ignis: '#F66F4D', // Orange
      cream: '#FAF8ED', // Soft Cream,
      'soft-orange': '#FFD482',
      'slate-blue': '#2E476B', // Slate Blue
      gray: {
        50: '#FDFEFF', // Light Gray
        75: '#EAEAEB',
        100: '#9498A4', // Gray
        200: '#939597', // Medium Gray
        300: '#676A6C' // Dark Gray
      }
    },
    fontFamily: {
      main: ['Inter', 'system-ui'],
      aurora: ['Poppins', 'system-ui'],
      horizon: ['Sen', 'system-ui']
    },
    backgroundImage: {
      'orange-gradient': 'linear-gradient(159.99deg, #FFD482 13.35%, #FFBE82 118.92%)',
    },
    extend: {}
  },
  plugins: []
} satisfies Config
