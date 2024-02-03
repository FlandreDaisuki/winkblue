/** @type {import('vite').UserConfig} */
export default {
  build: {
    lib: {
      entry: 'src/index.js',
    },
    rollupOptions: {
      output: [{
        format: 'umd',
        name: 'winkblue',
        entryFileNames: 'winkblue.umd.js',
      }, {
        format: 'esm',
        entryFileNames: 'winkblue.mjs',
      }],
      external: ['winkblue'],
    },
    sourcemap: true,
  },
};
