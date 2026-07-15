import { createReadStream, existsSync, statSync } from 'node:fs'
import { readFile } from 'node:fs/promises'
import { createServer } from 'node:http'
import path from 'node:path'

const root = process.cwd()
const distDir = path.join(root, 'dist')
const routes = ['/', '/courses/ege', '/courses/oge', '/courses/olympiad', '/courses/school', '/courses/individual', '/privacy', '/terms', '/несуществующий-маршрут']

if (!existsSync(path.join(distDir, 'index.html'))) {
  throw new Error('dist/index.html not found. Run npm run build before npm test.')
}

const server = createServer((request, response) => {
  const url = new URL(request.url ?? '/', 'http://127.0.0.1')
  const file = resolveFile(url.pathname)

  response.setHeader('Content-Type', contentType(file))
  createReadStream(file).pipe(response)
})

const port = await listen(server)
const baseUrl = `http://127.0.0.1:${port}`

try {
  for (const route of routes) {
    const response = await fetch(`${baseUrl}${encodeURI(route)}`)
    const html = await response.text()

    assert(response.ok, `${route}: expected HTTP 200`)
    assert(html.includes('<div id="root"></div>'), `${route}: root container missing`)
    assert(/<title>.+<\/title>/.test(html), `${route}: title missing`)
    assert(/<h1>.+<\/h1>/.test(html), `${route}: no-JS H1 fallback missing`)
    assert(html.includes('https://t.me/primephys_bot'), `${route}: Telegram CTA missing in fallback`)
    assert(!html.includes('www.primeacademy-edu.ru'), `${route}: canonical should not use www`)
    assert(!/timeweb/i.test(html), `${route}: Timeweb domain leaked into HTML`)
  }

  const robots = await readFile(path.join(distDir, 'robots.txt'), 'utf8')
  const sitemap = await readFile(path.join(distDir, 'sitemap.xml'), 'utf8')

  assert(robots.includes('Sitemap: https://primeacademy-edu.ru/sitemap.xml'), 'robots.txt should reference sitemap')
  assert(sitemap.includes('<loc>https://primeacademy-edu.ru/courses/ege</loc>'), 'sitemap should include course routes')
} finally {
  await new Promise((resolve) => server.close(resolve))
}

function resolveFile(urlPath) {
  const cleanPath = decodeURIComponent(urlPath).replace(/^\/+/, '')
  const direct = path.join(distDir, cleanPath)
  const index = path.join(direct, 'index.html')

  if (existsSync(direct) && statSync(direct).isFile()) {
    return direct
  }

  if (existsSync(index)) {
    return index
  }

  return path.join(distDir, 'index.html')
}

function contentType(file) {
  if (file.endsWith('.css')) return 'text/css; charset=utf-8'
  if (file.endsWith('.js')) return 'text/javascript; charset=utf-8'
  if (file.endsWith('.svg')) return 'image/svg+xml'
  if (file.endsWith('.png')) return 'image/png'
  if (file.endsWith('.jpg') || file.endsWith('.jpeg')) return 'image/jpeg'
  if (file.endsWith('.webp')) return 'image/webp'
  if (file.endsWith('.xml')) return 'application/xml; charset=utf-8'
  if (file.endsWith('.txt')) return 'text/plain; charset=utf-8'
  return 'text/html; charset=utf-8'
}

function listen(httpServer) {
  return new Promise((resolve) => {
    httpServer.listen(0, '127.0.0.1', () => {
      const address = httpServer.address()
      resolve(address.port)
    })
  })
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message)
  }
}
