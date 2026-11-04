import { publishedProjects } from '../data/projects'
import { siteConfig } from './site'

type PageMeta = {
  title: string
  description: string
  robots?: 'noindex, follow'
}

const pageMeta: Record<string, PageMeta> = {
  '/': {
    title: 'AXR Sistemas Empresariais | Soluções tecnológicas sob medida',
    description: 'Desenvolvemos sistemas personalizados, aplicativos e soluções digitais para simplificar processos empresariais.',
  },
  '/servicos': {
    title: 'Serviços | AXR Sistemas Empresariais',
    description: 'Conheça os serviços de desenvolvimento de sistemas, aplicativos, sites corporativos e plataformas empresariais da AXR.',
  },
  '/clientes': {
    title: 'Projetos e Soluções | AXR Sistemas Empresariais',
    description: 'Explore prévias visuais de soluções da AXR para processos, finanças, visitas comerciais e vitrines de motos.',
  },
  '/institucional': {
    title: 'Institucional | AXR Sistemas Empresariais',
    description: 'Conheça a AXR Sistemas Empresariais, sua missão, visão, valores e área de atendimento.',
  },
  '/objetivos': {
    title: 'Objetivos | AXR Sistemas Empresariais',
    description: 'Conheça os objetivos da AXR e como soluções tecnológicas personalizadas podem apoiar empresas.',
  },
}

export function getPageMeta(pathname: string): PageMeta {
  const path = pathname.replace(/\/+$/, '') || '/'
  if (pageMeta[path]) return pageMeta[path]

  if (path.startsWith('/clientes/')) {
    const slug = path.slice('/clientes/'.length)
    const project = publishedProjects.find((item) => item.slug === slug)
    if (project) return {
      title: `${project.name} | Projetos AXR Sistemas`,
      description: project.summary,
    }
  }

  return {
    title: `Página não encontrada | ${siteConfig.name}`,
    description: 'A página solicitada não está disponível no site da AXR Sistemas Empresariais.',
    robots: 'noindex, follow',
  }
}
