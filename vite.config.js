import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  server: {
    proxy: {
      '/covers': {
        target: 'https://covers.openlibrary.org',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/covers/, ''),
        followRedirects: true
      }
    }
  }
});
