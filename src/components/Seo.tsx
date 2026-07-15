import { useEffect } from 'react'
import { getAbsoluteUrl, siteConfig } from '../config/site'
import type { SeoData } from '../config/seo'

type SeoProps = {
  data: SeoData
}

export function Seo({ data }: SeoProps) {
  useEffect(() => {
    const url = getAbsoluteUrl(data.path)
    const image = data.image ?? `${siteConfig.url}${siteConfig.assets.ogImage}`

    document.documentElement.lang = 'ru'
    document.title = data.title
    setMeta('description', data.description)
    setMeta('robots', data.robots ?? 'index, follow')
    setMeta('theme-color', siteConfig.themeColor)
    setCanonical(url)

    setProperty('og:site_name', siteConfig.name)
    setProperty('og:type', data.type ?? 'website')
    setProperty('og:title', data.title)
    setProperty('og:description', data.description)
    setProperty('og:url', url)
    setProperty('og:image', image)
    setProperty('og:image:width', '1200')
    setProperty('og:image:height', '630')
    setProperty('og:locale', 'ru_RU')

    setMeta('twitter:card', siteConfig.seo.twitterCard)
    setMeta('twitter:title', data.title)
    setMeta('twitter:description', data.description)
    setMeta('twitter:image', image)

    setJsonLd(data.jsonLd ?? [])
  }, [data])

  return null
}

function setMeta(name: string, content: string) {
  const selector = `meta[name="${name}"]`
  const meta = document.querySelector<HTMLMetaElement>(selector) ?? document.createElement('meta')

  meta.setAttribute('name', name)
  meta.setAttribute('content', content)

  if (!meta.parentNode) {
    document.head.append(meta)
  }
}

function setProperty(property: string, content: string) {
  const selector = `meta[property="${property}"]`
  const meta = document.querySelector<HTMLMetaElement>(selector) ?? document.createElement('meta')

  meta.setAttribute('property', property)
  meta.setAttribute('content', content)

  if (!meta.parentNode) {
    document.head.append(meta)
  }
}

function setCanonical(href: string) {
  const link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]') ?? document.createElement('link')

  link.setAttribute('rel', 'canonical')
  link.setAttribute('href', href)

  if (!link.parentNode) {
    document.head.append(link)
  }
}

function setJsonLd(items: Array<Record<string, unknown>>) {
  document.querySelectorAll('script[type="application/ld+json"][data-seo-jsonld]').forEach((script) => {
    script.remove()
  })

  items.forEach((item, index) => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.dataset.seoJsonld = String(index)
    script.textContent = JSON.stringify(item)
    document.head.append(script)
  })
}
