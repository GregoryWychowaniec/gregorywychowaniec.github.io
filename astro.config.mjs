import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.gregory.wychowaniec.fr',
  output: 'static',
  publicDir: './static',
  trailingSlash: 'never',
  integrations: [sitemap()],
});
