import { AppWindow, BriefcaseBusiness, ClipboardList, Headset, LayoutTemplate, Lightbulb, MoveUpRight, RefreshCw, ScanSearch, Scaling, Smartphone, Sparkles } from 'lucide-react'

export const homeServices = [
  { id: 'sistemas-empresariais', title: 'Sistemas empresariais personalizados', description: 'Soluções desenhadas para organizar operações e acompanhar a rotina de cada empresa.', icon: BriefcaseBusiness },
  { id: 'aplicativos', title: 'Aplicativos personalizados', description: 'Experiências digitais criadas para necessidades específicas de equipes e clientes.', icon: Smartphone },
  { id: 'sites-corporativos', title: 'Sites corporativos', description: 'Presença digital clara, responsiva e alinhada à identidade do seu negócio.', icon: LayoutTemplate },
  { id: 'atendimento', title: 'Plataformas de atendimento', description: 'Ferramentas para organizar solicitações e facilitar a comunicação com clientes.', icon: Headset },
  { id: 'tarefas-processos', title: 'Gestão de tarefas e processos', description: 'Mais visibilidade sobre atividades, responsabilidades e fluxos de trabalho.', icon: ClipboardList },
] as const

export const homeDifferentials = [
  { title: 'Desenvolvimento sob medida', icon: Sparkles },
  { title: 'Foco em problemas reais', icon: ScanSearch },
  { title: 'Soluções escaláveis', icon: Scaling },
  { title: 'Interfaces intuitivas', icon: AppWindow },
  { title: 'Melhoria contínua', icon: RefreshCw },
  { title: 'Atendimento em todo o Brasil', icon: MoveUpRight },
] as const

export const homeApproach = [
  { number: '01', title: 'Entender', description: 'Cada projeto começa pelo desafio e pelo contexto da empresa.', icon: Lightbulb },
  { number: '02', title: 'Desenhar', description: 'A solução é planejada para o fluxo de trabalho que precisa atender.', icon: ScanSearch },
  { number: '03', title: 'Evoluir', description: 'A tecnologia acompanha as necessidades do negócio.', icon: RefreshCw },
] as const
