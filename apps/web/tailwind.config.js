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
        'gradient-brand': 'linear-gradient(135deg, #3B82F6 0%, #7C3AED 100%)',
        'gradient-hero': 'linear-gradient(180deg, rgba(10,10,15,0) 0%, rgba(10,10,15,0.8) 60%, rgba(10,10,15,1) 100%)',
      },
    },
  },
  plugins: [],
};
