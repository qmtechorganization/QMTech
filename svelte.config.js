
//import adapter from "@sveltejs/adapter-static";
import IISAdapter from 'sveltekit-adapter-iis'
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dexv/docs/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: IISAdapter({
      origin: 'http://localhost:5',
      pages: 'build',
      assets:'build',
      fallback: undefined,
      precompress: false,
      strict: false
    }),
    alias: {
			// this will match a file
      $assets: '/static'    }



  },
};

export default config;
