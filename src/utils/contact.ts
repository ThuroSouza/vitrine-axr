import { siteConfig } from '../config/site'

export const whatsappMessage = 'Olá! Conheci a AXR Sistemas Empresariais pelo site e gostaria de conversar sobre o desenvolvimento de uma solução personalizada para minha empresa.'

export function getWhatsAppUrl(number: string | null): string | null {
  if (!number) return null

  const digits = number.replace(/\D/g, '')
  if (digits.length < 10 || digits.length > 15) return null

  return `https://wa.me/${digits}?text=${encodeURIComponent(whatsappMessage)}`
}

export const contactChannels = {
  whatsappUrl: getWhatsAppUrl(siteConfig.contact.whatsapp),
  email: siteConfig.contact.email?.trim() || null,
  socialLinks: siteConfig.contact.socialLinks.filter(({ url }) => {
    try { return new URL(url).protocol === 'https:' } catch { return false }
  }),
}
