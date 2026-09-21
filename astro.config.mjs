// @ts-check
import node from '@astrojs/node';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mood.com.co',
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  security: {
    checkOrigin: true,
  },
  server: {
    port: 4321,
    host: '0.0.0.0',
  },
});
