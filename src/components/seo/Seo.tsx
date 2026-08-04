import { useEffect } from 'react'
import type { JsonLdValue, SeoConfig } from '../../types/seo'
import { absoluteUrl, DEFAULT_OG_IMAGE } from '../../content/seo'

interface SeoProps {
  readonly config: SeoConfig
  readonly jsonLd?: readonly JsonLdValue[]
}

function serializeJsonLd(value: JsonLdValue): string {
  return JSON.stringify(value).replaceAll('<', '\\u003c')
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

function seoValues(config: SeoConfig) {
  return {
    canonical: absoluteUrl(config.path),
    image: absoluteUrl(config.image ?? DEFAULT_OG_IMAGE),
    robots: config.noIndex ? 'noindex, nofollow' : 'index, follow',
  }
}

export function renderSeoHead(config: SeoConfig, jsonLd: readonly JsonLdValue[] = []): string {
  const { canonical, image, robots } = seoValues(config)
  const attributes = 'data-portfolio-seo="true"'
  const meta = (attribute: 'name' | 'property', key: string, content: string) =>
    `<meta ${attributes} ${attribute}="${escapeHtml(key)}" content="${escapeHtml(content)}">`

  return [
    `<title ${attributes}>${escapeHtml(config.title)}</title>`,
    meta('name', 'description', config.description),
    meta('name', 'robots', robots),
    meta('name', 'theme-color', '#0b3340'),
    `<link ${attributes} rel="canonical" href="${escapeHtml(canonical)}">`,
    meta('property', 'og:type', config.type ?? 'website'),
    meta('property', 'og:title', config.title),
    meta('property', 'og:description', config.description),
    meta('property', 'og:url', canonical),
    meta('property', 'og:image', image),
    meta('property', 'og:locale', 'pt_BR'),
    meta('name', 'twitter:card', 'summary_large_image'),
    meta('name', 'twitter:title', config.title),
    meta('name', 'twitter:description', config.description),
    meta('name', 'twitter:image', image),
    ...jsonLd.map(
      (value) => `<script ${attributes} type="application/ld+json">${serializeJsonLd(value)}</script>`,
    ),
  ].join('\n    ')
}

export function Seo({ config, jsonLd = [] }: SeoProps) {
  useEffect(() => {
    document.head.querySelectorAll('[data-portfolio-seo]').forEach((element) => element.remove())
    const { canonical, image, robots } = seoValues(config)

    function append(element: HTMLElement) {
      element.dataset.portfolioSeo = 'true'
      document.head.append(element)
    }

    function appendMeta(attribute: 'name' | 'property', key: string, content: string) {
      const element = document.createElement('meta')
      element.setAttribute(attribute, key)
      element.content = content
      append(element)
    }

    document.title = config.title
    const title = document.head.querySelector('title')
    if (title) title.dataset.portfolioSeo = 'true'
    appendMeta('name', 'description', config.description)
    appendMeta('name', 'robots', robots)
    appendMeta('name', 'theme-color', '#0b3340')

    const canonicalLink = document.createElement('link')
    canonicalLink.rel = 'canonical'
    canonicalLink.href = canonical
    append(canonicalLink)

    appendMeta('property', 'og:type', config.type ?? 'website')
    appendMeta('property', 'og:title', config.title)
    appendMeta('property', 'og:description', config.description)
    appendMeta('property', 'og:url', canonical)
    appendMeta('property', 'og:image', image)
    appendMeta('property', 'og:locale', 'pt_BR')
    appendMeta('name', 'twitter:card', 'summary_large_image')
    appendMeta('name', 'twitter:title', config.title)
    appendMeta('name', 'twitter:description', config.description)
    appendMeta('name', 'twitter:image', image)

    jsonLd.forEach((value) => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.textContent = serializeJsonLd(value)
      append(script)
    })

    return () => {
      document.head.querySelectorAll('[data-portfolio-seo]').forEach((element) => element.remove())
    }
  }, [config, jsonLd])

  return null
}
