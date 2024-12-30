/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'max-460': { max: '460px' }, // Add custom breakpoint for max width 460px
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' }, // From left to right
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideIn2: {
          '0%': { transform: 'translateX(100%)', opacity: '0' }, // From right to left
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        'slide-in': 'slideIn 1.5s ease-in-out', // Define first animation (left to right)
        'slide-in2': 'slideIn2 1.5s ease-in-out', // Define second animation (right to left)
      },
    },
  },
  plugins: [],
};
