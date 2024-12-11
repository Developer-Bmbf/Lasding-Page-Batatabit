import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    alpinejs({
      entrypoint: "/src/entrypoint",
    }),
    preact(),
  ],
});
