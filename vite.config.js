import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split common heavy libraries into their own chunks
          react: ['react', 'react-dom'],
          antd: ['antd'],
        },
      },
    },
  },
})
