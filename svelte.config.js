import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

const dev = process.env.NODE_ENV === "development";

/** @type {import("@sveltejs/kit").Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),
  compilerOptions: { accessors: true },
  kit: {
    prerender: { onError: "continue" },
    paths: {
      // base: dev ? "" : "/ignite-pl-tech-radar",
      base: "",
    },
    adapter: adapter(),
    appDir: "internal",
  },
};

export default config;
