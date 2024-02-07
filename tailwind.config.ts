import type { Config } from "tailwindcss";
import theme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
    safelist: [
        {
            pattern: /col-span-/,
            variants: ['sm', 'md', 'lg', 'xl', "2xl"],
        },
        {
            pattern: /row-span-/,
            variants: ['sm', 'md', 'lg', 'xl', "2xl"],
        },
    ],
  theme: {
    extend : {
        colors: {
            bg: '#1D1B1B',
            Mirage: {
                50: '#F5F7FA',
                100: '#EAEDF4',
                200: '#D1D9E6',
                300: '#A8B9D1',
                400: '#7993B7',
                500: '#58769F',
                600: '#455E84',
                700: '#394C6B',
                800: '#32415A',
                900: '#2D384D',
                950: '#1A202C'
            },
        },
    },
  },
  plugins: [],
};
export default config;
