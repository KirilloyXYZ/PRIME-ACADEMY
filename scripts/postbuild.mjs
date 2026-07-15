import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const siteUrl = 'https://primeacademy-edu.ru'
const ogImage = `${siteUrl}/og-image.png`
const distDir = path.join(process.cwd(), 'dist')
const indexPath = path.join(distDir, 'index.html')

const routes = [
  {
    path: '/',
    title: 'PRIME ACADEMY — физика без зубрёжки',
    h1: 'PRIME ACADEMY',
    description:
      'PRIME ACADEMY: онлайн-школа физики для подготовки к ЕГЭ, ОГЭ, олимпиадам и школьной программе через диагностику, теорию, практику и разбор ошибок.',
    type: 'website',
  },
  {
    path: '/courses/ege',
    title: 'ЕГЭ по физике — подготовка в PRIME ACADEMY',
    h1: 'ЕГЭ по физике',
    description:
      'Системная подготовка к ЕГЭ по физике: теория, живые семинары, задачи, домашняя работа, пробники и разбор ошибок.',
    type: 'article',
  },
  {
    path: '/courses/oge',
    title: 'ОГЭ по физике — подготовка в PRIME ACADEMY',
    h1: 'ОГЭ по физике',
    description:
      'Подготовка к ОГЭ по физике: школьная база, эксперименты, типовые задачи, домашняя работа и понятный маршрут.',
    type: 'article',
  },
  {
    path: '/courses/olympiad',
    title: 'Олимпиадная физика — PRIME ACADEMY',
    h1: 'Олимпиадная физика',
    description:
      'Олимпиадная физика: нестандартные задачи, физические модели, оценки и разбор решений по существующей программе PRIME ACADEMY.',
    type: 'article',
  },
  {
    path: '/courses/school',
    title: 'Школьная физика — PRIME ACADEMY',
    h1: 'Школьная физика',
    description:
      'Помощь со школьной физикой: текущие темы, контрольные, домашняя работа, пробелы и индивидуальный маршрут.',
    type: 'article',
  },
  {
    path: '/courses/individual',
    title: 'Индивидуальная подготовка — PRIME ACADEMY',
    h1: 'Индивидуальная подготовка',
    description:
      'Индивидуальная подготовка по физике: личный план, разбор ошибок, домашняя работа и гибкий темп по задаче ученика.',
    type: 'article',
  },
  {
    path: '/privacy',
    title: 'Политика обработки персональных данных — PRIME ACADEMY',
    h1: 'Политика обработки персональных данных',
    description: 'Как PRIME ACADEMY обрабатывает данные при обращении по вопросам занятий через Telegram.',
    type: 'article',
  },
  {
    path: '/personal-data-consent',
    title: 'Согласие на обработку персональных данных — PRIME ACADEMY',
    h1: 'Согласие на обработку персональных данных',
    description: 'Согласие пользователя на обработку данных при обращении в Telegram-контакт PRIME ACADEMY.',
    type: 'article',
  },
  {
    path: '/marketing-consent',
    title: 'Согласие на информационные сообщения — PRIME ACADEMY',
    h1: 'Согласие на информационные сообщения',
    description: 'Условия получения информационных сообщений PRIME ACADEMY в Telegram-канале проекта.',
    type: 'article',
  },
  {
    path: '/terms',
    title: 'Пользовательское соглашение — PRIME ACADEMY',
    h1: 'Пользовательское соглашение',
    description: 'Условия использования информационного сайта PRIME ACADEMY и обращения по вопросам занятий.',
    type: 'article',
  },
  {
    path: '/cookies',
    title: 'Cookies и аналитика — PRIME ACADEMY',
    h1: 'Cookies и аналитика',
    description: 'Информация о cookies, аналитике и рекламных инструментах на сайте PRIME ACADEMY.',
    type: 'article',
  },
]

const template = await readFile(indexPath, 'utf8')

await Promise.all(
  routes.map(async (route) => {
    const html = updateHead(template, route)

    if (route.path === '/') {
      await writeFile(indexPath, html)
      return
    }

    const routeDir = path.join(distDir, route.path)
    await mkdir(routeDir, { recursive: true })
    await writeFile(path.join(routeDir, 'index.html'), html)
  }),
)

function updateHead(html, route) {
  const url = `${siteUrl}${route.path === '/' ? '' : route.path}`
  const escapedTitle = escapeHtml(route.title)
  const escapedDescription = escapeHtml(route.description)

  return html
    .replace(/<title>.*?<\/title>/s, `<title>${escapedTitle}</title>`)
    .replace(/<meta\s+name="description"[\s\S]*?\/>/s, `<meta name="description" content="${escapedDescription}" />`)
    .replace(/<link rel="canonical" href=".*?"\s*\/>/s, `<link rel="canonical" href="${url}" />`)
    .replace(/<meta property="og:title" content=".*?"\s*\/>/s, `<meta property="og:title" content="${escapedTitle}" />`)
    .replace(/<meta\s+property="og:description"[\s\S]*?\/>/s, `<meta property="og:description" content="${escapedDescription}" />`)
    .replace(/<meta property="og:type" content=".*?"\s*\/>/s, `<meta property="og:type" content="${route.type}" />`)
    .replace(/<meta property="og:url" content=".*?"\s*\/>/s, `<meta property="og:url" content="${url}" />`)
    .replace(/<meta property="og:image" content=".*?"\s*\/>/s, `<meta property="og:image" content="${ogImage}" />`)
    .replace(/<meta name="twitter:title" content=".*?"\s*\/>/s, `<meta name="twitter:title" content="${escapedTitle}" />`)
    .replace(/<meta\s+name="twitter:description"[\s\S]*?\/>/s, `<meta name="twitter:description" content="${escapedDescription}" />`)
    .replace(/<meta name="twitter:image" content=".*?"\s*\/>/s, `<meta name="twitter:image" content="${ogImage}" />`)
    .replace(
      '<div id="root"></div>',
      `<div id="root"></div><noscript><main><h1>${escapeHtml(route.h1)}</h1><p>${escapedDescription}</p><a href="https://t.me/primephys_bot?start=noscript">Записаться на диагностику</a></main></noscript>`,
    )
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}
