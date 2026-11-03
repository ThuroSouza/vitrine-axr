import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { createServer } from 'vite'

const dist = join(process.cwd(), 'dist')
const template = await readFile(join(dist, 'index.html'), 'utf8')
const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom' })

const escapeHtml = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')

function replaceMeta(html, attribute, key, content) {
  const pattern = new RegExp(`<meta ${attribute}="${key}" content="[^"]*"\\s*/>`)
  if (!pattern.test(html)) throw new Error(`Missing ${attribute}=${key} in dist/index.html`)
  return html.replace(pattern, `<meta ${attribute}="${key}" content="${escapeHtml(content)}" />`)
}

function renderHtml(path, getPageMeta, siteUrl) {
  const meta = getPageMeta(path)
  let html = template.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(meta.title)}</title>`)
  html = replaceMeta(html, 'name', 'description', meta.description)
  html = replaceMeta(html, 'name', 'robots', meta.robots ?? 'index, follow')
  html = replaceMeta(html, 'property', 'og:title', meta.title)
  html = replaceMeta(html, 'property', 'og:description', meta.description)
  html = replaceMeta(html, 'name', 'twitter:title', meta.title)
  html = replaceMeta(html, 'name', 'twitter:description', meta.description)

  if (siteUrl) {
    const url = new URL(path, siteUrl).href
    html = html.replace('</head>', `    <link rel="canonical" href="${escapeHtml(url)}" />\n    <meta property="og:url" content="${escapeHtml(url)}" />\n  </head>`)
  }
  return html
}

try {
  const [{ getPageMeta }, { publishedProjects }, { siteConfig }] = await Promise.all([
    vite.ssrLoadModule('/src/config/seo.ts'),
    vite.ssrLoadModule('/src/data/projects.ts'),
    vite.ssrLoadModule('/src/config/site.ts'),
  ])
  const siteUrl = siteConfig.siteUrl ? new URL(siteConfig.siteUrl) : null
  if (siteUrl && (siteUrl.protocol !== 'https:' || siteUrl.pathname !== '/' || siteUrl.search || siteUrl.hash)) {
    throw new Error('siteUrl must be an HTTPS origin, such as https://example.com')
  }

  const paths = ['/', '/servicos', '/clientes', '/institucional', '/objetivos']
  for (const project of publishedProjects) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(project.slug)) throw new Error(`Invalid project slug: ${project.slug}`)
    paths.push(`/clientes/${project.slug}`)
  }

  for (const path of paths) {
    const file = path === '/' ? join(dist, 'index.html') : join(dist, `${path.slice(1)}.html`)
    await mkdir(dirname(file), { recursive: true })
    await writeFile(file, renderHtml(path, getPageMeta, siteUrl), 'utf8')
  }

  if (siteUrl) {
    const urls = paths.map((path) => `  <url><loc>${escapeHtml(new URL(path, siteUrl).href)}</loc></url>`).join('\n')
    await writeFile(join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, 'utf8')
    await writeFile(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${new URL('/sitemap.xml', siteUrl).href}\n`, 'utf8')
  }

  console.log(`Prepared ${paths.length} HTML routes${siteUrl ? ', sitemap, and robots.txt' : ' (domain-dependent files deferred)'}.`)
} finally {
  await vite.close()
}
