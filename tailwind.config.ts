import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cube: {
          navy:  '#0D1B2A',
          blue:  '#1A4F8A',
          gold:  '#F5A623',
          light: '#F4F7FC',
        }
      },
    },
  },
  plugins: [],
}
export default config