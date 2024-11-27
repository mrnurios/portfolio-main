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
                    "-webkit-text-stroke-width": "1px",
                    "-webkit-text-stroke-color": theme("colors.gray.800"),
                },
            });
        },
    ],
} satisfies Config;
