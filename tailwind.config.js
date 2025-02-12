/** @type {import('tailwindcss').Config} */
module.exports = {
    // content: [
    //     "./src/**/*.{vue,js,ts,jsx,tsx}",
    // ],
    purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}