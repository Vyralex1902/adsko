import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors:{
        'darkprimary': '#1E1E1E',
      }
    },
  },
  plugins: [require('flowbite/plugin')],
} satisfies Config