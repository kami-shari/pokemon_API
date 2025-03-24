import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  server: {
    port: process.env.PORT ? Number(process.env.PORT) : 10000,
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'https://pokeapi.co',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  plugins: [react()],
  build: {
    minify: 'esbuild',
    sourcemap: false,
    target: 'esnext',
    outDir: 'dist',
  }
})