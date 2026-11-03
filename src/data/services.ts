import {
  BriefcaseBusiness,
  ClipboardCheck,
  Code2,
  Headset,
  LayoutTemplate,
  ListTodo,
  Map,
  MessageSquareText,
  Rocket,
  Smartphone,
} from 'lucide-react'

export const services = [
  {
    id: 'sistemas-empresariais',
    number: '01',
    title: 'Sistemas Empresariais Personalizados',
    description: 'Desenvolvemos sistemas adaptados à operação de cada empresa, considerando seus processos, equipes e objetivos.',
    detail: 'Conforme as necessidades do projeto, a solução pode contemplar:',
    possibilities: ['Controle de estoque', 'Gestão financeira', 'Gestão de clientes', 'Controle operacional', 'Relatórios gerenciais', 'Integração de processos'],
    note: 'São exemplos de funcionalidades possíveis, definidos para cada projeto. Não representam produtos prontos.',
    icon: BriefcaseBusiness,
  },
  {
    id: 'aplicativos',
    number: '02',
    title: 'Aplicativos Personalizados',
    description: 'Criamos aplicativos para necessidades específicas de empresas, com experiências pensadas para quem vai utilizá-los.',
    detail: 'Soluções para Android e iOS podem ser consideradas conforme o escopo e as necessidades de cada projeto.',
    icon: Smartphone,
  },
  {
    id: 'sites-corporativos',
    number: '03',
    title: 'Sites Corporativos',
    description: 'Desenvolvemos sites institucionais e plataformas web com layouts modernos, responsivos e adaptados à identidade de cada empresa.',
    detail: 'Uma presença digital organizada ajuda a apresentar informações, serviços e canais de contato com clareza.',
    icon: LayoutTemplate,
  },
  {
    id: 'atendimento',
    number: '04',
    title: 'Plataformas de Atendimento ao Cliente',
    description: 'Criamos sistemas para organizar atendimentos, solicitações e comunicação com clientes.',
    detail: 'A solução pode apoiar o acompanhamento de demandas de acordo com o fluxo de atendimento da empresa.',
    icon: Headset,
  },
  {
    id: 'tarefas-processos',
    number: '05',
    title: 'Gestão de Tarefas e Processos',
    description: 'Desenvolvemos ferramentas para organizar atividades, responsabilidades, prazos, equipes e processos internos.',
    detail: 'Cada fluxo é estruturado a partir da forma como a organização trabalha e do que precisa acompanhar.',
    icon: ListTodo,
  },
] as const

export const processSteps = [
  { number: '01', title: 'Entendimento', description: 'Conhecemos as necessidades, o contexto e os desafios da empresa.', icon: MessageSquareText },
  { number: '02', title: 'Planejamento', description: 'Definimos a proposta de solução e organizamos o escopo do projeto.', icon: Map },
  { number: '03', title: 'Desenvolvimento', description: 'Construímos a solução personalizada conforme o planejamento acordado.', icon: Code2 },
  { number: '04', title: 'Testes e validações', description: 'Verificamos o funcionamento e validamos a solução antes da entrega.', icon: ClipboardCheck },
  { number: '05', title: 'Implantação', description: 'Preparamos a solução para entrar em uso no ambiente previsto.', icon: Rocket },
  { number: '06', title: 'Acompanhamento', description: 'Suporte e acompanhamento podem ser realizados conforme a contratação.', icon: Headset },
] as const
