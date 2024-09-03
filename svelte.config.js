import adapter from '@sveltejs/adapter-static';

console.log(process.env.BASE_PATH);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: 'index.html'
		}),
		paths: {
			base:  "/Personal-Expense"
		}
	}
};

export default config;