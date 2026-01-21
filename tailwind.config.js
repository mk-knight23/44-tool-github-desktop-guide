/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                git: "#ea4aaa", // Switching to a more "modern hub" vibrant pink/orange hybrid
                blueprint: "#020617",
            },
        },
    },
    plugins: [],
}
