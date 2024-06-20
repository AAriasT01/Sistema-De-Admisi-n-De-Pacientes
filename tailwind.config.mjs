/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
			  'hero-pattern': "url('src/img/banner.jpeg')",
			  'separador1-pattern': "url('src/img/separador1.jpeg')",
			},
		  },
		},
		plugins: [],
	  };
