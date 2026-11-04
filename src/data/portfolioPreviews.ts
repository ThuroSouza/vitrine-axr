export type PortfolioPreview = {
  name: string
  category: string
  description: string
  image: string
  alt: string
  accent: string
}

// Identidades e telas demonstrativas para apresentar o tipo de solução.
// Não são capturas de sistemas de clientes nem cases com resultados publicados.
export const portfolioPreviews: readonly PortfolioPreview[] = [
  {
    name: 'AXR Fluxo',
    category: 'Gestão de processos',
    description: 'Organiza tarefas em um quadro Kanban com subtarefas, prazos e acompanhamento de cada etapa.',
    image: '/portfolio/axr-fluxo.svg',
    alt: 'Prévia ilustrativa do AXR Fluxo com tarefas e subtarefas em um quadro Kanban',
    accent: '#4DE1D1',
  },
  {
    name: 'AXR Saldo',
    category: 'Sistema financeiro',
    description: 'Reúne receitas, despesas, lançamentos e contas em um painel financeiro mensal.',
    image: '/portfolio/axr-saldo.svg',
    alt: 'Prévia ilustrativa do AXR Saldo com resumo mensal, contas e valores demonstrativos',
    accent: '#B9F36C',
  },
  {
    name: 'AXR Visitas',
    category: 'Visitação e orçamentos',
    description: 'Combina agenda de visitas e calculadora de pedidos para preparar orçamentos vinculados a clientes.',
    image: '/portfolio/axr-visitas.svg',
    alt: 'Prévia ilustrativa do AXR Visitas com calculadora de orçamento e resumo do pedido',
    accent: '#FFB86B',
  },
  {
    name: 'AXR Motos',
    category: 'Vitrine de motos',
    description: 'Apresenta motocicletas em uma vitrine digital com catálogo, filtros e páginas de detalhes.',
    image: '/portfolio/axr-motos.svg',
    alt: 'Prévia ilustrativa da vitrine AXR Motos com uma moto em destaque',
    accent: '#E85D2A',
  },
]
