/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens:{
      'sm': '580px',
      'md': '800px',
      'lg': '1080px',
      'xl': '1320px',
      '2xl': '1600px',
    },
    extend: {
      fontFamily: {
        SourceCodePro: ['SourceCodePro', 'monospace']
      }
  }
  },
  plugins: [],
}

