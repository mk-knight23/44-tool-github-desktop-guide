/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                git: "#f05032",
                blueprint: "#1e293b",
            },
        },
    },
    plugins: [],
}
