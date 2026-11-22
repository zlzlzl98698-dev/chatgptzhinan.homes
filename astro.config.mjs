import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://chatgptzhinan.homes',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  },
  integrations: [
    tailwind({
      applyBaseStyles: true
    }),
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/go/')
    })
  ]
});
