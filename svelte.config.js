import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        appDir: 'app', // Required as the default is _app
        adapter: adapter(),
        paths:{base:"Personal-Expense"}
    },
    preprocess: vitePreprocess()
};
export default config;