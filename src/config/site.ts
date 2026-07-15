export const siteConfig = {
  name: 'PRIME ACADEMY',
  domain: 'primeacademy-edu.ru',
  url: 'https://primeacademy-edu.ru',
  description:
    'Онлайн-школа физики для подготовки к ЕГЭ, ОГЭ, олимпиадам и школьной программе: диагностика, теория, практика, домашние задания и разбор ошибок.',
  themeColor: '#07091f',
  contactEmail: 'kirilkuznecov0018@gmail.com',
  telegram: {
    botUrl: 'https://t.me/primephys_bot',
    botLabel: '@primephys_bot',
    channelUrl: 'https://t.me/primephys',
    channelLabel: '@primephys',
  },
  operator: {
    fullName: 'Кузнецов Кирилл Алексеевич',
    status: 'самозанятый',
    city: 'Москва',
  },
  assets: {
    favicon: '/favicon.svg',
    appleTouchIcon: '/apple-touch-icon.png',
    manifest: '/site.webmanifest',
    ogImage: '/og-image.png',
  },
  legalLinks: [
    { label: 'Политика обработки персональных данных', href: '/privacy' },
    { label: 'Согласие на обработку персональных данных', href: '/personal-data-consent' },
    { label: 'Согласие на информационные сообщения', href: '/marketing-consent' },
    { label: 'Пользовательское соглашение', href: '/terms' },
    { label: 'Cookies и аналитика', href: '/cookies' },
  ],
  seo: {
    title: 'PRIME ACADEMY — физика без зубрёжки',
    titleTemplate: '%s — PRIME ACADEMY',
    twitterCard: 'summary_large_image',
  },
} as const

export const TELEGRAM_BOT_URL = siteConfig.telegram.botUrl
export const TELEGRAM_BOT_LABEL = siteConfig.telegram.botLabel
export const TELEGRAM_CHANNEL_URL = siteConfig.telegram.channelUrl
export const TELEGRAM_CHANNEL_LABEL = siteConfig.telegram.channelLabel

export function getAbsoluteUrl(path = '/') {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${siteConfig.url}${normalizedPath === '/' ? '' : normalizedPath}`
}

export function getAssetUrl(path: string) {
  if (path.startsWith('http')) {
    return path
  }

  return `${siteConfig.url}${path.startsWith('/') ? path : `/${path}`}`
}

export function withTelegramBotStart(payload: string) {
  return `${siteConfig.telegram.botUrl}?start=${encodeURIComponent(payload)}`
}
