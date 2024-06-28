/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		screens: {
		  'xs': {'max': '639px'},
		},
		backgroundImage: {
		  'hero-pattern': "url('/img/banner.jpeg')",
		  'separador1-pattern': "url('/img/separador1.jpeg')",
		  'back-pattern': "url('/img/clinica.jpg')",
		},
	  },
	},
	plugins: [
		
	],
  };