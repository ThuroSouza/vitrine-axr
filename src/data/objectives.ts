import {
  ArrowDownUp,
  Blocks,
  ChartNoAxesCombined,
  ClipboardList,
  HeartHandshake,
  Layers3,
  MonitorSmartphone,
  UsersRound,
} from 'lucide-react'

export const objectivesContent = {
  main: 'Transformar desafios empresariais em soluções tecnológicas personalizadas, ajudando organizações a trabalhar com mais eficiência, organização e inteligência.',
  specific: [
    { title: 'Digitalizar processos empresariais', description: 'Levar fluxos de trabalho para ferramentas adequadas à rotina da empresa.', icon: MonitorSmartphone },
    { title: 'Reduzir atividades manuais e repetitivas', description: 'Identificar tarefas que podem ser simplificadas por meio de sistemas.', icon: ArrowDownUp },
    { title: 'Melhorar a organização de informações', description: 'Estruturar dados para facilitar consultas e acompanhamento.', icon: Layers3 },
    { title: 'Aumentar a eficiência operacional', description: 'Apoiar equipes com processos mais claros e conectados.', icon: ChartNoAxesCombined },
    { title: 'Melhorar a experiência dos clientes', description: 'Criar interações digitais mais simples e acessíveis.', icon: UsersRound },
    { title: 'Desenvolver soluções escaláveis', description: 'Planejar soluções que possam acompanhar novas necessidades.', icon: Blocks },
    { title: 'Facilitar o acesso à tecnologia personalizada', description: 'Adaptar a tecnologia ao contexto e aos objetivos de cada negócio.', icon: ClipboardList },
    { title: 'Construir relacionamentos duradouros com os clientes', description: 'Trabalhar com diálogo, entendimento e evolução contínua.', icon: HeartHandshake },
  ],
  applications: [
    { number: '01', title: 'Processos digitalizados', description: 'Uma operação baseada em planilhas ou controles manuais pode ganhar uma ferramenta própria para registrar atividades e acompanhar etapas.', example: 'Exemplo de solução: sistema empresarial personalizado.' },
    { number: '02', title: 'Informações organizadas', description: 'Dados de clientes, tarefas e demandas podem ser reunidos em fluxos mais fáceis de consultar e atualizar.', example: 'Exemplo de solução: plataforma de gestão de tarefas e processos.' },
    { number: '03', title: 'Atendimento mais claro', description: 'Solicitações podem ser estruturadas para que equipes acompanhem demandas e mantenham a comunicação com clientes.', example: 'Exemplo de solução: plataforma de atendimento ao cliente.' },
  ],
} as const
