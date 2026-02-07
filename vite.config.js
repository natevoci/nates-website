import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'classic' // Use classic runtime for React 17
    }),
    svgr() // Support for importing SVGs as React components
  ],
  server: {
    port: 1234, // Match the default Parcel port
    open: true
  }
})
