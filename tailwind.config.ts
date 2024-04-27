import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors:{
        'darkprimary': '#141414',
      }
    },
  },
  plugins: [require('flowbite/plugin')],
} satisfies Config