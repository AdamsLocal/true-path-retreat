import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves from /true-path-retreat/ (repo name)
  // For Netlify/custom domain, change back to '/'
  base: '/true-path-retreat/',
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
