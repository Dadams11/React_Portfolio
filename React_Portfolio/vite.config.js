import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react({ jsxRuntime: 'automatic' })], // Specify the automatic JSX runtime
  server: {
    port: 3001,
    open: true
  }
  // No need for the esbuild configuration for JSX, 
  // as the automatic runtime handles this now.
})
