import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vercel exposes the stable production domain (no protocol) at build time.
// Locally it's undefined, so social tags gracefully fall back to relative URLs.
const prodUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
const siteUrl = prodUrl ? `https://${prodUrl}` : ''

export default defineConfig({
  plugins: [
    react(),
    {
      // Replace %SITE_URL% placeholders in index.html (og:image, og:url, ...)
      // so shared links carry absolute image URLs in production.
      name: 'inject-site-url',
      transformIndexHtml: (html) => html.replaceAll('%SITE_URL%', siteUrl),
    },
  ],
})
