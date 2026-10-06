import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: true,
    port: 5173,
    strictPort: true,
    // bind-mount inotify events don't propagate reliably — poll for changes
    watch: { usePolling: true, interval: 400 },
  },
})
