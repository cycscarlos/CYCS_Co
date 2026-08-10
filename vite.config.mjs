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
        resolve(__dirname, 'assets/html/components'),
        resolve(__dirname, 'dist/assets/html/components'),
        { recursive: true }
      );
    },
  };
}

export default defineConfig({
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
        main: resolve(__dirname, 'index.html'),
        automatizaciones: resolve(__dirname, 'assets/html/automatizaciones.html'),
        contacto: resolve(__dirname, 'assets/html/contacto.html'),
        nosotros: resolve(__dirname, 'assets/html/nosotros.html'),
        seguridadYRedes: resolve(__dirname, 'assets/html/seguridadYRedes.html'),
        servicios: resolve(__dirname, 'assets/html/servicios.html'),
        sistemasCriticos: resolve(__dirname, 'assets/html/sistemasCriticos.html'),
      }
    }
  }
});
