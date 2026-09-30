import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Tema 4.3: Introducción a PWA con React
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Guía Primer Parcial - Desarrollo Móvil Integral',
        short_name: 'Guía DMI',
        description: 'Repaso del primer parcial: PWA, JavaScript y React.',
        theme_color: '#1e3a8a',
        background_color: '#f8f9fa',
        display: 'standalone',
        icons: [{ src: 'favicon.svg', sizes: 'any', type: 'image/svg+xml' }],
      },
    }),
  ],
})
