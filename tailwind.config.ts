//tailwind.config.ts

import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            animation: {
                marquee: "scroll-left 10s linear infinite",
                "marquee-right": "scroll-right 10s linear infinite", //
                "marquee-infinite": "scroll-infinite 10s linear infinite 0s", //
            },
            keyframes: {
                "scroll-right": {
                    "0%": { transform: "translateX(0%)" },
                    "100%": { transform: "translateX(100%)" },
                },
                "scroll-infinite": {
                    "100%": { transform: "translateX(0%)" },
                    "0%": { transform: "translateX(-100%)" },
                },
            },
        },
    },
    plugins: [
        function ({
            addUtilities,
            theme,
        }: {
            addUtilities: (
                utilities: Record<string, Record<string, string>>
            ) => void;
            theme: (key: string) => any;
        }) {
            addUtilities({
                ".text-outline": {
                    color: "transparent",
                    "-webkit-text-stroke-width": "1px",
                    "-webkit-text-stroke-color": "white",
                },
            });
        },
    ],
} satisfies Config;
