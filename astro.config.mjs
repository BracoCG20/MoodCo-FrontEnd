// @ts-check
import node from '@astrojs/node';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://mood.com.co',
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  security: {
    checkOrigin: false, // Desactiva el bloqueo de Astro para peticiones proxied desde Dokploy
  },
  server: {
    port: 4321,
    host: '0.0.0.0',
  },
});
