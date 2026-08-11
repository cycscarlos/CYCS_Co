import { defineConfig } from 'vite';
import { resolve } from 'path';
import { cpSync } from 'fs';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// Copia assets/html/components/ a dist (Vite no incluye archivos que solo
// se fetchean en runtime: components-loader los carga por fetch absoluto).
function copyComponentsPlugin() {
  return {
    name: 'copy-components',
    apply: 'build',
    closeBundle() {
      cpSync(
        resolve(import.meta.dirname, 'assets/html/components'),
        resolve(import.meta.dirname, 'dist/assets/html/components'),
        { recursive: true }
      );
    },
  };
}

export default defineConfig({
  // 🟢 AGREGAR ESTA LÍNEA PARA GITHUB PAGES:
  base: '/CYCS_Co/',
  plugins: [
    copyComponentsPlugin(),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
      exclude: undefined,
      include: undefined,
      includePublic: true,
      logStats: true,
      ansiColors: true,
      svg: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                cleanupNumericValues: false,
                removeViewBox: false, // keep the viewBox at all costs
              },
            },
          },
          'sortAttrs',
          {
            name: 'addAttributesToSVGElement',
            params: {
              attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
            },
          },
        ],
      },
      png: {
        // https://sharp.pixelplumbing.com/api-output#png
        quality: 80,
      },
      jpeg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 80,
      },
      jpg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 80,
      },
      webp: {
        // https://sharp.pixelplumbing.com/api-output#webp
        lossless: true,
      },
      avif: {
        // https://sharp.pixelplumbing.com/api-output#avif
        lossless: true,
      },
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        automatizaciones: resolve(import.meta.dirname, 'assets/html/automatizaciones.html'),
        contacto: resolve(import.meta.dirname, 'assets/html/contacto.html'),
        redes: resolve(import.meta.dirname, 'assets/html/redes.html'),
        seguridad: resolve(import.meta.dirname, 'assets/html/seguridad.html'),
        servicios: resolve(import.meta.dirname, 'assets/html/servicios.html'),
        sistemasCriticos: resolve(import.meta.dirname, 'assets/html/sistemasCriticos.html'),
      }
    }
  }
});
