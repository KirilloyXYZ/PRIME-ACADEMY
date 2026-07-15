import { siteConfig } from './site'

export const legalConfig = {
  projectName: siteConfig.name,
  projectDescription: 'онлайн-подготовка по физике и репетиторские занятия',
  siteDomain: siteConfig.url,
  operatorFullName: siteConfig.operator.fullName,
  operatorStatus: siteConfig.operator.status,
  operatorCity: siteConfig.operator.city,
  operatorEmail: siteConfig.contactEmail,
  personalDataContactName: 'Кирилл Алексеевич',
  telegramContact: siteConfig.telegram.botUrl,
  telegramContactLabel: siteConfig.telegram.botLabel,
  telegramChannel: siteConfig.telegram.channelUrl,
  telegramChannelLabel: siteConfig.telegram.channelLabel,
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

export const legalLinks = siteConfig.legalLinks
