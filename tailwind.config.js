/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg:          '#0F0E0D',
        surface:     '#161412',
        'surface-2': '#1D1B18',
        gold:        '#C9A96E',
        'gold-light':'#E8C98A',
        tx:          '#F0EDE8',
        muted:       '#9B9590',
        border:      '#2A2520',
      },
      fontFamily: {
        heading: ['Bodoni Moda', 'Georgia', 'serif'],
        body:    ['Jost', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
