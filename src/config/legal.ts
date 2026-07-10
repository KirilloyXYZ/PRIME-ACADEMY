import { TELEGRAM_BOT_LABEL, TELEGRAM_BOT_URL, TELEGRAM_CHANNEL_LABEL, TELEGRAM_CHANNEL_URL } from './site'

export const legalConfig = {
  projectName: 'PRIME ACADEMY',
  projectDescription: 'онлайн-подготовка по физике и репетиторские занятия',
  siteDomain: '',
  operatorFullName: 'Кузнецов Кирилл Алексеевич',
  operatorStatus: 'самозанятый',
  operatorCity: 'Москва',
  operatorEmail: 'kirilkuznecov0018@gmail.com',
  personalDataContactName: 'Кирилл Кузнецов',
  telegramContact: TELEGRAM_BOT_URL,
  telegramContactLabel: TELEGRAM_BOT_LABEL,
  telegramChannel: TELEGRAM_CHANNEL_URL,
  telegramChannelLabel: TELEGRAM_CHANNEL_LABEL,
  effectiveDate: '10 июля 2026',
  privacyVersion: '1.0',
  consentVersion: '1.0',
  marketingConsentVersion: '1.0',
  termsVersion: '1.0',
  usesCookies: false,
  usesAnalytics: false,
  hasPaymentsOnSite: false,
  hasRegistration: false,
  hasPersonalAccount: false,
  hasLeadFormSubmission: false,
} as const

export const legalLinks = [
  { label: 'Политика обработки персональных данных', href: '/privacy' },
  { label: 'Согласие на обработку персональных данных', href: '/personal-data-consent' },
  { label: 'Согласие на информационные сообщения', href: '/marketing-consent' },
  { label: 'Пользовательское соглашение', href: '/terms' },
  { label: 'Cookies и аналитика', href: '/cookies' },
]
