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
				gradient: 'gradient 5s ease-in-out infinite alternate',
				wave: 'wave 3s linear infinite',
				text: 'text 9s infinite',
				background: 'background 90s linear infinite',
			},
			keyframes: {
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
				background: {
					'0%': { 'background-position': 'top left' },
					'100%': { 'background-position': 'bottom right' },
				},
			},
			colors: {
				porple: {
					50: '#EBE8ED',
					100: '#D7D2DA',
					200: '#AEA5B6',
					300: '#887B93',
					400: '#5F5568',
					500: '#36303B',
					600: '#2C2730',
					700: '#211E25',
					800: '#151217',
					900: '#0A090B',
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
