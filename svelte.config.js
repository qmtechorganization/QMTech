/// svelte.config.js
import adapter from "@sveltejs/adapter-node";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"; // Ensure this import is present

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // ...
  preprocess: vitePreprocess(), // Keep your existing preprocessor
  kit: {
    adapter: adapter({
      // default options are shown
      env: {
        host: "0.0.0.0", // <--- IMPORTANT: Changed from "127.0.0.1" to "0.0.0.0"
        port: "5173",
        mode: "production",
      },
    }),
  },
  alias: {
    // this will match a file
    $assets: "/static",
  },
};

export default config;

// //import adapter from "@sveltejs/adapter-static";
// //import IISAdapter from "sveltekit-adapter-iis";
// import adapter from "@sveltejs/adapter-node";
// import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
//   // Consult https://kit.svelte.dev/docs/integrations#preprocessors
//   // for more information about preprocessors
//   preprocess: vitePreprocess(),

//   kit: {
//     adapter: adapter({
//       // default options are shown
//       env: {
//         host: "127.0.0.1",
//         port: "5173",
//         mode: "production",
//       },
//     }),
//   },
//   // adapter-auto only supports some environments, see https://kit.svelte.dexv/docs/adapter-auto for a list.
//   // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
//   // See https://kit.svelte.dev/docs/adapters for more information about adapters.
//   // adapter: IISAdapter({
//   //   origin: "http://192.168.0.2:2044",
//   //   pages: 'build',
//   //   assets:'build',
//   //   fallback: undefined,
//   //   precompress: false,
//   //   strict: falsea
//   // }),
//   alias: {
//     // this will match a file
//     $assets: "/static",
//   },
// };

// export default config;
