import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./app/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                // Add your custom colors here
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
                    "-webkit-text-stroke-color": "white",
                },
            });
        },
    ],
};

export default config;
