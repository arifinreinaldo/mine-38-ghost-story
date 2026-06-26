import { defineConfig } from 'vitest/config'

// Test config kept separate from vite.config.js so the build stays untouched.
// esbuild handles JSX with the automatic runtime, so components that don't
// import React (the app's convention) transform correctly under Vitest.
export default defineConfig({
  esbuild: { jsx: 'automatic' },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./test/setup.js'],
    include: ['test/**/*.test.{js,jsx}'],
    clearMocks: true,
  },
})
