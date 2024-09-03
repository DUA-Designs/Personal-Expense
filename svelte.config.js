
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      fallback: '/Personal-Expense/index.html',
       output: 'public', // Update this line

    }),
    paths: {
      base: "/Personal-Expense"
    },
    prerender: {
      handleHttpError: ({ statusCode, url }) => {
        if (statusCode === 404 && url.pathname === '/') {
          return {
            statusCode: 301,
            headers: {
              'Location': '/Personal-Expense'
            }
          };
        }
        return null; // default behavior
      }
    }
  }
};

export default config;
