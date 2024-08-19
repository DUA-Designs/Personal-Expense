import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	  kit: {
    adapter: adapter(),
    outDir: 'build', // Output built files to 'build' directory
    base: '/Personal-Expense', // Don't forget to update this too!
  },

};

export default config;
