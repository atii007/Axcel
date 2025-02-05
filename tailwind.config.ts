import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          light: '#FFC107', // Light orange from gradient
          DEFAULT: '#FF5722', // Main orange
          dark: '#E64A19', // Darker orange for hover effects
        },
        secondary: {
          DEFAULT: '#00AEEF', // Blue from logo
          dark: '#008ACD', // Darker blue for hover effects
        },
        overlay: {
          light: '#122e6d',
          default: '#102147',
        },
        neutral: {
          light: '#F2F2F2', // Light gray for backgrounds
          DEFAULT: '#333333', // Dark gray for text
          medium: '#666666', // Medium gray for secondary text
        },
        white: '#FFFFFF', // Pure white
        gradient: {
          orange: 'linear-gradient(to right, #FF5722, #FFC107)', // Orange gradient
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
