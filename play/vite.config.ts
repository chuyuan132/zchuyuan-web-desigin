import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // resolve: {
  //   alias: {
  //     'web-design': path.resolve(__dirname, '../dist/es/index.js'),
  //     'web-design-css': path.resolve(__dirname, '../dist/es/index.css'),
  //   },
  // },
});
