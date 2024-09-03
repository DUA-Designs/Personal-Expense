import adapter from '@sveltejs/adapter-static';

 

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '/Personal-Expense/index.html'
		}),
		paths: {
			base:  "/Personal-Expense"
		}
	}
};

export default config;