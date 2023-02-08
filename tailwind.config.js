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
				'fade-in': 'fade-in 1s',
				gradient: 'gradient 5s ease infinite',
			},
			keyframes: {
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				gradient: {
					'0%, 100%': {
						'background-size': '200% 200%',
						'background-position': 'left center',
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': 'right center',
					},
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
	},
};
