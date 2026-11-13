// @ts-check
import { defineConfig } from 'astro/config';

// PENDIENTE: definir `site` con el dominio definitivo para generar URLs canónicas y sitemap.
export default defineConfig({
  // site: 'https://www.dominio-por-confirmar.cl',
  trailingSlash: 'ignore',
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
});
