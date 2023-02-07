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
					50: '#EDEBF5',
					100: '#DCD7EA',
					200: '#B9AED5',
					300: '#9686C0',
					400: '#725EAB',
					500: '#574687',
					600: '#46386B',
					700: '#342A51',
					800: '#231C36',
					900: '#110E1B',
				},
				cream: {
					50: '#F6F6F3',
					100: '#F0EFEB',
					200: '#E0DFD6',
					300: '#CFCDBF',
					400: '#BFBDAB',
					500: '#B0AD96',
					600: '#AAA68E',
					700: '#A39F85',
					800: '#9F9B7F',
					900: '#989476',
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
