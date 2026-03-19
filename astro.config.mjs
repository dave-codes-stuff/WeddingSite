// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  fonts: [{
    provider: fontProviders.google(),
    name: "Gloock",
    cssVariable: "--font-gloock",
  },
  {
    provider: fontProviders.google(),
    name: "Heebo",
    cssVariable: "--font-heebo",
  }
]
});
