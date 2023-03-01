/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		colors: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				black: '#222831',
				altBlack: '#393E46',
				yellow: '#FFD369',
				gray: '#EEEEEE',
			},
			extend: {},
		},
	},
	plugins: [],
}
