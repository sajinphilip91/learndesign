/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#D9D9D9",
                canvas: "#FFFFFF",
                border: "#E5E5E5",
                primary: {
                    DEFAULT: "#000000",
                    foreground: "#FFFFFF",
                },
                secondary: {
                    DEFAULT: "#F5F5F5",
                    foreground: "#000000",
                },
                muted: {
                    DEFAULT: "#F5F5F5",
                    foreground: "#737373",
                },
            },
            fontFamily: {
                sans: ["Afacad", "Inter", "SF Pro", "system-ui", "sans-serif"],
            },
            borderRadius: {
                lg: "20px",
                md: "16px",
                sm: "12px",
            },
            spacing: {
                '4.5': '1.125rem', // 18px
                '5.5': '1.375rem', // 22px
            }
        },
    },
    plugins: [],
}
