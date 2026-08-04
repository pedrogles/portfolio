import react from '@vitejs/plugin-react'
import type { Plugin } from 'vite'
import { defineConfig } from 'vitest/config'

const cleanUrlPreviewPlugin: Plugin = {
  name: 'portfolio-clean-url-preview',
  configurePreviewServer(server) {
    server.middlewares.use((request, _response, next) => {
      if (!request.url) return next()

      const [pathname, query] = request.url.split('?', 2)
      if (!pathname || pathname === '/' || /\.[a-z0-9]+$/i.test(pathname)) return next()

      request.url = `${pathname}.html${query ? `?${query}` : ''}`
      return next()
    })
  },
}

export default defineConfig({
  plugins: [react(), cleanUrlPreviewPlugin],
  build: {
    cssCodeSplit: true,
    sourcemap: false,
  },
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['src/**/*.test.{ts,tsx}'],
    setupFiles: './src/test/setup.ts',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      exclude: ['src/entry-server.tsx', 'src/main.tsx', 'src/test/**'],
    },
  },
})
