
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    outDir: 'build',
    paths: {
      base: '/Personal-Expense',
    },
    prerender: {
      handleHttpError: ({ status, url }) => {
        if (status === 404 && url.pathname === '/') {
          return {
            status: 301,
            redirect: '/Personal-Expense',
          };
        }
        return null;
      },
    },
  },
};

export default config;
