import path from 'path';
const { defineConfig } = require('vite');

const resolve = file => path.resolve(__dirname, 'src', file);

export default defineConfig({
  root: 'src',
  build: {
  outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve('index.html'),
        profiles: resolve('profiles/index.html'),
        gallery: resolve('gallery/index.html'),
      },
    },
  },
});
