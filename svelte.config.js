import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    outDir: 'build', // Output built files to 'build' directory
    paths: {
      base: '/Personal-Expense',
    },
  },
};

export default config;
