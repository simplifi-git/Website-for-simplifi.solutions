import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://simplifi.solutions',
  integrations: [sitemap()],
  build: {
    assets: 'assets'
  }
});
