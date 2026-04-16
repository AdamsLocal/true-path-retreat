import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Netlify deploys to domain root — base is /
  base: '/',
  build: {
    rollupOptions: {
      output: {
        // Split vendor libs so browser can cache them independently
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'motion-vendor': ['framer-motion'],
          'lenis-vendor': ['lenis'],
        },
      },
    },
  },
})
