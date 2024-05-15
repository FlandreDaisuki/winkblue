/** @type {import('vite').UserConfig} */
export default {
  build: {
    lib: {
      entry: 'src/index.js',
    },
    rollupOptions: {
      output: [{
        format: 'umd',
        name: 'Winkblue',
        entryFileNames: 'winkblue.umd.js',
        exports: 'named',
      }, {
        format: 'esm',
        entryFileNames: 'winkblue.mjs',
      }],
      external: ['winkblue'],
    },
    sourcemap: true,
  },
};
