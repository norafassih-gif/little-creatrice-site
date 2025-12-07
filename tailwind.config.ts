import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Ici on relie nos variables aux classes Tailwind
        sans: ['var(--font-montserrat)', 'sans-serif'],
        mono: ['var(--font-space)', 'monospace'], // Ça sera notre "Cartograph" style
      },
      colors: {
        'neon-pink': '#ff0080', // Un rose plus électrique
      }
    },
  },
  plugins: [],
};
export default config;