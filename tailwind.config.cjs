/**
 * Tailwind v4 config (CommonJS). Saved as .cjs to avoid ESM issues when
 * package.json has "type": "module".
 */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#E63946',
          secondary: '#1d3557',
          'base-100': '#f8f9fa',
          neutral: '#111827',
        },
      },
    ],
  },
};
