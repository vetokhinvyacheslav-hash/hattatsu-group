import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#080D14',
        navy: '#111A33',
        blue: '#172E73',
        steel: '#6F7785',
        light: '#F4F6F8',
        line: '#D8DDE5',
        orange: '#F08A24',
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'sans-serif'],
      },
      fontSize: {
        'h1': ['80px', { lineHeight: '1.0', fontWeight: '800' }],
        'h2': ['52px', { lineHeight: '1.1', fontWeight: '700' }],
        'h3': ['32px', { lineHeight: '1.2', fontWeight: '700' }],
        'h4': ['24px', { lineHeight: '1.3', fontWeight: '600' }],
      },
      maxWidth: {
        'container': '1280px',
      },
    },
  },
  plugins: [],
}
export default config
