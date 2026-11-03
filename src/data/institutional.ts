import { Compass, Eye, Handshake, Lightbulb, LockKeyhole, RefreshCw, ShieldCheck, Sparkles } from 'lucide-react'

export const institutionalContent = {
  positioning: 'Tecnologia personalizada para transformar desafios empresariais em soluções eficientes.',
  about: [
    'A AXR Sistemas Empresariais é especializada no desenvolvimento de sistemas personalizados para empresas no Brasil.',
    'Criamos soluções tecnológicas sob medida, incluindo sistemas empresariais, aplicativos personalizados, sites corporativos, plataformas de atendimento ao cliente e ferramentas para gestão de tarefas.',
    'Nosso objetivo é solucionar problemas empresariais por meio de tecnologia, otimizando processos internos, melhorando a experiência dos clientes e aumentando a eficiência operacional.',
    'Atendemos pequenas, médias e grandes empresas, com atendimento online em todo o Brasil e presencial na Baixada Santista.',
  ],
  mission: 'Desenvolver soluções tecnológicas personalizadas que simplifiquem processos, resolvam desafios empresariais e contribuam para o crescimento dos nossos clientes.',
  vision: 'Ser reconhecida como uma empresa de referência no desenvolvimento de soluções digitais personalizadas, destacando-se pela inovação, qualidade e compromisso com os clientes.',
  values: [
    { label: 'Inovação', icon: Lightbulb },
    { label: 'Compromisso com o cliente', icon: Handshake },
    { label: 'Transparência', icon: Eye },
    { label: 'Qualidade', icon: Sparkles },
    { label: 'Responsabilidade', icon: ShieldCheck },
    { label: 'Segurança', icon: LockKeyhole },
    { label: 'Melhoria contínua', icon: RefreshCw },
  ],
  serviceAreas: [
    { title: 'Todo o Brasil', mode: 'Atendimento online', description: 'Acompanhamos empresas em diferentes regiões do país por canais digitais.', icon: Compass },
    { title: 'Baixada Santista', mode: 'Atendimento presencial', description: 'Atendimento presencial na região da Baixada Santista.', icon: Handshake },
  ],
} as const
