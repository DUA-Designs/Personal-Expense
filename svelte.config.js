
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    appDir: 'app', // Required as the default is _app
    adapter: adapter(),
    paths: {
      base: "/Personal-Expense"
    },
    hooks: {
      handleHttpError: async ({ request, error }) => {
        if (error.code === 'NOT_FOUND') {
          // Handle 404 errors
          return {
            status: 404,
            body: 'Page not found',
          };
        }
        return {
          status: 500,
          body: 'Internal Server Error',
        };
      },
    },
  },
  preprocess: [vitePreprocess()],
};

export default config;
