const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Outfit', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				...defaultTheme.colors,
				'citron': {
					'50': '#fffceb',
					'100': '#fff6c6',
					'200': '#ffeb88',
					'300': '#ffdd59',
					'400': '#ffc820',
					'500': '#f9a607',
					'600': '#dd7d02',
					'700': '#b75806',
					'800': '#94430c',
					'900': '#7a380d',
					'950': '#461c02',
				},
				'sten': {
					'50': '#f4f6f7',
					'100': '#e2e7eb',
					'200': '#c9d2d8',
					'300': '#a3b3bd',
					'400': '#768b9a',
					'500': '#5b707f',
					'600': '#4e5d6c',
					'700': '#485460',
					'800': '#3d444d',
					'900': '#363c43',
					'950': '#21252b',
				},
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
