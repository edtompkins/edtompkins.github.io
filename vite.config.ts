import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const root = dirname(fileURLToPath(import.meta.url))

// Multi-page build: each page is a real HTML entry with its own <head>
// (title, meta description, JSON-LD) so it is crawlable without client routing.
// Served from a custom domain apex (edtompkins.com), so base is '/'.
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        home: resolve(root, 'index.html'),
        about: resolve(root, 'about/index.html'),
        proof: resolve(root, 'proof/index.html'),
        contact: resolve(root, 'contact/index.html'),
      },
    },
  },
})
