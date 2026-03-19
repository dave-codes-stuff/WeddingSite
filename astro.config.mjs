// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import node from "@astrojs/node";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
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
]
});