import { defineConfig } from 'tsup';

export default defineConfig(
  {
    clean: true,
    entry: ['./src/index.ts'],
    format: ['cjs', 'esm'],
    esbuildOptions(options, context) {
      Object.assign(options, {
        platform: 'browser',
        logLevel: 'error',
        legalComments: 'none',
        minifyWhitespace: false,
        minifyIdentifiers: false,
        minifySyntax: true,
      })
    },
    shims: false,
    dts: {
      entry: ['./src/index.ts'],
      resolve: true,
    },
  }
);
