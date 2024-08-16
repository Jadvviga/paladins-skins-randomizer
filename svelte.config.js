import adapter from "@sveltejs/adapter-static";
// was "@sveltejs/adapter-auto"
import { vitePreprocess } from '@sveltejs/kit/vite';


/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://kit.svelte.dev/docs/integrations#preprocessors
    // for more information about preprocessors
    preprocess: vitePreprocess(),


    kit: {
        adapter: adapter({
            pages: "docs",
            assets: "docs",
            fallback: '404.html'
        }),
        paths: {
            // change below to your repo name
            base: process.argv.includes('dev') ? "" : "/paladins-skin-randomizer",
        }
    }
};

export default config;
