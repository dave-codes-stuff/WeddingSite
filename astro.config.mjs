// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  fonts: [{
    provider: fontProviders.google(),
    name: "Gloock",
    cssVariable: "--font-header",
  },
  {
    provider: fontProviders.google(),
    name: "Heebo",
    cssVariable: "--font-primary",
  }
],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});