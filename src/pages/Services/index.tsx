import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { PageContainer } from '../../components/layout/PageContainer'
import { PrimaryButton } from '../../components/ui/PrimaryButton'
import { SectionHeader } from '../../components/ui/SectionHeader'
import { processSteps, services } from '../../data/services'
import { ServiceDetail } from './ServiceDetail'

export function ServicesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-white/10 py-16 sm:py-24">
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_85%_30%,rgba(23,37,84,0.48),transparent_48%)]" />
        <PageContainer>
          <div className="max-w-4xl">
            <h1 className="text-balance text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-white sm:text-6xl lg:text-7xl">Soluções pensadas para o seu negócio.</h1>
            <p className="mt-7 max-w-2xl text-pretty text-base leading-8 text-axr-muted sm:text-lg">Da organização de processos à experiência dos seus clientes, desenvolvemos tecnologia personalizada para atender necessidades reais da sua empresa.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><PrimaryButton to="/#contato">Solicitar solução personalizada</PrimaryButton><a href="#solucoes" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-axr-interactive">Explorar serviços <ArrowDown size={17} aria-hidden="true" /></a></div>
          </div>
        </PageContainer>
      </section>

      <section id="solucoes" tabIndex={-1} className="scroll-mt-8 py-20 sm:py-28">
        <PageContainer>
          <SectionHeader title="A solução acompanha a sua operação." description="Cada serviço parte de um escopo próprio. As possibilidades abaixo ajudam a visualizar o que pode ser desenvolvido, de acordo com as necessidades do projeto." />
          <div className="mt-12">{services.map((service) => <ServiceDetail key={service.id} {...service} />)}</div>
        </PageContainer>
      </section>

      <section className="border-y border-white/10 bg-axr-navy/50 py-20 sm:py-28">
        <PageContainer>
          <SectionHeader title="Do entendimento à implantação." description="Um processo organizado ajuda a transformar necessidades específicas em uma solução útil para a rotina da empresa." />
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map(({ number, title, description, icon: Icon }) => <li key={number} className="flex min-h-64 flex-col rounded-xl border border-white/10 bg-axr-black/55 p-6 sm:p-7"><div className="flex items-center justify-between"><span className="flex size-11 items-center justify-center rounded-lg border border-axr-interactive/25 bg-axr-blue/10 text-axr-interactive"><Icon size={21} strokeWidth={1.8} aria-hidden="true" /></span><span className="text-xs font-semibold tracking-[0.2em] text-axr-muted">{number} / 06</span></div><h3 className="mt-8 text-xl font-semibold text-white">{title}</h3><p className="mt-3 text-sm leading-7 text-axr-muted">{description}</p></li>)}
          </ol>
        </PageContainer>
      </section>

      <section className="py-20 sm:py-28">
        <PageContainer>
          <div className="relative overflow-hidden rounded-2xl border border-axr-interactive/25 bg-axr-navy p-7 sm:p-12 lg:p-16">
            <div aria-hidden="true" className="pointer-events-none absolute -right-28 -top-28 size-96 rounded-full border border-axr-interactive/20" />
            <div aria-hidden="true" className="pointer-events-none absolute -right-12 -top-12 size-64 rounded-full border border-axr-interactive/15" />
            <div className="relative max-w-2xl"><h2 className="text-balance text-3xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-4xl">Seu desafio pode ser o ponto de partida.</h2><p className="mt-5 text-base leading-8 text-axr-muted">Conte o que sua empresa precisa organizar, simplificar ou desenvolver. Podemos conversar sobre uma solução adequada ao seu contexto.</p><PrimaryButton to="/#contato" className="mt-8">Solicitar solução personalizada</PrimaryButton></div>
            <ArrowUpRight size={22} className="absolute right-7 top-7 text-axr-interactive sm:right-12 sm:top-12" aria-hidden="true" />
          </div>
        </PageContainer>
      </section>
    </>
  )
}
