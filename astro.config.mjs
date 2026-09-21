// @ts-check
import node from '@astrojs/node';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mood.com.co',
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  security: {
    checkOrigin: false, // Desactiva la verificación de origen de Astro si Traefik/Dokploy ya gestiona el dominio
  },
  server: {
    port: 4321,
    host: '0.0.0.0',
  },
});
