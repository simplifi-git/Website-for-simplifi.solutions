import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://simplifi-git.github.io',
  base: '/Website-for-simplifi.solutions',
  integrations: [sitemap()],
  output: 'static'
});
