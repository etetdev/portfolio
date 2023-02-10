/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./*.html'],
	darkMode: 'class',
	future: {
		hoverOnlyWhenSupported: true,
	},
	theme: {
		extend: {
			backgroundImage: {
				topography: "url('/assets/img/background.svg')",
			},
			animation: {
				fade: 'fade 1s',
				gradient: 'gradient 5s linear infinite',
				wave: 'wave 3s linear infinite',
				text: 'text 8s infinite',
				ltr: 'ltr-linear-infinite 60s linear infinite',
			},
			keyframes: {
				fade: {
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
				wave: {
					'0%': { transform: 'rotate(0.0deg)' },
					'10%': { transform: 'rotate(14deg)' },
					'20%': { transform: 'rotate(-8deg)' },
					'30%': { transform: 'rotate(14deg)' },
					'40%': { transform: 'rotate(-4deg)' },
					'50%': { transform: 'rotate(10.0deg)' },
					'60%': { transform: 'rotate(0.0deg)' },
					'100%': { transform: 'rotate(0.0deg)' },
				},
				text: {
					'0%': { content: '"Hey !"' },
					'33%': { content: '"Hey !"' },
					'34%': { content: '"Salut !"' },
					'66%': { content: '"Salut !"' },
					'67%': { content: '"こんにちは !"' },
					'100%': { content: '"こんにちは !"' },
				},
				'ltr-linear-infinite': {
					'0%': { 'background-position': 'top left' },
					'100%': { 'background-position': 'bottom right' },
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
			fontFamily: {
				sans: ['Inter var'],
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
