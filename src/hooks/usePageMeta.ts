import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getPageMeta } from '../config/seo'
import { siteConfig } from '../config/site'

function updateMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.content = content
}

export function usePageMeta() {
  const { pathname } = useLocation()

  useEffect(() => {
    const { title, description, robots } = getPageMeta(pathname)
    document.title = title
    updateMeta('name', 'description', description)
    updateMeta('name', 'robots', robots ?? 'index, follow')
    updateMeta('property', 'og:title', title)
    updateMeta('property', 'og:description', description)
    updateMeta('name', 'twitter:title', title)
    updateMeta('name', 'twitter:description', description)

    const configuredUrl: string | null = siteConfig.siteUrl
    const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    const ogUrl = document.head.querySelector<HTMLMetaElement>('meta[property="og:url"]')
    if (configuredUrl) {
      const url = new URL(pathname, configuredUrl).href
      const link = canonical ?? document.createElement('link')
      link.rel = 'canonical'
      link.href = url
      if (!canonical) document.head.appendChild(link)
      updateMeta('property', 'og:url', url)
    } else {
      canonical?.remove()
      ogUrl?.remove()
    }
  }, [pathname])
}
