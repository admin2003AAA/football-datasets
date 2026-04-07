/** @type {import('tailwindcss').Config} */
const { tailwindTokens } = require('../../packages/ui/src/tokens/index');

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      ...tailwindTokens,
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #C41E3A 0%, #D4AF37 100%)',
        'gradient-hero': 'linear-gradient(180deg, rgba(8,8,16,0) 0%, rgba(8,8,16,0.8) 60%, rgba(8,8,16,1) 100%)',
        'gradient-iraqi': 'linear-gradient(135deg, #C41E3A 0%, #1A7A3C 50%, #D4AF37 100%)',
      },
      fontFamily: {
        arabic: ['Noto Sans Arabic', 'Cairo', 'Tajawal', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
