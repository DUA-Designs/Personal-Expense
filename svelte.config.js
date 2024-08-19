 
import adapter from '@sveltejs/adapter-static';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	  kit: {
    adapter: adapter(),
    outDir: 'build', 
    base:'/Personal-Expense' // Output built files to 'build' directory
    
	  }
};

export default config;
