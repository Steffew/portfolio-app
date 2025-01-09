import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter({
            fallback: 'index.html'  // Enables SPA fallback for dynamic routes
        }),

        // No need for full prerendering since it's an SPA
        prerender: {
            entries: []
        }
    }
};

export default config;
