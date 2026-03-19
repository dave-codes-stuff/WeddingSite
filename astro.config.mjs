// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import db from "@astrojs/db";

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

  integrations: [db()]
});