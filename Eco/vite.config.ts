import react from '@vitejs/plugin-react'

import { defineConfig, type PluginOption } from 'vite'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()] as PluginOption[],
  server: {
    port: 3001 // Replace 3001 with your desired port number
  },
})


