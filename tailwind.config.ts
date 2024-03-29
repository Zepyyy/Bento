import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    safelist: [
        {
            pattern: /col-span-/,
            variants: ["sm", "md", "lg", "xl", "2xl"],
        },
        {
            pattern: /row-span-/,
            variants: ["sm", "md", "lg", "xl", "2xl"],
        },
        {
            pattern: /col-start-/,
            variants: ["sm", "md", "lg", "xl", "2xl"],
        },
        {
            pattern: /row-start-/,
            variants: ["sm", "md", "lg", "xl", "2xl"],
        },
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-inter)"],
                mono: ["var(--font-roboto-mono)"],
            },
            colors: {
                bg: "var(--bg)",
                text: "var(--Text)",
                "Color-50": "var(--Color-50)",
                "Color-100": "var(--Color-100)",
                "Color-200": "var(--Color-200)",
                "Color-300": "var(--Color-300)",
                "Color-400": "var(--Color-400)",
                "Color-500": "var(--Color-500)",
                "Color-600": "var(--Color-600)",
                "Color-700": "var(--Color-700)",
                "Color-800": "var(--Color-800)",
                "Color-900": "var(--Color-900)",
                "Color-950": "var(--Color-950)",
            },
            keyframes: {
                phantom: {
                    "0%": { transform: "translateY(0)", opacity: "1" },
                    "50%": { transform: "translateY(-8px)", opacity: "0.5" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
            },
            animation: {
                phantom: "phantom 2s infinite",
            },
        },
    },
    plugins: [],
};
export default config;
