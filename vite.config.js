import path from 'path';
const { defineConfig } = require('vite');

const resolve = file => path.resolve(__dirname, 'src', file);

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve('index.html'),
        profiles: resolve('profiles/index.html'),
        gallery: resolve('gallery/index.html'),
      },
    },
  },
});
