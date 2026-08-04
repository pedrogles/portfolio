import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const defaultSiteUrl = 'https://pedrogles.vercel.app'

function getSiteUrl() {
  try {
    return new URL(process.env.VITE_SITE_URL ?? defaultSiteUrl).origin
  } catch {
    return defaultSiteUrl
  }
}

function escapeXml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}

const projectSource = await readFile(resolve('src/content/projects.ts'), 'utf8')
const projectSlugs = [...projectSource.matchAll(/slug:\s*'([^']+)'/g)].map((match) => match[1])
const routes = [
  '/',
  '/sobre',
  '/projetos',
  '/curriculo',
  ...projectSlugs.map((slug) => `/projetos/${slug}`),
]
const siteUrl = getSiteUrl()
const lastModified = new Date().toISOString().slice(0, 10)
const urls = routes
  .map((route, index) => {
    const priority = index === 0 ? '1.0' : route.startsWith('/projetos/') ? '0.7' : '0.8'
    return `  <url>\n    <loc>${escapeXml(new URL(route, `${siteUrl}/`).toString())}</loc>\n    <lastmod>${lastModified}</lastmod>\n    <priority>${priority}</priority>\n  </url>`
  })
  .join('\n')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`

await writeFile(resolve('public/sitemap.xml'), sitemap, 'utf8')
