import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['light', 'dark', 'retro', 'nord', 'valentine', 'acid', 'autumn'],
  },
} satisfies Config;
