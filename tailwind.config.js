
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'poppins': ['Poppins', 'sans-serif'],
                'radley': ['Radley', 'serif'],
                'radioCanada' : ['Radio Canada', 'sans-serif'],
                'palanquin': ['Palanquin', 'sans-serif'],
                'northwell': [''],
                'times': ['Times New Roman', 'serif'],
            }
        },
    },
    plugins: [],
}