import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const projectSource = await readFile(resolve('src/content/projects.ts'), 'utf8')
const projectSlugs = [...projectSource.matchAll(/slug:\s*'([^']+)'/g)].map((match) => match[1])
const routes = ['/', '/sobre', '/projetos', '/curriculo', '/404', ...projectSlugs.map((slug) => `/projetos/${slug}`)]
const template = await readFile(resolve('dist/index.html'), 'utf8')
const serverEntry = pathToFileURL(resolve('dist/server/entry-server.js')).href
const { render } = await import(serverEntry)

for (const route of routes) {
  const { body, head } = await render(route)
  const html = template
    .replace(/<!--app-head-start-->[\s\S]*?<!--app-head-end-->/, `<!--app-head-start-->\n    ${head}\n    <!--app-head-end-->`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`)
  const outputFile = route === '/' ? resolve('dist/index.html') : resolve(`dist${route}.html`)

  await mkdir(dirname(outputFile), { recursive: true })
  await writeFile(outputFile, html, 'utf8')
}

await rm(resolve('dist/server'), { recursive: true, force: true })
