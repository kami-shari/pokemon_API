import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  server: {
    port: process.env.PORT ? Number(process.env.PORT) : 10000,
    host: '0.0.0.0',
    allowedHosts: ['pokemon-api-79sn.onrender.com'],
    proxy: {
      '/api': {
        target: 'https://pokeapi.co',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: false
      }
    }
  },
  plugins: [
    react()
  ],
  optimizeDeps: {
    exclude: ['react-devtools'],
  },
  build: {
    minify: 'esbuild',
    sourcemap: true,
    outDir: 'dist',
    target: 'esnext',
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }
});