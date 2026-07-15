import { courses, teachers, type Course } from '../content'
import { getAbsoluteUrl, getAssetUrl, siteConfig } from './site'

export type SeoData = {
  title: string
  description: string
  path: string
  image?: string
  imageAlt?: string
  robots?: string
  type?: 'website' | 'article'
  jsonLd?: Array<Record<string, unknown>>
}

const defaultImage = getAssetUrl(siteConfig.assets.ogImage)

export const homeSeo: SeoData = {
  title: siteConfig.seo.title,
  description: siteConfig.description,
  path: '/',
  image: defaultImage,
  type: 'website',
  jsonLd: [createOrganizationJsonLd(), createWebSiteJsonLd(), ...createTeacherJsonLd()],
}

export const legalSeo: Record<string, SeoData> = {
  privacy: createLegalSeo(
    '/privacy',
    'Политика обработки персональных данных',
    'Как PRIME ACADEMY обрабатывает данные при обращении по вопросам занятий через Telegram.',
  ),
  'personal-data-consent': createLegalSeo(
    '/personal-data-consent',
    'Согласие на обработку персональных данных',
    'Согласие пользователя на обработку данных при обращении в Telegram-контакт PRIME ACADEMY.',
  ),
  'marketing-consent': createLegalSeo(
    '/marketing-consent',
    'Согласие на информационные сообщения',
    'Условия получения информационных сообщений PRIME ACADEMY в Telegram-канале проекта.',
  ),
  terms: createLegalSeo(
    '/terms',
    'Пользовательское соглашение',
    'Условия использования информационного сайта PRIME ACADEMY и обращения по вопросам занятий.',
  ),
  cookies: createLegalSeo(
    '/cookies',
    'Cookies и аналитика',
    'Информация о cookies, аналитике и рекламных инструментах на сайте PRIME ACADEMY.',
  ),
}

export function getCourseSeo(course: Course): SeoData {
  const path = `/courses/${course.id}`
  const description = `${course.short} ${course.format}. ${course.teacherLine}`

  return {
    title: `${course.title} — подготовка в PRIME ACADEMY`,
    description,
    path,
    image: defaultImage,
    type: 'article',
    jsonLd: [
      createCourseJsonLd(course, path),
      createBreadcrumbJsonLd([
        { name: 'Главная', path: '/' },
        { name: 'Курсы', path: '/#courses' },
        { name: course.title, path },
      ]),
    ],
  }
}

export function getRouteSeo(pathname: string): SeoData {
  const course = courses.find((item) => `/courses/${item.id}` === pathname)

  if (course) {
    return getCourseSeo(course)
  }

  const legalKey = pathname.replace('/', '')
  return legalSeo[legalKey] ?? homeSeo
}

function createLegalSeo(path: string, title: string, description: string): SeoData {
  return {
    title: `${title} — PRIME ACADEMY`,
    description,
    path,
    image: defaultImage,
    type: 'article',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: title,
        description,
        url: getAbsoluteUrl(path),
        isPartOf: {
          '@type': 'WebSite',
          name: siteConfig.name,
          url: siteConfig.url,
        },
      },
    ],
  }
}

function createOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.contactEmail,
    sameAs: [siteConfig.telegram.channelUrl],
  }
}

function createWebSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: 'ru-RU',
    description: siteConfig.description,
  }
}

function createTeacherJsonLd() {
  return teachers.map((teacher) => ({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: teacher.name,
    jobTitle: teacher.role,
    image: getAssetUrl(teacher.image),
    description: [teacher.quote, ...teacher.facts].join(' '),
    worksFor: {
      '@type': 'EducationalOrganization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
  }))
}

function createCourseJsonLd(course: Course, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.description,
    url: getAbsoluteUrl(path),
    image: defaultImage,
    educationalLevel: course.badge,
    provider: {
      '@type': 'EducationalOrganization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
  }
}

function createBreadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: getAbsoluteUrl(item.path),
    })),
  }
}
