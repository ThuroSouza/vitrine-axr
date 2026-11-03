export type ProjectCategory =
  | 'Sistemas empresariais'
  | 'Aplicativos'
  | 'Sites corporativos'
  | 'Atendimento ao cliente'
  | 'Gestão de tarefas'
  | 'Outros'

export type ProjectStatus = 'Em desenvolvimento' | 'Concluído'

export type ProjectImage = {
  src: string
  alt: string
  caption?: string
}

export type Project = {
  slug: string
  name: string
  category: ProjectCategory
  status: ProjectStatus
  approvedForPublication: true
  clientName?: string
  clientLogo?: ProjectImage
  coverImage: ProjectImage
  summary: string
  problem: string
  context: string
  objective: string
  solution: string
  features: readonly string[]
  technologies: readonly string[]
  gallery: readonly ProjectImage[]
}
