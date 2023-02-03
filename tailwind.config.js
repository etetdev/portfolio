/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./*.html'],
    darkMode: 'class',
    future: {
        hoverOnlyWhenSupported: true,
    },
    theme: {
        extend: {
            animation: {
                'fade-in': 'fade-in ease-out 2s',
            },
            keyframes: {
                'fade-in': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
            },
            colors: {
                porple: {
                    50: 'rgb(247, 247, 249)',
                    100: 'rgb(238, 238, 243)',
                    200: 'rgb(220, 221, 230)',
                    300: 'rgb(199, 201, 215)',
                    400: 'rgb(164, 167, 190)',
                    500: 'rgb(130, 134, 166)',
                    600: 'rgb(101, 106, 142)',
                    700: 'rgb(89, 93, 125)',
                    800: 'rgb(70, 73, 98)',
                    900: 'rgb(57, 60, 81)',
                },
            },
        },
    },
    corePlugins: {
        fontSize: false,
    },
    plugins: [
        require('prettier-plugin-tailwindcss'),
        require('tailwindcss-fluid-type'),
        require('tailwindcss-font-inter'),
    ],
};
